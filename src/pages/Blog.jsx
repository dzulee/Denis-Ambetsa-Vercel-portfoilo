import React, { useState, useEffect } from 'react';
import '../css/blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state
  const [replyText, setReplyText] = useState({});

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycby1jvCtDlilOnal7iNYJt99FNteKLOTg50LP1uPYkbi5zHTvrgUDtHXYrIjJm4FS5Lpyw/exec";

  const fetchPosts = () => {
    setLoading(true);
    fetch(SCRIPT_URL)
      .then(res => {
        // If Google sends HTML, the content-type won't be application/json
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        } else {
          throw new Error("Google sent back HTML instead of JSON. Check your 'Anyone' permissions!");
        }
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (SCRIPT_URL) {
      fetchPosts();
    } else {
      setError("VITE_GOOGLE_SCRIPT_URL is missing from .env");
      setLoading(false);
    }
  }, []);

  const handleAction = async (rowId, action, message = "") => {
    // Mode 'no-cors' means we can't read the response, but the data still hits the sheet
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' }, // Avoids pre-flight issues
      body: JSON.stringify({ rowId, action, message })
    });
    
    if (action === 'like') {
      setPosts(posts.map(p => p.rowId === rowId ? { ...p, likes: (p.likes || 0) + 1 } : p));
    } else {
      alert("Reply sent to Dennis!");
      setReplyText({ ...replyText, [rowId]: "" });
    }
  };

  if (loading) return (
    <div className="text-center text-white p-5">
      <div className="spinner-border text-warning" role="status"></div>
      <p className="mt-3">Fetching stories...</p>
    </div>
  );

  if (error) return (
    <div className="text-center text-danger p-5">
      <p>⚠️ Error: {error}</p>
      <button className="btn btn-outline-light btn-sm" onClick={fetchPosts}>Try Again</button>
    </div>
  );

  return (
    <section className="blog-section py-5" id="blog">
      <div className="container">
        <h2 className="display-5 fw-bold text-white mb-5 text-center">Insights & Stories</h2>
        <div className="row g-4 justify-content-center">
          {posts.map((post) => (
            <div className="col-lg-10" key={post.rowId}>
              <div className="blog-content-box p-4 p-md-5 rounded-4 mb-4">
                <span className="badge bg-warning text-dark mb-2">{post.contentType}</span>
                <h3 className="text-white fw-bold mb-3">{post.title}</h3>
                <p className="lead text-light">{post.story}</p>

                <div className="interaction-area mt-4 border-top border-secondary pt-3">  
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                    <button 
                      onClick={() => handleAction(post.rowId, 'like')}
                      className="btn btn-warning d-flex align-items-center justify-content-center fw-bold shadow-sm"
                      style={{ width: '100px', height: '45px', borderRadius: '12px' }}
                    >
                      👍 {post.likes || 0}
                    </button>

                    <div className="reply-wrapper w-100 position-relative">
                      <textarea 
                        className="form-control bg-dark text-white border-secondary pe-5"
                        placeholder="Write a reply..."
                        style={{ minHeight: '60px', borderRadius: '15px', resize: 'none' }}
                        value={replyText[post.rowId] || ""}
                        onChange={(e) => setReplyText({ ...replyText, [post.rowId]: e.target.value })}
                      />
                      <button 
                        onClick={() => handleAction(post.rowId, 'reply', replyText[post.rowId])}
                        className="btn btn-warning position-absolute translate-middle-y"
                        style={{ top: '50%', right: '10px', borderRadius: '50%', width: '35px', height: '35px', padding: '0' }}
                      >
                        ➔
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;