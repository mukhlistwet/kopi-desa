# Kopi Desa Landing Page

A premium landing page for Kopi Desa brand, built with Next.js 15 and Tailwind CSS v4.

## Features
- **Visuals**: Premium Hero Banner & Scroll Animations
- **Interactive UI**: Framer Motion Interactions & "Bento Grid" Layouts
- **Product Experience**: Skeleton Loading States & WhatsApp Direct Order
- **AIDA Conversion Flow**: Optimized for sales (Attention, Interest, Desire, Action)
- **Performance**: Mobile-first, fast loading, and SEO optimized
- **Localized**: Full Indonesian content support

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Type Safety**: TypeScript

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env.local` file (optional, defaults provided):
   ```bash
   NEXT_PUBLIC_WA_NUMBER=628123456789054544
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Project Structure
- `app/` - Pages and Layout (Next.js App Router)
- `components/` - React Components
  - `sections/` - Landing page sections (Hero, Features, Products...)
  - `utils/` - Utility components (Reveal, Skeleton...)
- `lib/` - Data and Utilities

## Deployment
Build for production:
```bash
npm run build
npm start
```
