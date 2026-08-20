# Denis Ambetsa Portfolio
# Denis Ambetsa Portfolio
Personal portfolio and professional services website for **Denis Ambetsa**, a full-stack developer, data analyst, and technology consultant based in Kenya. The site presents web development services, business intelligence work, IT support, consulting, selected projects, articles, and contact options in a responsive React application.

**Live website:** [ambetsatech.vercel.app](https://ambetsatech.vercel.app)

## Highlights

- Responsive portfolio experience for desktop and mobile screens
- Service pages for website creation, IT support, data analysis, and consultancy
- Project showcase with Power BI dashboard examples
- Blog powered by a Google Apps Script data source
- Validated contact form with email and OTP verification flows
- Route-aware page titles, descriptions, canonical URLs, Open Graph metadata, and JSON-LD structured data
- Vercel-ready production build with SPA rewrites and static SEO files

## Technology

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Bootstrap](https://getbootstrap.com/), Sass, and custom CSS
- AOS for scroll animations
- React Toastify for user notifications
- Vercel for hosting and deployment

## Site Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero, services, projects, and contact sections |
| `/about` | About, mission, values, and professional background |
| `/blog` | Published articles and insights |
| `/learn-more/web-creation` | Website design and development services |
| `/learn-more/it-support` | IT support and infrastructure services |
| `/learn-more/data-analysis` | Data analysis and business intelligence services |
| `/learn-more/professional-consultancy` | Consultancy and process optimization services |
| `/powerbi/sales-dashboard` | Sales dashboard project view |
| `/powerbi/car-models-dashboard` | Car models dashboard project view |

## Project Structure

```text
.
├── public/                 # Static files, sitemap, robots.txt, and verification files
├── scripts/                # Optional prerendering script
├── src/
│   ├── assets/             # Images, video, and other imported assets
│   ├── components/         # Reusable page sections and UI components
│   ├── controllers/        # External data and blog integrations
│   ├── css/                # Feature-specific stylesheets
│   ├── pages/              # Route-level page components
│   ├── ui/                 # Shared UI primitives
│   ├── App.jsx             # Routing, metadata, and application shell
│   └── main.jsx            # React entry point
├── index.html
├── package.json
├── vercel.json             # Redirects and SPA fallback rewrite
└── vite.config.js
```

## Getting Started

### Requirements

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
git clone https://github.com/dzulee/Denis-Ambetsa-Vercel-portfoilo.git
cd Denis-Ambetsa-Vercel-portfoilo
npm install
```

Create a local `.env` file in the project root before testing integrations:

```env
VITE_CONTACT_SCRIPT_URL=your_contact_form_script_url
VITE_OTP_SCRIPT_URL=your_otp_service_script_url
VITE_GOOGLE_SCRIPT_URL=your_google_apps_script_url
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production bundle in `dist/` |
| `npm run preview` | Preview the production bundle locally |
| `npm run lint` | Run ESLint across the project |
| `npm run prerender` | Optionally prerender routes with Playwright locally |

The default Vercel build intentionally runs `vite build` only. The optional Playwright prerender command requires a compatible local browser environment and is not required for deployment because Vercel serves the SPA through the rewrite in `vercel.json`.

## Environment Variables

All client-side variables must use the `VITE_` prefix because they are read through `import.meta.env` by Vite.

| Variable | Used for |
| --- | --- |
| `VITE_CONTACT_SCRIPT_URL` | Contact form submission endpoint |
| `VITE_OTP_SCRIPT_URL` | OTP verification endpoint for the contact flow |
| `VITE_GOOGLE_SCRIPT_URL` | Blog content endpoint |

Do not commit `.env` files or private credentials. Configure these values in the Vercel project settings for production deployments.

### Contact Notifications

The contact form sends one POST request containing `name`, `phone`, `email`, `subject`, and `message`. The Google Apps Script source for that endpoint is in `scripts/contact-form-apps-script.js`; it sends the submission to both Gmail and WhatsApp through CallMeBot.

To configure the endpoint:

1. Create or update a Google Apps Script project with the contents of `scripts/contact-form-apps-script.js`.
2. In **Project Settings > Script properties**, add `CALLMEBOT_API_KEY` with the API key for WhatsApp number `254769579340`.
3. Deploy the project as a web app that executes as the script owner and allows anyone to access it.
4. Set the deployed `/exec` URL as `VITE_CONTACT_SCRIPT_URL` in Vercel and redeploy the site.

Keep the CallMeBot API key in Script Properties; do not put it in the React app or a committed `.env` file.

## Production Build

Build and preview the application locally:

```bash
npm run build
npm run preview
```

The generated files are written to `dist/`. The build may report a Vite warning about large JavaScript chunks; this is informational and does not fail the build.

## Deployment

This project is configured for Vercel:

1. Import the GitHub repository into Vercel.
2. Select the `main` branch for production deployments.
3. Add the three `VITE_` environment variables in **Project Settings > Environment Variables**.
4. Use `npm run build` as the build command.
5. Deploy.

The included `vercel.json` provides redirects for legacy service URLs and rewrites application routes to `index.html` for client-side routing.

## Contributing

1. Create a feature branch from `main`.
2. Make focused changes that match the existing component and styling patterns.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request with a clear description of the change.

## License

This repository represents a personal and professional portfolio. Contact the author before reusing branding, personal content, images, or portfolio materials.

## Contact

- Website: [ambetsatech.vercel.app](https://ambetsatech.vercel.app)
- GitHub: [dzulee](https://github.com/dzulee)
