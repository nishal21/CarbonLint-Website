
export function ShortcutsPage() {
    return (
        <div className="min-h-screen bg-background-dark">
            <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
                {/* Hero Section */}
                <section className="text-center mb-12 md:mb-20">
                    <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-4 text-white">
                        Keyboard Shortcuts
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Master CarbonLint with professional-grade hotkeys. Boost your productivity and manage your carbon footprint without leaving the keyboard.
                    </p>
                </section>

                {/* High Impact Core Functions */}
                <section className="grid md:grid-cols-2 gap-6 mb-20">
                    {/* Shortcut Card 1 */}
                    <div className="bg-[#111] border border-white/5 p-8 rounded-xl flex flex-col items-center text-center group hover:border-primary/50 transition-all shadow-xl shadow-black/20">
                        <div className="mb-8 flex items-center gap-4">
                            <span className="kbd-key">Ctrl</span>
                            <span className="text-slate-500 font-mono">+</span>
                            <span className="kbd-key">P</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Start / Stop Recording</h3>
                        <p className="text-slate-400 text-sm">Primary command for session control and linting cycles.</p>
                        <div className="mt-6 inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                            Core Function
                        </div>
                    </div>
                    {/* Shortcut Card 2 */}
                    <div className="bg-[#111] border border-white/5 p-8 rounded-xl flex flex-col items-center text-center group hover:border-primary/50 transition-all shadow-xl shadow-black/20">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="kbd-key">Ctrl</span>
                            <span className="text-slate-500 font-mono">+</span>
                            <span className="kbd-key">Shift</span>
                            <span className="text-slate-500 font-mono">+</span>
                            <span className="kbd-key">H</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Hide / Show Window</h3>
                        <p className="text-slate-400 text-sm">Toggle interface visibility instantly to focus on your code.</p>
                        <div className="mt-6 inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                            UI Management
                        </div>
                    </div>
                </section>

                {/* Additional Shortcuts Table */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                        <span className="material-symbols-outlined text-primary">list_alt</span>
                        Command Reference
                    </h2>
                    <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                    <th className="px-6 py-4">Action</th>
                                    <th className="px-6 py-4">Shortcut</th>
                                    <th className="px-6 py-4 hidden md:table-cell">Usage</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white">
                                <tr className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-5 font-medium">Refresh Analysis</td>
                                    <td className="px-6 py-5">
                                        <span className="kbd-key kbd-key-small">Ctrl</span>
                                        <span className="kbd-key kbd-key-small">R</span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-400 text-sm hidden md:table-cell">Trigger a full re-scan of the current project tree.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-5 font-medium">Export Report</td>
                                    <td className="px-6 py-5">
                                        <span className="kbd-key kbd-key-small">Ctrl</span>
                                        <span className="kbd-key kbd-key-small">E</span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-400 text-sm hidden md:table-cell">Download current carbon audit as PDF or JSON.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-5 font-medium">Open Settings</td>
                                    <td className="px-6 py-5">
                                        <span className="kbd-key kbd-key-small">Ctrl</span>
                                        <span className="kbd-key kbd-key-small">S</span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-400 text-sm hidden md:table-cell">Modify thresholds, API keys, and notification preferences.</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-5 font-medium">Quit Application</td>
                                    <td className="px-6 py-5">
                                        <span className="kbd-key kbd-key-small">Ctrl</span>
                                        <span className="kbd-key kbd-key-small">Q</span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-400 text-sm hidden md:table-cell">Safely stop all background linting processes and exit.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Pro Tips Section */}
                <section className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-xl">
                    <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>tips_and_updates</span>
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-white">Pro Tips for Expert Users</h2>
                            <ul className="space-y-4 text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Combine <span className="font-mono text-primary">[Ctrl]+[P]</span> with your IDE's auto-save to ensure real-time linting of every code change.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>You can re-map any of these keys in the <span className="italic">Settings &gt; Keybindings</span> menu to match your preferred editor (Vim/Emacs styles supported).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>Use <span className="font-mono text-primary">[Ctrl]+[Shift]+[L]</span> (not listed above) to quickly toggle the mini-hud on/off for a distraction-free environment.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
