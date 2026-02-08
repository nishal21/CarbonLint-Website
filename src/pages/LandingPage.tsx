import { Link } from 'react-router-dom';

export function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-16 md:pb-24 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
                <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        <span className="material-symbols-outlined text-sm">bolt</span> New v2.0 is live
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1]">
                        Code Green. Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Carbon Footprint.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                        Real-time energy monitoring for modern developer workflows. Reduce your digital impact without leaving your IDE.
                        Optimized for lightweight background performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to="/downloads" className="bg-primary hover:bg-primary/90 text-background-dark h-14 px-8 rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all">
                            <span className="material-symbols-outlined">download</span> Download Now
                        </Link>
                        <a href="https://github.com/nishal21/CarboLint" target="_blank" rel="noreferrer" className="border border-white/10 hover:bg-white/5 h-14 px-8 rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all">
                            <span className="material-symbols-outlined">terminal</span> View on GitHub
                        </a>
                    </div>
                </div>

                {/* Floating Dashboard Mockup */}
                <div className="mt-20 relative max-w-5xl mx-auto">
                    <div className="relative rounded-xl border border-white/10 bg-[#121212] p-4 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                            <div className="flex gap-2">
                                <div className="size-3 rounded-full bg-red-500/50" />
                                <div className="size-3 rounded-full bg-yellow-500/50" />
                                <div className="size-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest">CarbonLint Console v2.0</div>
                            <div className="size-3" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="glass-card rounded-lg p-6 text-left border border-white/5">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-wider">CPU Intensity</span>
                                    <span className="material-symbols-outlined text-primary text-sm">memory</span>
                                </div>
                                <div className="text-3xl font-black mb-1">14.2%</div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[42%]" />
                                </div>
                            </div>
                            <div className="glass-card rounded-lg p-6 text-left border border-white/5">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Memory Leak</span>
                                    <span className="material-symbols-outlined text-emerald-400 text-sm">settings_input_component</span>
                                </div>
                                <div className="text-3xl font-black mb-1">1.8GB</div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-[28%]" />
                                </div>
                            </div>
                            <div className="glass-card rounded-lg p-6 text-left border border-white/5">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Estimated CO2</span>
                                    <span className="material-symbols-outlined text-primary text-sm">cloud</span>
                                </div>
                                <div className="text-3xl font-black mb-1">0.42 <span className="text-sm font-medium text-white/40">kg/hr</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[15%]" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 h-64 w-full bg-[#0d0d0d] rounded-lg border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                            <div className="w-full px-4 flex justify-between items-end gap-1 h-32">
                                <div className="bg-primary/20 w-full rounded-t-sm h-[40%]" />
                                <div className="bg-primary/30 w-full rounded-t-sm h-[60%]" />
                                <div className="bg-primary/40 w-full rounded-t-sm h-[45%]" />
                                <div className="bg-primary/20 w-full rounded-t-sm h-[30%]" />
                                <div className="bg-primary/50 w-full rounded-t-sm h-[70%]" />
                                <div className="bg-primary/60 w-full rounded-t-sm h-[85%]" />
                                <div className="bg-primary/30 w-full rounded-t-sm h-[40%]" />
                                <div className="bg-primary/20 w-full rounded-t-sm h-[35%]" />
                                <div className="bg-primary/50 w-full rounded-t-sm h-[65%]" />
                                <div className="bg-primary/70 w-full rounded-t-sm h-[90%]" />
                                <div className="bg-primary/20 w-full rounded-t-sm h-[20%]" />
                            </div>
                            <div className="text-[10px] text-white/20 mt-4 uppercase tracking-[0.3em]">Live Carbon Emissions Graph</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-slate-custom/30 rounded-lg p-6 md:p-10 border border-white/5 hover:border-primary/20 transition-all group">
                        <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-all">
                            <span className="material-symbols-outlined text-3xl">groups</span>
                        </div>
                        <div className="text-4xl font-black mb-2 tracking-tight">10k+</div>
                        <div className="text-white/40 font-medium">Global Developers Joined</div>
                    </div>
                    <div className="bg-slate-custom/30 rounded-lg p-6 md:p-10 border border-white/5 hover:border-primary/20 transition-all group">
                        <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-all">
                            <span className="material-symbols-outlined text-3xl">forest</span>
                        </div>
                        <div className="text-4xl font-black mb-2 tracking-tight">50k kg</div>
                        <div className="text-white/40 font-medium">Carbon Emissions Saved</div>
                    </div>
                    <div className="bg-slate-custom/30 rounded-lg p-6 md:p-10 border border-white/5 hover:border-primary/20 transition-all group">
                        <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-all">
                            <span className="material-symbols-outlined text-3xl">speed</span>
                        </div>
                        <div className="text-4xl font-black mb-2 tracking-tight">30%</div>
                        <div className="text-white/40 font-medium">Average Efficiency Boost</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Precision Tools for Modern Engineering</h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">Every feature is designed to give you deep insights into your energy consumption without impacting your system's performance.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                        <p className="text-white/60 leading-relaxed">Low-level hardware tracking for CPU and GPU carbon output. We interface directly with driver APIs for +/- 2% accuracy.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">summarize</span>
                        </div>
                        <h3 className="text-xl font-bold">Smart Reports</h3>
                        <p className="text-white/60 leading-relaxed">Weekly digests of your coding sessions' environmental impact. Visualized data to help you spot inefficient build processes.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined">dock</span>
                        </div>
                        <h3 className="text-xl font-bold">System Tray Integration</h3>
                        <p className="text-white/60 leading-relaxed">A lightweight, non-intrusive utility that lives where you work. Instant stats toggle with a custom global hotkey.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
                <div className="relative bg-gradient-to-br from-primary/10 to-emerald-900/10 rounded-lg p-8 md:p-24 border border-primary/20 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Ready to code greener?</h2>
                    <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">Join the movement of climate-conscious developers. Small changes in your workflow lead to massive impact at scale.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/downloads" className="bg-primary hover:bg-primary/90 text-background-dark h-16 px-12 rounded-full text-lg font-bold transition-all eco-glow shadow-primary/20 flex items-center justify-center">
                            Download CarbonLint Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
