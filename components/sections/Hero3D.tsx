"use client";

import { HERO_CONTENT } from "@/lib/data";
import Image from "next/image";

export default function Hero3D() {
    const scrollToProducts = () => {
        const el = document.getElementById("products");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    const openWhatsapp = () => {
        const el = document.getElementById("offers");
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-950">

            {/* Hero Image Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner-hero.png"
                    alt="Kopi Desa Premium"
                    fill
                    className="object-cover opacity-60"
                    priority
                    unoptimized
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl text-balance">
                        {HERO_CONTENT.headline}
                    </h1>
                    <p className="text-lg md:text-xl text-stone-200 max-w-lg mx-auto md:mx-0 text-balance leading-relaxed drop-shadow-md">
                        {HERO_CONTENT.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <button
                            onClick={openWhatsapp}
                            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        >
                            {HERO_CONTENT.ctaPrimary}
                        </button>
                        <button
                            onClick={scrollToProducts}
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full transition-all"
                        >
                            {HERO_CONTENT.ctaSecondary}
                        </button>
                    </div>
                </div>

                {/* Empty right side to let image show through */}
                <div className="hidden md:block"></div>
            </div>
        </section>
    );
}
