import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { blogControllers } from '../controllers/blogControllers'; 
import '../css/blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [replyText, setReplyText] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

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

  const paginate = (num) => {
    setCurrentPage(num);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const getStoryParagraphs = (story = '') => (
    story
      .split(/\r?\n\s*\r?\n|\r?\n/)
      .map(paragraph => paragraph.trim())
      .filter(Boolean)
  );

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
      <div className="container blog-page-shell">
        <header className="blog-page-header text-center">
          <p className="blog-eyebrow">Ideas for better digital work</p>
          <h1 className="blog-page-title">The Ambetsa journal</h1>
          <p className="blog-page-intro">Practical perspectives on technology, data, strategy, and building businesses that move with intention.</p>
        </header>
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
                    <h2>{post.title}</h2>

                    <div className={`blog-story ${expandedPosts[post.rowId] ? 'is-expanded' : ''}`}>
                      {getStoryParagraphs(post.story).map((paragraph, index) => (
                        <p className="lead" key={`${post.rowId}-paragraph-${index}`}>{paragraph}</p>
                      ))}
                    </div>

                    <button className="blog-read-more" onClick={() => setExpandedPosts(prev => ({ ...prev, [post.rowId]: !prev[post.rowId] }))}>
                      {expandedPosts[post.rowId] ? "Show Less ↑" : "Read More ↓"}
                    </button>
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

        {/* Pagination UI */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} className="blog-page-button">Prev</button>
          <span className="blog-page-count">Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)} className="blog-page-button">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;