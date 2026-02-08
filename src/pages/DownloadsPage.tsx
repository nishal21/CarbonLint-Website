

export function DownloadsPage() {
    return (
        <>
            <section className="pt-24 md:pt-32 pb-12 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Available Now</span>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">Download CarbonLint</h1>
                    <p className="text-lg md:text-xl text-slate-400">
                        The world's first sustainability-focused linter. Optimize your code for a greener web and faster performance.
                    </p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Windows Card */}
                    <div className="bg-slate-custom rounded-xl p-8 shadow-xl border border-white/5 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M0 3.449L9.75 2.1V11.4H0V3.449zm0 8.851h9.75v9.3L0 20.251V12.3zm10.55-10.451L24 0v11.4h-13.45V1.849zM24 12.3v11.7l-13.45-1.9V12.3H24z" />
                                </svg>
                            </div>
                            <div className="text-right">
                                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded">v1.0.0</span>
                                <p className="text-xs text-slate-500 mt-1">Size: 96.3 MB</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
                        <p className="text-slate-400 mb-8 text-sm">Official installer for Windows 10 & 11 (64-bit).</p>
                        <div className="mt-auto">
                            <a href="https://github.com/nishal21/CarbonLint/releases/download/v1.0.0/CarbonLint.Setup.1.0.0.exe" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                                <span className="material-symbols-outlined">download</span>
                                Download for Windows (.exe)
                            </a>
                            <div className="mt-6 space-y-2">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">System Requirements</p>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> Windows 10 Build 19041+ or Windows 11</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> 4GB RAM (8GB Recommended)</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> Node.js v16+ runtime</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Linux Card */}
                    <div className="bg-slate-custom rounded-xl p-8 shadow-xl border border-white/5 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1.12-10.4c-.16-.07-.34-.1-.52-.1-.18 0-.36.03-.52.1-.31.14-.52.44-.52.78v2.02c0 .34.21.64.52.78.16.07.34.1.52.1.18 0.36-.03.52-.1.31-.14.52-.44.52-.78V6.38c0-.34-.21-.64-.52-.78z" />
                                    <path d="M10.12 11.23c-.5-.03-1 .13-1.4.43-.88.66-1.12 1.86-.54 2.82.58.96 1.8 1.3 2.72.76.4-.23.7-.61.85-1.06.15-.45.14-.94-.04-1.39-.33-.84-1.1-1.43-1.59-1.56zM15 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                                </svg>
                            </div>
                            <div className="text-right">
                                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded">v1.0.0</span>
                                <p className="text-xs text-slate-500 mt-1">Size: 91.1 MB & 119 MB</p>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Linux</h3>
                        <p className="text-slate-400 mb-8 text-sm">Native packages for Debian, Ubuntu, and generic Linux distros.</p>
                        <div className="mt-auto space-y-3">
                            <a href="https://github.com/nishal21/CarbonLint/releases/download/v1.0.0/carbonlint_1.0.0_amd64.deb" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Download .deb
                            </a>
                            <a href="https://github.com/nishal21/CarbonLint/releases/download/v1.0.0/CarbonLint-1.0.0.AppImage" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                                <span className="material-symbols-outlined text-sm">box</span>
                                Download AppImage
                            </a>
                            <div className="mt-6 space-y-2">
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">Support Information</p>
                                <ul className="text-xs text-slate-400 space-y-1">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> GLIBC 2.27 or newer</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> x86_64 architecture</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">check_circle</span> Supports GTK3 and Qt environments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLI Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-4">CI/CD Integration</h2>
                        <p className="text-slate-400">Automate your sustainability audits using our powerful CLI tool.</p>
                    </div>
                    <div className="terminal-bg rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
                        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs text-slate-500 font-mono">bash — carbonlint-cli</span>
                            <div />
                        </div>
                        <div className="p-6 font-mono text-sm leading-relaxed">
                            <div className="flex items-start gap-3">
                                <span className="text-primary">$</span>
                                <div className="flex-1">
                                    <span className="text-white">npm install -g carbonlint-cli</span>
                                    <div className="mt-2 text-slate-500 italic"># Installing CarbonLint Globally...</div>
                                </div>
                                <button className="text-slate-500 hover:text-white transition-colors" title="Copy to clipboard">
                                    <span className="material-symbols-outlined text-lg">content_copy</span>
                                </button>
                            </div>
                            <div className="mt-4 flex items-start gap-3">
                                <span className="text-primary">$</span>
                                <div className="flex-1">
                                    <span className="text-white">carbonlint --init</span>
                                    <div className="text-green-400 mt-1">✓ Created .carbonlintrc in project root</div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-start gap-3">
                                <span className="text-primary">$</span>
                                <div className="flex-1">
                                    <span className="text-white">carbonlint .</span>
                                    <div className="mt-1">
                                        <span className="text-slate-300">Scanning 42 files...</span><br />
                                        <span className="text-green-400">Green Score: 94/100 (Excellent)</span><br />
                                        <span className="text-yellow-400">Warning: High-weight asset detected in /images/hero.png</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checksum Section */}
            <section className="py-16 px-4 bg-slate-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">Technical Verification</h2>
                    <div className="overflow-x-auto rounded-lg border border-slate-800">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-800 text-slate-400">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Artifact Name</th>
                                    <th className="px-6 py-4 font-semibold">SHA-256 Checksum</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 bg-background-dark">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-white">CarbonLint.Setup.1.0.0.exe</td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">83e7e6bd12a1f79bad2e77ddc26a33c46e5d76efe1e5ddd2d7ff9c26a8812cbd</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:underline text-xs font-bold">Copy Hash</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-white">carbonlint_1.0.0_amd64.deb</td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">28f0fb9ed07f1c92a4a6f021cd790a6cb40c9d84e56341572948430abe15a50b</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:underline text-xs font-bold">Copy Hash</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-white">CarbonLint-1.0.0.AppImage</td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">ee338d98b498f8df44f3c25c0c00488b2c350ad4a52c5052c48eae51b5a50c1a.</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:underline text-xs font-bold">Copy Hash</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 text-center italic">
                        Verify the integrity of your downloads by comparing hashes using the <code className="bg-slate-800 px-1 rounded">sha256sum</code> command.
                    </p>
                </div>
            </section>
        </>
    );
}
