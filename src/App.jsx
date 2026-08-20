import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; // Your current main page content
import AboutMe from './pages/AboutUs';
import {Footer} from './components/Footer';
import LearnMorePage from './pages/LearnMorePage';
import NotFound from './pages/NoteFound';
import PowerBi from './components/PowerBiDashboards';
import Blog from './pages/Blog'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import backgroundVideo from './assets/background_video.mp4';
import ScrollToTop from './components/ScrollTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const pageMeta = {
  '/': {
    title: 'Denis Ambetsa | Full Stack Developer & Data Analyst in Kenya',
    description: 'Denis Ambetsa builds fast, modern websites and data-driven business solutions for startups and growing brands in Kenya and beyond.'
  },
  '/about': {
    title: 'About Denis Ambetsa | Web Developer, Data Analyst & Consultant',
    description: 'Learn about Denis Ambetsa, a full stack developer and data analyst focused on clean digital experiences, business intelligence, and practical tech solutions.'
  },
  '/blog': {
    title: 'Blog | Insights on Web Development, Data Analysis & Business Strategy',
    description: 'Read practical blog articles on web development, data analysis, digital transformation, and performance-driven business growth.'
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

    document.title = meta.title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const url = `https://ambetsatech.vercel.app${pathname === '/' ? '' : pathname}`;
    if (canonical) {
      canonical.setAttribute('href', url);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
    if (ogUrl) ogUrl.setAttribute('content', url);
  }, [location.pathname]);

  return null;
}

function JsonLdSchema() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const siteUrl = 'https://ambetsatech.vercel.app';
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Denis Ambetsa',
      jobTitle: 'Full Stack Developer & Data Analyst',
      url: siteUrl,
      description: 'Denis Ambetsa builds modern websites, dashboards, and data-driven business solutions for startups and growing brands in Kenya and beyond.'
    };

    const faqQuestions = [
      {
        question: 'What services does Denis Ambetsa offer?',
        answer: 'Denis Ambetsa offers website design and development, IT support, data analysis, Power BI dashboards, and professional consultancy for digital transformation.'
      },
      {
        question: 'Do you help businesses in Kenya with digital transformation?',
        answer: 'Yes. Denis Ambetsa works with businesses in Kenya and beyond to improve digital presence, analytics, and operational efficiency.'
      },
      {
        question: 'Can I get a custom website or dashboard built?',
        answer: 'Yes. Denis Ambetsa builds tailored websites, dashboards, and data-driven systems to match your business goals and operational workflow.'
      }
    ];

    let schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Denis Ambetsa',
      image: `${siteUrl}/Ambetsa.jpeg`,
      url: siteUrl,
      description: 'Denis Ambetsa provides web development, business intelligence, IT support, and consultancy services for modern businesses.',
      email: 'ambetsadenis@gmail.com',
      telephone: '+254700000000',
      areaServed: 'Kenya',
      priceRange: '$$',
      founder: {
        '@type': 'Person',
        name: 'Denis Ambetsa',
        jobTitle: 'Full Stack Developer & Data Analyst'
      },
      sameAs: [
        'https://www.linkedin.com',
        'https://github.com'
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
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: faqQuestions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
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
        '@type': 'Dataset',
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
        <video className="app-video-background" autoPlay loop muted playsInline>
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
            <Route path="/learn-more/:id" element={<LearnMorePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/powerbi/:id" element={<PowerBi />} />
            <Route path="/blog" element={<Blog />} />
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