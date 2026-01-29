"use client";

import Hero3D from "./sections/Hero3D";
import { Interest, Desire } from "./sections/Features";
import ProductLineup from "./sections/ProductLineup";
import SocialProof from "./sections/SocialProof";
import { FAQ, Footer, StickyCTA } from "./sections/Footer";

export default function Landing() {
    return (
        <main className="min-h-screen">
            <Hero3D />
            <Interest />
            <Desire />
            <ProductLineup />
            <SocialProof />
            <FAQ />
            <Footer />
            <StickyCTA />
        </main>
    );
}
