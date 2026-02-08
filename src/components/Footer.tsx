import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 bg-background-dark text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="size-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm font-bold">eco</span>
                    </div>
                    <span className="font-bold text-lg">CarbonLint</span>
                </div>
                <div className="flex gap-8 text-sm text-white/40">
                    <a className="hover:text-primary transition-colors" href="https://instagram.com/demonking.___">Instagram</a>
                    <a className="hover:text-primary transition-colors" href="https://github.com/nishal21/CarboLint">GitHub</a>
                    <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
                    <Link className="hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
                </div>
                <p className="text-sm text-white/20">© {new Date().getFullYear()} CarbonLint. All rights reserved.</p>
            </div>
        </footer>
    );
}
