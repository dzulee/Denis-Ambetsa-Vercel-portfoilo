const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const blogControllers = {
  // Fetch logic
  getPosts: async () => {
    const res = await fetch(SCRIPT_URL);
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    }
    throw new Error("Invalid response format from server.");
  },

  // Post logic (Likes/Replies)
  postAction: async (rowId, action, message = "") => {
    return await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ rowId, action, message })
    });
  },

  // Style logic
  getBackgroundStyle: (post) => {
    const hasImg = post.imageUrl && post.imageUrl.trim() !== "";
    return {
      backgroundImage: hasImg 
        ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${post.imageUrl})` 
        : 'none',
      backgroundColor: '#121212',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      padding: '40px 20px',
      borderRadius: '12px',
      textAlign: 'center'
    };
  }
};