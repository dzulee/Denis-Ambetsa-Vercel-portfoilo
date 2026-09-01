import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyText, setReplyText] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAgenda, setSelectedAgenda] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 2;
  const blogAgendas = ['All', 'Data Analysis', 'Project Management', 'Web Development', 'Business Strategy', 'IT Support', 'Consulting'];

  const cleanText = (value = '') =>
    String(value)
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const getExcerpt = (story = '', maxLength = 160) => {
    const cleaned = cleanText(story);
    if (!cleaned) return 'Insights on web development, data analysis, digital strategy, and practical business growth.';
    return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength).trim()}...` : cleaned;
  };

  const matchesAgenda = (post, agenda) => {
    if (agenda === 'All') return true;

    const combinedText = `${post.title || ''} ${post.story || ''}`.toLowerCase();

    const agendaPatterns = {
      'Data Analysis': /(data analysis|analytics|dashboard|excel|power bi|sql|python|eda|insight|reporting)/i,
      'Project Management': /(project management|roadmap|planning|timeline|stakeholder|delivery|execution|milestone|sprint|workflow)/i,
      'Web Development': /(web development|website|frontend|backend|react|javascript|css|html|api|seo|ui|ux|performance)/i,
      'Business Strategy': /(business strategy|strategy|growth|digital transformation|consulting|operations|optimization|process|decision making)/i,
      'IT Support': /(it support|infrastructure|system|network|security|maintenance|troubleshooting|support)/i,
      'Consulting': /(consulting|advisory|problem solving|improvement|optimization|business|transformation)/i,
    };

    return agendaPatterns[agenda]?.test(combinedText) ?? true;
  };

  const matchesSearch = (post, query) => {
    const trimmed = query.trim();
    if (!trimmed) return true;

    const haystack = `${post.title || ''} ${post.story || ''}`;
    try {
      const regex = new RegExp(trimmed, 'i');
      return regex.test(haystack);
    } catch {
      return haystack.toLowerCase().includes(trimmed.toLowerCase());
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await blogControllers.getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!posts.length) return;

    const siteUrl = 'https://ambetsatech.vercel.app';
    const keywordPool = posts.flatMap((post) => {
      const titleWords = (post.title || '').split(/[^a-zA-Z0-9]+/).filter((word) => word.length > 3);
      const storyKeywords = (post.story || '').split(/[^a-zA-Z0-9]+/).filter((word) => word.length > 4 && !['with', 'that', 'from', 'into', 'this', 'your', 'have', 'they', 'them', 'what', 'when', 'where', 'about', 'there', 'their'].includes(word.toLowerCase()));
      return [...titleWords, ...storyKeywords];
    });

    const keywords = [...new Set(keywordPool.map((word) => word.toLowerCase()))].slice(0, 25).join(', ');
    const firstThreeTitles = posts.slice(0, 3).map((post) => post.title).join(' | ');
    const pageDescription = `Read practical insights on ${firstThreeTitles} and more: web development, data analysis, digital strategy, business growth, and technology implementation.`;

    document.title = 'AmbetsaTech Blog | Web Development, Data Analysis & Business Strategy';

    const setMeta = (selector, attribute, value, type = 'meta') => {
      const existing = document.querySelector(selector);
      if (existing) {
        existing.setAttribute(attribute, value);
        return;
      }

      const element = document.createElement(type);
      element.setAttribute(attribute, value);
      document.head.appendChild(element);
    };

    setMeta('meta[name="description"]', 'content', pageDescription);
    setMeta('meta[name="keywords"]', 'content', keywords || 'AmbetsaTech blog, web development, data analysis, business strategy, tech insights');
    setMeta('meta[property="og:title"]', 'content', 'AmbetsaTech Blog | Web Development & Data Insights');
    setMeta('meta[property="og:description"]', 'content', pageDescription);
    setMeta('meta[property="og:url"]', 'content', `${siteUrl}/blog`);
    setMeta('meta[name="twitter:title"]', 'content', 'AmbetsaTech Blog | Web Development & Data Insights');
    setMeta('meta[name="twitter:description"]', 'content', pageDescription);

    const schemaScript = document.getElementById('blog-page-schema') || document.createElement('script');
    schemaScript.id = 'blog-page-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'AmbetsaTech Blog',
      description: pageDescription,
      url: `${siteUrl}/blog`,
      publisher: {
        '@type': 'Organization',
        name: 'AmbetsaTech',
        logo: `${siteUrl}/logo2.png`
      },
      author: {
        '@type': 'Person',
        name: 'Denis Ambetsa',
        jobTitle: 'Full Stack Developer & Data Analyst'
      },
      blogPost: posts.slice(0, 10).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: getExcerpt(post.story),
        image: post.imageUrl || `${siteUrl}/Ambetsa.jpeg`,
        author: {
          '@type': 'Person',
          name: 'Denis Ambetsa'
        },
        mainEntityOfPage: `${siteUrl}/blog`,
        articleSection: 'Technology Insights',
        keywords: [post.title, 'AmbetsaTech blog', 'web development', 'data analysis', 'digital strategy']
      }))
    });

    if (!document.getElementById('blog-page-schema')) {
      document.head.appendChild(schemaScript);
    }
  }, [posts]);

  const handleAction = async (rowId, action, message = "") => {
    try {
      // FIXED: using blogControllers instead of blogService
      await blogControllers.postAction(rowId, action, message);
      
      if (action === 'like') {
        setPosts(posts.map(p => p.rowId === rowId ? { ...p, likes: (p.likes || 0) + 1 } : p));
      } else {
        alert("Reply sent to Denis!");
        setReplyText(prev => ({ ...prev, [rowId]: "" }));
      }
    } catch (err) {
      console.error("Action failed:", err);
    }
  };

  const agendaCounts = blogAgendas.reduce((counts, agenda) => {
    counts[agenda] = agenda === 'All'
      ? posts.length
      : posts.filter((post) => matchesAgenda(post, agenda)).length;
    return counts;
  }, {});

  const filteredPosts = posts.filter((post) => matchesAgenda(post, selectedAgenda) && matchesSearch(post, searchTerm));

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedAgenda, searchTerm]);

  const paginate = (num) => {
    const safePage = Math.min(Math.max(1, num), totalPages || 1);
    setCurrentPage(safePage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const pageWindowSize = 7;
  const pageWindowStart = Math.floor((currentPage - 1) / pageWindowSize) * pageWindowSize + 1;
  const pageWindowEnd = Math.min(totalPages, pageWindowStart + pageWindowSize - 1);
  const pageNumbers = Array.from({ length: pageWindowEnd - pageWindowStart + 1 }, (_, index) => pageWindowStart + index);

  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const getStoryParagraphs = (story = '') => (
    story
      .split(/\r?\n\s*\r?\n|\r?\n/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean)
  );

  const buildPostSlug = (title = '', rowId) => {
    const slugValue = String(title).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'blog-post';
    return `${slugValue}-${rowId || 'post'}`;
  };

  const getHighlightedStoryParagraphs = (story = '', query = '') =>
    getStoryParagraphs(story).map((paragraph) => highlightMatch(paragraph, query));

  if (loading) return (
    <section className="blog-section blog-state" aria-busy="true">
      <Navbar />
      <div className="container text-center">
        <p className="blog-eyebrow">The journal</p>
        <h1 className="blog-page-title">AmbetsaTech insights</h1>
        <p className="blog-state-message">Loading practical notes on technology, data, and business growth.</p>
      </div>
    </section>
  );

  if (error) {
    return (
      <section className="blog-section blog-state">
        <Navbar />
        <div className="container text-center">
          <p className="blog-eyebrow">The journal</p>
          <h1 className="blog-page-title">Stories are taking a pause</h1>
          <p className="blog-state-message">We could not load the latest posts right now. Please try again shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section py-5" id="blog" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="sr-only" aria-label="Search engine visible blog topics">
        <h2>AmbetsaTech blog topics</h2>
        <p>
          {posts.slice(0, 6).map((post) => post.title).join(', ')}. Practical insights on web development, data analysis, digital strategy, business growth, and technology implementation.
        </p>
      </div>
      <div className="container blog-page-shell">
        <header className="blog-page-header text-center">
          <p className="blog-eyebrow">Ideas for better digital work</p>
          <h1 className="blog-page-title">The Ambetsa journal</h1>
          <p className="blog-page-intro">Practical perspectives on technology, data, strategy, and building businesses that move with intention.</p>
        </header>
        <div className="blog-toolbar mb-4">
          <div className="blog-filter-group" role="tablist" aria-label="Filter blog topics">
            {blogAgendas.map((agenda) => (
              <button
                key={agenda}
                type="button"
                className={`blog-filter-button ${selectedAgenda === agenda ? 'is-selected' : ''}`}
                onClick={() => setSelectedAgenda(agenda)}
              >
                {agenda}
                <span className="blog-filter-count">{agendaCounts[agenda] || 0}</span>
              </button>
            ))}
          </div>

          <div className="blog-search-wrap">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search blog title or article..."
              aria-label="Search blog posts"
              className="blog-search-input"
            />
            {(selectedAgenda !== 'All' || searchTerm.trim()) && (
              <button
                type="button"
                className="blog-clear-search"
                onClick={() => {
                  setSelectedAgenda('All');
                  setSearchTerm('');
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-5">
            <p className="blog-state-message">No blog posts match your filters or search terms.</p>
            <button className="blog-page-button mt-3" onClick={() => { setSelectedAgenda('All'); setSearchTerm(''); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            {currentPosts.map((post) => (
              <div className="col-lg-10" key={post.rowId}>
              <article className="blog-content-box mb-4 shadow">
                <div className="blog-post-grid">
                  <div className="blog-post-media">
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt={post.title || 'AmbetsaTech journal article'} className="blog-post-image" />
                    ) : (
                      <div className="blog-post-image blog-post-image-fallback" aria-hidden="true">
                        <span>Ambetsa Tech</span>
                      </div>
                    )}
                  </div>

                  <div className="blog-post-body">
                    <div className="blog-post-kicker">Field note</div>
                    <h2 dangerouslySetInnerHTML={{ __html: highlightMatch(post.title, searchTerm) }} />

                    <div className={`blog-story ${expandedPosts[post.rowId] ? 'is-expanded' : ''}`}>
                      {getHighlightedStoryParagraphs(post.story, searchTerm).map((paragraph, index) => (
                        <p className="lead" key={`${post.rowId}-paragraph-${index}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>

                    <button className="blog-read-more" onClick={() => setExpandedPosts(prev => ({ ...prev, [post.rowId]: !prev[post.rowId] }))}>
                      {expandedPosts[post.rowId] ? "Show Less ↑" : "Read More ↓"}
                    </button>
                    <Link to={`/blog/${buildPostSlug(post.title, post.rowId)}?q=${encodeURIComponent(searchTerm)}`} className="blog-read-more d-inline-block text-decoration-none">
                      Read article →
                    </Link>
                  </div>
                </div>

                <div className="interaction-area">
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <button onClick={() => handleAction(post.rowId, 'like')} className="likes">
                      Like · {post.likes || 0}
                    </button>
                    <div className="position-relative flex-grow-1">
                      <textarea
                        className="blog-reply-input form-control pe-5"
                        placeholder="Reply..."
                        value={replyText[post.rowId] || ""}
                        onChange={(e) => setReplyText({ ...replyText, [post.rowId]: e.target.value })}
                      />
                      <button onClick={() => handleAction(post.rowId, 'reply', replyText[post.rowId])} className="blog-reply-button" aria-label="Send reply">-&gt;</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            ))}
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mt-3">
          <button
            disabled={pageWindowStart === 1}
            onClick={() => paginate(Math.max(1, pageWindowStart - pageWindowSize))}
            className="blog-page-button"
          >
            Prev
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`blog-page-button blog-page-number ${currentPage === pageNumber ? 'is-active' : ''}`}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={currentPage === pageNumber ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          ))}

          <button
            disabled={pageWindowEnd >= totalPages}
            onClick={() => paginate(Math.min(totalPages, pageWindowStart + pageWindowSize))}
            className="blog-page-button"
          >
            Next
          </button>
            <span className="blog-page-count">Page {currentPage} of {totalPages}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;