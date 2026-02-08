import { Link } from 'react-router-dom';

import featuresDashboard from '../assets/1.png';

export function FeaturesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <span className="inline-block py-1 px-3 bg-primary/20 text-primary rounded-full text-xs font-bold tracking-widest uppercase">Version 2.0 Available</span>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-white">
                        Powerful Features for <br /> <span className="text-primary">Sustainable Development</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Optimize your code for performance and the planet with our advanced developer toolset. Real-time metrics that matter.
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <Link to="/downloads" className="bg-primary text-background-dark font-bold px-8 py-4 rounded-xl text-lg hover:shadow-[0_0_20px_rgba(29,201,92,0.4)] transition-all">Get Started</Link>
                        <a href="https://github.com/nishal21/CarboLint" className="bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-slate-700 transition-all">Star it on GitHub</a>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Core Capabilities</h2>
                        <p className="text-slate-500">Everything you need to ship cleaner, faster code.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon="memory"
                        title="CPU Monitoring"
                        description="Real-time processor efficiency tracking. Visualize instruction cycles and identify energy-intensive logic branches."
                    />
                    <FeatureCard
                        icon="terminal"
                        title="Memory Tracking"
                        description="Monitor heap and stack usage live. Detect memory leaks early and optimize garbage collection cycles automatically."
                    />
                    <FeatureCard
                        icon="waves"
                        title="Network Analysis"
                        description="Analyze packet data and energy cost. Minimize payload sizes and reduce round-trip times for global sustainability."
                    />
                    <FeatureCard
                        icon="eco"
                        title="CO2 Calculations"
                        description="Instant carbon footprint estimates based on runtime performance. Translate wattage into measurable environmental impact."
                    />
                    <FeatureCard
                        icon="bar_chart"
                        title="Historical Reports"
                        description="Analyze long-term sustainability trends. Compare builds and see how your optimization efforts improve over time."
                    />
                    <FeatureCard
                        icon="app_registration"
                        title="System Tray Integration"
                        description="Seamless background operation. Get passive alerts and keep core metrics visible without interrupting your workflow."
                    />
                </div>
            </section>

            {/* Keyboard Shortcuts Section */}
            <section className="py-16 md:py-20 px-4 md:px-6 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white leading-tight">Efficiency at your <br />fingertips</h2>
                        <p className="text-slate-400 text-lg">
                            CarbonLint is built for speed. Control everything without leaving your editor using our custom keyboard shortcuts.
                        </p>
                        <div className="space-y-8 pt-4">
                            <div className="flex items-center gap-8">
                                <div className="flex gap-2">
                                    <Keycap>Ctrl</Keycap>
                                    <span className="text-2xl text-slate-500 self-center">+</span>
                                    <Keycap>P</Keycap>
                                </div>
                                <span className="text-slate-400 font-medium italic">Toggle Dashboard View</span>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="flex gap-2">
                                    <Keycap>Ctrl</Keycap>
                                    <span className="text-2xl text-slate-500 self-center">+</span>
                                    <Keycap className="min-w-[70px]">Shift</Keycap>
                                    <span className="text-2xl text-slate-500 self-center">+</span>
                                    <Keycap>H</Keycap>
                                </div>
                                <span className="text-slate-400 font-medium italic">Open Performance History</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-primary/20 rounded-full blur-[100px] absolute -top-20 -right-20" />
                        <div className="glass-card rounded-2xl p-4 shadow-2xl relative border-white/10">
                            <img
                                src={featuresDashboard}
                                alt="Code editor showing carbon usage dashboard"
                                className="rounded-xl opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Specs Section */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-10">Built with modern tech</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <TechBadge color="bg-blue-400" label="Electron 40" />
                    <TechBadge color="bg-cyan-400" label="React 18" />
                    <TechBadge color="bg-green-400" label="Node.js" />
                    <TechBadge color="bg-yellow-400" label="TypeScript" />
                </div>
            </section>
        </>
    );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all group">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function Keycap({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`keycap min-w-[60px] h-12 flex items-center justify-center text-white font-bold rounded-lg border-t border-white/20 ${className}`}>
            {children}
        </span>
    )
}

function TechBadge({ color, label }: { color: string, label: string }) {
    return (
        <div className="px-6 py-3 bg-slate-800/50 border border-white/10 rounded-full flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            <span className="text-sm font-semibold text-slate-300">{label}</span>
        </div>
    )
}
