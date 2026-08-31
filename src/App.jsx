import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; // Your current main page content
import AboutMe from './pages/AboutUs';
import {Footer} from './components/Footer';
import LearnMorePage from './pages/LearnMorePage';
import NotFound from './pages/NoteFound';
import PowerBi from './components/PowerBiDashboards';
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import backgroundVideo from './assets/background_video.mp4';
import ScrollToTop from './components/ScrollTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const pageMeta = {
  '/': {
    title: 'AmbetsaTech | Web Development, Data Analysis & IT Support in Kenya',
    description: 'AmbetsaTech builds high-performing websites, Power BI dashboards, and practical IT solutions for businesses in Kenya and beyond.'
  },
  '/about': {
    title: 'About Denis Ambetsa | Web Developer, Data Analyst & Consultant',
    description: 'Learn about Denis Ambetsa, a full stack developer and data analyst focused on clean digital experiences, business intelligence, and practical tech solutions.'
  },
  '/blog': {
    title: 'Blog | Insights on Web Development, Data Analysis & Business Strategy',
    description: 'Read practical blog articles on web development, data analysis, digital transformation, and performance-driven business growth.'
  },
  '/projects': {
    title: 'Projects | Denis Ambetsa Portfolio',
    description: 'Explore selected web development, automation, and data analytics projects by Denis Ambetsa.',
    indexable: false
  },
  '/services': {
    title: 'Services | Web Development, Data Analysis & IT Support',
    description: 'Explore web development, data analysis, IT support, and consultancy services by Denis Ambetsa.',
    indexable: false
  },
  '/pricing': {
    title: 'Pricing | Digital Services by Denis Ambetsa',
    description: 'View practical pricing options for websites, dashboards, IT support, and digital consultancy.',
    indexable: false
  },
  '/why-us': {
    title: 'Why Choose Ambetsa Tech | Denis Ambetsa',
    description: 'Discover the strategy, clarity, and measurable results behind Ambetsa Tech solutions.',
    indexable: false
  },
  '/contact': {
    title: 'Contact Denis Ambetsa | Ambetsa Tech',
    description: 'Start a conversation with Denis Ambetsa about web development, analytics, IT support, or consultancy.',
    indexable: false
  },
  '/learn-more/web-creation': {
    title: 'Website Design & Development Services | Denis Ambetsa',
    description: 'Professional website design and development services for businesses that need a modern online presence, SEO, security, and scalable digital growth.'
  },
  '/learn-more/it-support': {
    title: 'IT Support & System Infrastructure Services | Denis Ambetsa',
    description: 'Reliable IT support and infrastructure setup for businesses needing secure systems, network support, troubleshooting, and maintenance.'
  },
  '/learn-more/data-analysis': {
    title: 'Data Analysis & Business Intelligence Services | Denis Ambetsa',
    description: 'Turn raw data into actionable insights with Python, SQL, Power BI, Excel, and strategic analytics tailored to your business goals.'
  },
  '/learn-more/professional-consultancy': {
    title: 'Professional Consultancy & Process Optimization | Denis Ambetsa',
    description: 'Business consultancy that improves operations, supports digital transformation, and helps teams optimize processes with measurable results.'
  },
  '/powerbi/sales-dashboard': {
    title: 'Sales Dashboard | Data Analytics Portfolio',
    description: 'Explore a sales dashboard portfolio example designed to visualize business performance and support better decision-making.'
  },
  '/powerbi/car-models-dashboard': {
    title: 'Car Models Dashboard | Data Analytics Portfolio',
    description: 'See a data visualization dashboard built for automotive performance analysis and business reporting.'
  }
};

function SeoMeta() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const meta = pageMeta[pathname] || pageMeta['/'];
    const siteUrl = 'https://ambetsatech.vercel.app';

    document.title = meta.title;
    const titleMeta = document.querySelector('meta[name="title"]');
    if (titleMeta) titleMeta.setAttribute('content', meta.title);

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const isSectionAlias = meta.indexable === false;
    const url = isSectionAlias ? siteUrl : `${siteUrl}${pathname === '/' ? '' : pathname}`;
    if (canonical) {
      canonical.setAttribute('href', url);
    }
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', isSectionAlias ? 'noindex, follow' : 'index, follow');

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
    if (ogUrl) ogUrl.setAttribute('content', url);
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
    if (twitterDescription) twitterDescription.setAttribute('content', meta.description);
    if (twitterImage) twitterImage.setAttribute('content', `${siteUrl}/Ambetsa.jpeg`);
  }, [location.pathname]);

  return null;
}

