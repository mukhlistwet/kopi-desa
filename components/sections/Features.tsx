import { BENEFITS_CONTENT, INTEREST_CONTENT } from "@/lib/data";
import { Reveal } from "@/components/utils/Reveal";

export function Interest() {
    return (
        <section className="py-24 px-6 bg-stone-950 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Reveal width="100%" variant="slide">
                        <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Kenapa Kami Berbeda?</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-2">
                            {INTEREST_CONTENT.title}
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mt-4">
                            Kami percaya kopi yang nikmat berawal dari kesegaran biji dan proses roasting yang presisi. Tidak ada kompromi untuk kualitas yang masuk ke cangkir Anda.
                        </p>
                    </Reveal>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Column 1: The Problems (Visualized as Cards) */}
                    {INTEREST_CONTENT.bullets.map((bullet, i) => (
                        <Reveal key={i} delay={i * 0.1} className="h-full" width="100%">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-2xl
                                     ${i === 0 ? 'bg-red-500/10 text-red-500' : ''}
                                     ${i === 1 ? 'bg-green-500/10 text-green-500' : ''}
                                     ${i === 2 ? 'bg-blue-500/10 text-blue-500' : ''}
                                     group-hover:scale-110 transition-transform
                                `}>
                                    {i === 0 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    {i === 0 ? "Masalah Umum" : i === 1 ? "Solusi Kami" : "Fleksibilitas"}
                                </h4>
                                <p className="text-stone-400">
                                    {bullet}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Process Steps (Horizontal now for variety) */}
                <div className="pt-8">
                    <Reveal width="100%">
                        <div className="bg-stone-900/50 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

                            <div className="grid md:grid-cols-3 gap-8 relative">
                                {INTEREST_CONTENT.steps.map((step, i) => (
                                    <div key={i} className="relative group text-center md:text-left">
                                        {/* Connector Line (Desktop) */}
                                        {i !== INTEREST_CONTENT.steps.length - 1 && (
                                            <div className="hidden md:block absolute top-8 left-16 right-0 h-0.5 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
                                        )}

                                        <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-950 border border-amber-500/30 text-amber-500 font-bold text-xl mb-4 shadow-lg shadow-amber-900/10 group-hover:scale-110 group-hover:border-amber-500 transition-all duration-300">
                                            {i + 1}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{step.title}</h3>
                                        <p className="text-sm text-stone-400">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
}

export function Desire() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Reveal width="100%">
                    <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-16">
                        {BENEFITS_CONTENT.title}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS_CONTENT.items.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1} variant="scale" width="100%" className="h-full">
                            <div className="bg-stone-900/80 backdrop-blur border border-white/10 p-8 rounded-2xl text-center hover:border-amber-500/30 transition-all group h-full">
                                <div className="w-12 h-12 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {/* Generic 'Sparkle' icon for all for now, to keep it simple/lightweight */}
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <p className="text-lg font-medium text-stone-200">{item}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
