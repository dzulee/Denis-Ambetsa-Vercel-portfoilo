import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { blogControllers } from '../controllers/blogControllers';
import '../css/blog.css';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const escapeRegExp = (value = '') => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightMatch = (value = '', query = '') => {
  const trimmed = query.trim();
  if (!trimmed) return escapeHtml(value);

  const pattern = new RegExp(`(${escapeRegExp(trimmed)})`, 'ig');
  return escapeHtml(value).replace(pattern, '<mark>$1</mark>');
};

const slugify = (value = '') =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'blog-post';

const buildSlug = (title = '', rowId) => `${slugify(title)}-${rowId || 'post'}`;

const getStoryParagraphs = (story = '') =>
  story
    .split(/\r?\n\s*\r?\n|\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const posts = await blogControllers.getPosts();
        const foundPost = posts.find((item) => buildSlug(item.title, item.rowId) === slug);

        if (!foundPost) {
          setError('This blog post could not be found.');
          setPost(null);
          return;
        }

        setPost(foundPost);
      } catch (err) {
        setError(err.message || 'We could not load this article.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const siteUrl = 'https://ambetsatech.vercel.app';
    const description = `${post.title} — practical insights on ${post.story ? post.story.slice(0, 150).replace(/\s+/g, ' ').trim() : 'web development, data analysis, and digital strategy.'}`;

    document.title = `${post.title} | AmbetsaTech Blog`;

    const setMeta = (selector, attribute, value, tag = 'meta') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement(tag);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', `${post.title}, AmbetsaTech blog, web development, data analysis, digital strategy, business growth`);
    setMeta('meta[property="og:title"]', 'content', post.title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', `${siteUrl}/blog/${slug}`);
    setMeta('meta[name="twitter:title"]', 'content', post.title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      image: post.imageUrl || `${siteUrl}/Ambetsa.jpeg`,
      author: {
        '@type': 'Person',
        name: 'Denis Ambetsa',
        jobTitle: 'Full Stack Developer & Data Analyst'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AmbetsaTech',
        logo: `${siteUrl}/logo2.png`
      },
      mainEntityOfPage: `${siteUrl}/blog/${slug}`,
      articleSection: 'Technology Insights',
      keywords: `${post.title}, web development, data analysis, digital strategy, business growth`,
      url: `${siteUrl}/blog/${slug}`
    };

    let schemaTag = document.getElementById('article-schema');
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.id = 'article-schema';
      schemaTag.type = 'application/ld+json';
      document.head.appendChild(schemaTag);
    }

    schemaTag.textContent = JSON.stringify(articleSchema);
  }, [post, slug]);

  const searchQuery = useMemo(() => new URLSearchParams(location.search).get('q') || '', [location.search]);
  const articleParagraphs = useMemo(() => getStoryParagraphs(post?.story || ''), [post]);
  const highlightedParagraphs = useMemo(() => articleParagraphs.map((paragraph) => highlightMatch(paragraph, searchQuery)), [articleParagraphs, searchQuery]);

  if (loading) {
    return (
      <section className="blog-section blog-state" aria-busy="true">
        <Navbar />
        <div className="container text-center">
          <p className="blog-eyebrow">The journal</p>
          <h1 className="blog-page-title">Loading article...</h1>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="blog-section blog-state">
        <Navbar />
        <div className="container text-center">
          <p className="blog-eyebrow">The journal</p>
          <h1 className="blog-page-title">Article unavailable</h1>
          <p className="blog-state-message">{error || 'This blog article could not be found.'}</p>
          <button className="blog-page-button mt-3" onClick={() => navigate('/blog')}>
            Back to blog
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section py-5" id="blog-post" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="container blog-page-shell">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <button className="blog-page-button mb-4" onClick={() => navigate('/blog')}>
              ← Back to blog
            </button>

            <article className="blog-content-box shadow">
              <div className="blog-post-grid">
                <div className="blog-post-media">
                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title || 'AmbetsaTech blog article'} className="blog-post-image" />
                  ) : (
                    <div className="blog-post-image blog-post-image-fallback" aria-hidden="true">
                      <span>Ambetsa Tech</span>
                    </div>
                  )}
                </div>

                <div className="blog-post-body">
                  <div className="blog-post-kicker">Field note</div>
                  <h1 className="blog-page-title text-start" dangerouslySetInnerHTML={{ __html: highlightMatch(post.title, searchQuery) }} />

                  <div className="blog-story is-expanded">
                    {highlightedParagraphs.map((paragraph, index) => (
                      <p className="lead" key={`${post.rowId}-article-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
