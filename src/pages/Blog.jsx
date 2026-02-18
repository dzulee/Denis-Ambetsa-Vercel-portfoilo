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

  if (loading) return <div className="text-center text-white p-5">Loading stories...</div>;

  return (
    <section className="blog-section py-5" id="blog">
      <Navbar />
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {currentPosts.map((post) => (
            <div className="col-lg-10" key={post.rowId}>
              <div className="blog-content-box rounded-4 mb-4 shadow" style={blogControllers.getBackgroundStyle(post)}>
                <h3 className="fw-bold mb-3">{post.title}</h3>
                
                <div style={{ maxHeight: expandedPosts[post.rowId] ? 'none' : '150px', overflow: 'hidden', position: 'relative' }}>
                  <p className="lead" style={{ whiteSpace: "pre-wrap" }}>{post.story}</p>
                </div>

                <button className="btn btn-link text-warning fw-bold mb-3" onClick={() => setExpandedPosts(prev => ({ ...prev, [post.rowId]: !prev[post.rowId] }))}>
                  {expandedPosts[post.rowId] ? "Show Less ↑" : "Read More ↓"}
                </button>

                <div className="interaction-area w-100 border-top border-secondary pt-3">
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <button onClick={() => handleAction(post.rowId, 'like')} className="likes fw-bold">
                      👍 {post.likes || 0}
                    </button>
                    <div className="position-relative flex-grow-1">
                      <textarea 
                        className="form-control bg-dark text-white pe-5" 
                        placeholder="Reply..."
                        value={replyText[post.rowId] || ""}
                        onChange={(e) => setReplyText({ ...replyText, [post.rowId]: e.target.value })}
                      />
                      <button onClick={() => handleAction(post.rowId, 'reply', replyText[post.rowId])} className="btn btn-warning position-absolute top-50 end-0 translate-middle-y me-2">➔</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination UI */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} className="btn btn-outline-warning">Prev</button>
          <span className="text-white align-self-center">Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)} className="btn btn-outline-warning">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;