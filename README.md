# Denis Ambetsa Portfolio

This is a modern React + Vite portfolio website for Denis Ambetsa, showcasing professional services, featured projects, contact information, a blog section, and an interactive contact form with email verification.

## Overview

The site is designed to present a personal brand and professional services in a polished, responsive, and fast-loading experience. It includes:

- A hero section with a strong introduction
- Service and project showcases
- About and mission/value sections
- A blog section for published content
- A contact form with OTP/email verification
- Responsive layout for desktop and mobile devices

## Tech Stack

- React
- Vite
- React Router
- React Hook Form
- React Toastify
- Bootstrap styling and custom CSS
- Vercel deployment

## Project Structure

- src/components: reusable UI sections such as Navbar, Hero, Projects, Services, Footer, and Contact form
- src/pages: route-based pages including Home, About Us, Blog, Learn More, and Not Found
- src/css: page-level and component-level styling
- public: static assets such as robots.txt and sitemap.xml

## Features

- Fast Vite-powered development experience
- Responsive and visually rich portfolio layout
- Contact form with validation and OTP-based email verification
- SEO-friendly metadata and static assets
- Smooth navigation across multiple sections and pages

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (recommended: v18 or newer)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dzulee/Denis-Ambetsa-Vercel-portfoilo.git
   ```

2. Navigate into the project folder
   ```bash
   cd Denis-Ambetsa-Vercel-portfoilo
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually:
   ```bash
   http://localhost:5173/
   ```

## Environment Variables

This project uses environment variables for its contact and OTP services.

Create a .env file in the project root and add the following variables:

```env
VITE_CONTACT_SCRIPT_URL=your_contact_form_script_url
VITE_OTP_SCRIPT_URL=your_otp_service_script_url
```

> The .env file is ignored by Git to protect sensitive values.

## Build for Production

Run:

```bash
npm run build
```

The production build will be generated in the dist folder.

## Deployment

The site is configured for deployment on Vercel.

To deploy:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy the application

## License

This project is for personal/professional portfolio use.