function JsonLdSchema() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const siteUrl = 'https://ambetsatech.vercel.app';
    let schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'AmbetsaTech',
      alternateName: 'Ambetsa Tech',
      image: `${siteUrl}/Ambetsa.jpeg`,
      url: siteUrl,
      description: 'AmbetsaTech provides web development, business intelligence, IT support, and consultancy services for modern businesses.',
      email: 'dennisambesa63@gmail.com',
      telephone: '+254769579340',
      areaServed: 'Kenya',
      priceRange: '$$',
      founder: {
        '@type': 'Person',
        name: 'Denis Ambetsa',
        jobTitle: 'Full Stack Developer & Data Analyst'
      },
      sameAs: [
        'https://www.linkedin.com/in/denis-ambetsa/',
        'https://github.com/dzulee',
        'https://x.com/ambetsa_dennis',
        'https://www.youtube.com/@dennisambetsa1588'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Design & Development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data Analysis & Dashboarding'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Support & Consultancy'
            }
          }
        ]
      },
    };

    if (pathname === '/about') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Denis Ambetsa',
        url: `${siteUrl}/about`,
        description: 'Learn about Denis Ambetsa, a full stack developer and data analyst focused on clean digital experiences, business intelligence, and practical tech solutions.'
      };
    }

    if (pathname === '/blog') {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Denis Ambetsa Blog',
        url: `${siteUrl}/blog`,
        description: 'Read practical blog articles on web development, data analysis, digital transformation, and business growth.'
      };
    }

    if (pathname.startsWith('/learn-more/')) {
      const serviceMap = {
          '/learn-more/web-creation': {
          name: 'Website Design & Development',
          description: 'Professional website design and development services for businesses that need a modern online presence, SEO, security, and scalable digital growth.'
        },
        '/learn-more/it-support': {
          name: 'IT Support & System Infrastructure',
          description: 'Reliable IT support and infrastructure setup for businesses needing secure systems, network support, troubleshooting, and maintenance.'
        },
        '/learn-more/data-analysis': {
          name: 'Data Analysis & Business Intelligence',
          description: 'Turn raw data into actionable insights with Python, SQL, Power BI, Excel, and strategic analytics tailored to your business goals.'
        },
        '/learn-more/professional-consultancy': {
          name: 'Professional Consultancy & Process Optimization',
          description: 'Business consultancy that improves operations, supports digital transformation, and helps teams optimize processes with measurable results.'
        }
      };

      const service = serviceMap[pathname] || {
        name: 'Consulting Service',
        description: 'Digital services for business growth and technology optimization.'
      };

      schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: service.name,
        provider: {
          '@type': 'Person',
          name: 'Denis Ambetsa',
          jobTitle: 'Full Stack Developer & Data Analyst'
        },
        areaServed: 'Kenya',
        url: `${siteUrl}${pathname}`,
        description: service.description
      };
    }

    if (pathname.startsWith('/powerbi/')) {
      const dashboardMap = {
        '/powerbi/sales-dashboard': {
          name: 'Sales Dashboard',
          description: 'Sales dashboard portfolio example for tracking business performance and identifying profitable growth opportunities.'
        },
        '/powerbi/car-models-dashboard': {
          name: 'Car Models Dashboard',
          description: 'Car models dashboard portfolio example for performance analysis, trends, and data-driven business reporting.'
        }
      };

      const dashboard = dashboardMap[pathname] || {
        name: 'Dashboard',
        description: 'Data visualization dashboard for business insights.'
      };

      schema = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: dashboard.name,
        creator: {
          '@type': 'Person',
          name: 'Denis Ambetsa'
        },
        url: `${siteUrl}${pathname}`,
        description: dashboard.description
      };
    }

    let script = document.getElementById('app-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'app-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation length in milliseconds
      once: false,     // Whether animation should happen only once - set to false to animate every time you scroll up/down
      mirror: true,    // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="app-shell">
      <div className="app-video-layer">
        <video className="app-video-background" autoPlay loop muted playsInline preload="metadata">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="app-video-overlay" />
      </div>

      <div className="app-content">
        <Router>
          <SeoMeta />
          <JsonLdSchema />
          <ScrollToTop />
          <Routes>
            {/* This is your main landing page */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/pricing" element={<Home />} />
            <Route path="/why-us" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/learn-more/:id" element={<LearnMorePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/powerbi/:id" element={<PowerBi />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <FloatingWhatsApp />
        </Router>
      </div>
    </div>
  );
}

export default App;