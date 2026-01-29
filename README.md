# Kopi Desa Landing Page

A premium landing page for Kopi Desa brand, built with Next.js 15, Tailwind CSS v4, and Three.js (R3F).

## Features
- 3D Coffee Bean Hero (Performance optimized)
- AIDA Conversion Flow
- WhatsApp Direct Order Integration
- Localized (Indonesian) Content
- **3D & Visuals**: Premium Hero Banner & 3D Elements
- **Interactive UI**: Scroll Animations (Framer Motion) & "Bento Grid" Layouts
- **Product Experience**: Skeleton Loading States & WhatsApp Direct Order
- **AIDA Conversion Flow**: Optimized for sales (Attention, Interest, Desire, Action)
- **Performance**: Mobile-first, fast loading, and SEO optimized
- **Localized**: Full Indonesian content support

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **3D**: React Three Fiber + Drei
- **Type Safety**: TypeScript

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   # Also ensure 3D deps are installed:
   npm install three @types/three @react-three/fiber @react-three/drei
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
  - `three/` - 3D Scenes
- `lib/` - Data and Utilities

## Deployment
Build for production:
```bash
npm run build
npm start
```
