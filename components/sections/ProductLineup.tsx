"use client";

import { PRODUCTS, createWhatsappLink } from "@/lib/data";
import { useState } from "react";
import { Reveal } from "../utils/Reveal";
import { Skeleton } from "../ui/Skeleton";

function ProductCard({ product, index }: { product: typeof PRODUCTS[0], index: number }) {
    const [qty, setQty] = useState(1);
    const [imageLoaded, setImageLoaded] = useState(false);

    const increment = () => setQty((q) => Math.min(q + 1, 10));
    const decrement = () => setQty((q) => Math.max(q - 1, 1));

    const waLink = createWhatsappLink(product.name, qty, product.profile);

    return (
        <Reveal delay={index * 0.1} width="100%" className="h-full">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors duration-300 h-full flex flex-col">

                {/* Product Image */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 bg-stone-900">
                    {!imageLoaded && <Skeleton className="absolute inset-0 z-10 w-full h-full bg-stone-800 animate-pulse" />}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={product.image}
                        alt={product.name}
                        onLoad={(e) => setImageLoaded(true)}
                        onError={(e) => {
                            // Recover from error by forcing visibility (might be large file issue)
                            setImageLoaded(true);
                        }}
                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500`}
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                        ref={(img) => {
                            // Check if already loaded from cache
                            if (img?.complete) setImageLoaded(true);
                        }}
                        // @ts-ignore
                        unoptimized="true" // Bypass Next.js optimization for large files
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 z-20">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg
                        ${product.profile === 'Original' ? 'bg-amber-900 text-amber-100 border border-amber-500/30' : ''}
                        ${product.profile === 'Fruity' ? 'bg-orange-900 text-orange-100 border border-orange-500/30' : ''}
                        ${product.profile === 'Aromatic' ? 'bg-yellow-900 text-yellow-100 border border-yellow-500/30' : ''}
                    `}>
                            {product.profile}
                        </span>
                    </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-1">

                    <div>
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                                {product.name}
                            </h3>
                        </div>
                        <span className="inline-block mt-1 text-amber-400 font-bold text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            {product.price}
                        </span>

                        <p className="text-sm text-stone-400 mt-2 line-clamp-2">{product.notes}</p>
                    </div>

                    <p className="text-stone-300 text-sm leading-relaxed flex-1 line-clamp-3">
                        {product.desc}
                    </p>

                    <div className="pt-4 border-t border-white/5 mt-auto">
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-semibold">Cocok Untuk</p>
                        <div className="flex flex-wrap gap-2">
                            {product.bestFor.split(",").map((tag) => (
                                <span key={tag} className="text-xs text-stone-300 bg-white/5 px-2 py-1 rounded">
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between gap-2">
                        <div className="flex items-center bg-black/20 rounded-lg p-0.5">
                            <button
                                onClick={decrement}
                                className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-white"
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span className="w-6 text-center text-white font-mono text-xs">{qty}</span>
                            <button
                                onClick={increment}
                                className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-white"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>

                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold py-2 px-2 rounded-lg text-center transition-all flex items-center justify-center gap-1 shadow-lg shadow-amber-900/20"
                        >
                            <span className="whitespace-nowrap">Order WA</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function ProductLineup() {
    return (
        <section id="products" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <Reveal width="100%">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        Varian Desa Favorit
                    </h2>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        Semua kemasan 500gr. Fresh roasted, dikemas dengan valve satu arah untuk menjaga aroma.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {PRODUCTS.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                ))}
            </div>
        </section>
    );
}
