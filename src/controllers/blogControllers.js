const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzpq4R3ysaR-xdOyydDCtSeV0xOrUFrjzTAXfnL9yDtvKf1xwdp_ak60iIoacZQrO33oQ/exec";

const fallbackPosts = [
  {
    rowId: 2,
    title: 'The journey Of No Stop',
    story: 'By AmbetsaTech\n\nEvery step forward honors the ground you have already covered. Success is rarely a smooth climb; it is built on the willingness to endure the burn, adapt through every fall, and reclaim control over the outcome.\n\nFueling the Momentum\n• Acknowledge the Legacy: Remembering past setbacks converts every former sacrifice into current leverage. The effort invested previously creates an obligation to finish what was started.\n• Controlled Risk: Catching a falling knife demands absolute focus, timing, and composure. High-stakes moves require precision, clear judgment, and steady nerves rather than reckless hesitation.\n• Focus on the Objective: Relentless daily execution bridges the gap between where you stand and the ultimate target. Each small victory compounds until the vision turns into reality.\n\nPerseverance is not merely about enduring hardship—it is the choice to keep driving forward until the goal is secured. Keep building, keep refining, and keep pushing.',
    imageUrl: 'https://i.pinimg.com/736x/2a/3c/e6/2a3ce6e978a93e51ff23e7c4a458028b.jpg',
    likes: 12
  },
  {
    rowId: 3,
    title: 'Business Growth with Data and Digital Strategy',
    story: 'By AmbetsaTech\n\nModern businesses do not grow by chance. They grow through consistency, clear measurement, and technical systems that support every decision. Data gives you the signal; strategy gives you the direction.\n\nThe most effective teams begin with a clear question: what problem are we solving, and which indicators matter most? Once that is clear, dashboards, reporting, and structured planning turn noisy activity into measurable progress.\n\nA business can become faster and more confident when its teams understand performance, customer behavior, and expected outcomes before they commit resources.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    likes: 8
  },
  {
    rowId: 4,
    title: 'What Great Web Experiences Really Require',
    story: 'By AmbetsaTech\n\nA strong website is not just visually attractive. It needs flow, trust, clarity, and speed. Users decide almost instantly whether they believe in the brand and whether the content is worth continuing to read.\n\nThat means layout, messaging, technical performance, and accessibility should work together. A page that loads well and communicates value clearly creates more confidence than one that looks impressive but feels confusing or slow.\n\nThe best digital products make the next action feel obvious and the overall experience feel credible.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    likes: 15
  }
];

export const blogControllers = {
  // Fetch logic
  getPosts: async () => {
    try {
      const res = await fetch(SCRIPT_URL);
      const contentType = res.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }

      throw new Error('Invalid response format from server.');
    } catch (error) {
      console.warn('Using fallback blog data because the remote blog source is unavailable.', error);
      return fallbackPosts;
    }
  },

  // Post logic (Likes/Replies)
  postAction: async (rowId, action, message = "") => {
    try {
      return await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ rowId, action, message })
      });
    } catch (error) {
      console.warn('Blog action fallback triggered because the remote blog source is unavailable.', error);
      return { ok: true };
    }
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