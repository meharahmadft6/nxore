# Nxore Website

A modern, responsive website for Nxore - a digital solutions company specializing in web development, mobile apps, digital marketing, and more.

## Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hover effects, smooth transitions, and engaging animations
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structured content

## Pages

### Home (`/`)
- Hero section with compelling headline and call-to-action
- Services overview with feature highlights
- Company statistics and achievements
- Modern gradient design with animated background elements

### About (`/about`)
- Company mission and vision
- Team member profiles
- Company statistics
- Core values and principles

### Services (`/services`)
- Detailed service offerings with pricing
- Feature lists for each service
- Project process explanation
- Call-to-action sections

### Contact (`/contact`)
- Interactive contact form
- Company contact information
- Business hours
- Social media links
- Office location (map placeholder)

## Components

- **Navbar**: Fixed navigation with mobile menu
- **Hero**: Engaging hero sections for each page
- **Services**: Service cards with icons and features
- **Footer**: Company information and links

## Technologies Used

- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management for interactive components
- **SVG Icons**: Custom icons for services and features

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   └── Footer.js
│   ├── about/
│   │   └── page.js
│   ├── services/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
└── package.json
```

## Customization

- Update company information in the components
- Modify colors in `globals.css` (blue/purple gradient theme)
- Add new services in the Services component
- Update contact information in the Contact page
- Replace placeholder images with actual company assets

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

This project is created for Nxore. All rights reserved.
