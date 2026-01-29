import { FAQS, BRAND } from "@/lib/data";

export function FAQ() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Pertanyaan Umum</h2>
            <div className="space-y-4">
                {FAQS.map((faq, i) => (
                    <details key={i} className="group bg-stone-900 rounded-xl border border-stone-800 open:border-amber-900/50 transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-stone-200">
                            {faq.q}
                            <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180">
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </summary>
                        <div className="p-6 pt-0 text-stone-400 leading-relaxed border-t border-stone-800/50">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm">
            <p className="font-bold text-stone-400 text-lg mb-2">{BRAND.name}</p>
            <p className="mb-8">{BRAND.tagline}</p>
            <p>&copy; {new Date().getFullYear()} Kopi Desa. All rights reserved.</p>
        </footer>
    );
}

export function StickyCTA() {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden">
            <a
                href={`https://wa.me/${BRAND.whatsappNumber}`}
                className="block w-full bg-amber-600 text-white font-bold py-4 rounded-full text-center shadow-2xl shadow-amber-900/50 border border-amber-400/20"
            >
                Order via WhatsApp
            </a>
        </div>
    );
}
