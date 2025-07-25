# TruSafe - Security Services Website

## Next.js Responsive Website Architecture

### Project Overview

A professional security services website built with Next.js, featuring responsive design, modern UI components, and optimized performance.

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: React Components with TypeScript
- **Images**: Next.js Image Optimization
- **Animations**: Framer Motion
- **Icons**: React Icons / Heroicons
- **Fonts**: Google Fonts (Inter/Roboto)

### Project Structure

trusafe-website/
├── public/
│ ├── images/
│ │ ├── logo.svg
│ │ ├── hero-guard.jpg
│ │ ├── about-shield.png
│ │ ├── service-trained-guards.jpg
│ │ ├── service-customized-plans.jpg
│ │ ├── service-surveillance.jpg
│ │ ├── why-choose-us.jpg
│ │ ├── join-us-security.jpg
│ │ └── contact-map.jpg
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── components/
│ ├── components/
│ │ ├── Header/
│ │ │ ├── Header.tsx
│ │ │ ├── Navigation.tsx
│ │ │ └── MobileMenu.tsx
│ │ ├── Hero/
│ │ │ └── HeroSection.tsx
│ │ ├── About/
│ │ │ └── AboutSection.tsx
│ │ ├── Services/
│ │ │ ├── ServicesSection.tsx
│ │ │ └── ServiceCard.tsx
│ │ ├── WhyChoose/
│ │ │ └── WhyChooseSection.tsx
│ │ ├── JoinUs/
│ │ │ └── JoinUsSection.tsx
│ │ ├── Contact/
│ │ │ └── ContactSection.tsx
│ │ ├── Footer/
│ │ │ └── Footer.tsx
│ │ └── UI/
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ └── Container.tsx
│ ├── styles/
│ │ └── globals.css
│ └── types/
│ └── index.ts
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md

### Design System

#### Colors

- **Primary Red**: #8B1538 (Burgundy/Maroon)
- **Secondary Blue**: #1E3A8A (Navy Blue)
- **Accent Blue**: #3B82F6
- **Dark**: #1F2937
- **Light Gray**: #F3F4F6
- **White**: #FFFFFF

#### Typography

- **Primary Font**: Inter (headings, body)
- **Secondary Font**: Roboto (UI elements)

#### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Component Architecture

#### 1. Header Component

- Logo with shield icon
- Navigation menu (desktop)
- Mobile hamburger menu
- Sticky/fixed positioning
- CTA buttons ("Hire Security Guard", "Apply for Job")

#### 2. Hero Section

- Full-width background image
- "Trust + Safety = TRUSAFE" headline
- "India's Most Trusted Security Partner" subheading
- Two CTA buttons
- Guard image on right (desktop) / centered (mobile)

#### 3. About Section

- Split layout (desktop): Text left, shield logo right
- Single column (mobile)
- Social media icons
- "About Us" CTA button

#### 4. Services Section

- Dark background
- Grid layout: 3 columns (desktop) / 1 column (mobile)
- Service cards with images and descriptions:
  - Trained Guards
  - Customized Plans
  - 24/7 Surveillance

#### 5. Why Choose Us Section

- Split layout: Image left, content right
- Technology/app focus
- "Learn More" CTA

#### 6. Join Us Section

- Split layout: Image left, content right
- Recruitment focus
- "Join Us" CTA

#### 7. Contact/Footer Section

- Company information
- Address and contact details
- Social media links
- Logo

### Responsive Design Strategy

1. **Mobile-First Approach**: Design for mobile, enhance for larger screens
2. **Flexible Grid System**: CSS Grid and Flexbox for layouts
3. **Fluid Typography**: Responsive font sizes using clamp()
4. **Optimized Images**: Next.js Image component with multiple sizes
5. **Touch-Friendly**: Minimum 44px touch targets on mobile

### Performance Optimizations

- Next.js Image Optimization
- Lazy loading for images
- Code splitting
- SEO optimization
- Core Web Vitals compliance

### Required Images

Based on the design, I'll need these images:

1. **Logo**: TruSafe shield logo (SVG preferred)
2. **Hero Guard**: Professional security guard in uniform
3. **About Shield**: Large shield graphic/icon
4. **Trained Guards**: Group of security personnel
5. **Customized Plans**: Individual guard with mask
6. **24/7 Surveillance**: Security monitoring setup
7. **Why Choose Us**: Technology/app interface
8. **Join Us**: Security camera or guard recruitment image
9. **Contact**: Map or location image

### Development Phases

1. **Phase 1**: Project setup, basic layout, header/navigation
2. **Phase 2**: Hero section, responsive design
3. **Phase 3**: About and Services sections
4. **Phase 4**: Why Choose Us and Join Us sections
5. **Phase 5**: Contact/Footer, final optimizations
