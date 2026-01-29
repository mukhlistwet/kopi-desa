import { TESTIMONIALS } from "@/lib/data";

export default function SocialProof() {
    return (
        <section className="py-24 px-6 bg-stone-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Kata Mereka</h2>
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
                        <span className="text-amber-400">★★★★★</span>
                        <span className="text-amber-200 font-semibold">4.9/5 from 1,200+ customers</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-stone-900 p-6 rounded-xl border border-stone-800">
                            <p className="text-stone-300 italic mb-4">&quot;{t.text}&quot;</p>
                            <p className="text-stone-500 text-sm font-bold uppercase tracking-wider">— {t.author}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                        "Pengiriman Aman",
                        "Bisa untuk Kopi Susu & Hitam",
                        "CS Fast Response (WA)",
                        "Fresh & Consistent"
                    ].map((badge) => (
                        <div key={badge} className="p-4 rounded-lg bg-stone-900/50 border border-white/5 text-stone-400 text-sm font-medium">
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
