import { Link } from 'react-router-dom';

export function AboutPage() {
    return (
        <div className="min-h-screen bg-background-dark pt-24 pb-12">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto px-6 text-center mb-24 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Sustainable Code. <br />
                    <span className="text-primary">Sustainable Future.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    CarbonLint was born from a simple idea: inefficient code isn't just bad for performance—it's bad for the planet. We're on a mission to reduce the digital carbon footprint of software, one function at a time.
                </p>
            </section>

            {/* The Product Section */}
            <section className="max-w-6xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl" />
                            <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl">
                                <span className="material-symbols-outlined text-primary text-5xl mb-6">psychology</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Why CarbonLint?</h3>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check</span>
                                        <span><strong className="text-white">Energy Efficiency:</strong> Detect and refactor energy-intensive loops and processes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check</span>
                                        <span><strong className="text-white">Hardware Health:</strong> Reduce CPU strain and extend the lifespan of your development machines.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check</span>
                                        <span><strong className="text-white">Global Impact:</strong> If every developer saved 1 watt per hour, we could power a small city.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">The Mission</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Code that cares about the hardware it runs on.</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Software doesn't exist in a vacuum. Every line of code consumes electricity. CarbonLint bridges the gap between software logic and physical power consumption, giving developers the visibility they need to write eco-friendly applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Creator Section */}
            <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Creator</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Built by Developer, for Developers</h2>

                <div className="bg-[#111] border border-white/5 p-6 md:p-12 rounded-2xl relative overflow-hidden group hover:border-primary/20 transition-all">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-primary/50 mb-6 overflow-hidden flex items-center justify-center">
                            <span className="material-symbols-outlined text-5xl text-slate-600">person</span>
                            {/* Placeholder for actual image if available later */}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Nishal</h3>
                        <p className="text-primary font-medium text-sm mb-2">Lead Developer & Founder</p>
                        <p className="text-slate-500 text-sm mb-6 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">location_on</span> Malappuram, Kerala
                        </p>
                        <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                            "I built CarbonLint because I realized that while we optimize for speed and size, we rarely optimize for the planet. I wanted to create a tool that makes sustainable coding accessible to everyone."
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            <a href="https://github.com/nishal21" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 text-sm md:text-base">
                                <span className="material-symbols-outlined text-sm">code</span> GitHub
                            </a>
                            <a href="mailto:nishalamv@gmail.com" className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 text-sm md:text-base">
                                <span className="material-symbols-outlined text-sm">mail</span> Contact
                            </a>
                            <a href="https://instagram.com/nishal.21" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 text-sm md:text-base">
                                <span className="material-symbols-outlined text-sm">photo_camera</span> Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center px-6 pb-12">
                <p className="text-slate-500 mb-8">Want to contribute to the mission?</p>
                <Link to="/downloads" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                    Get CarbonLint <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </section>
        </div>
    );
}
