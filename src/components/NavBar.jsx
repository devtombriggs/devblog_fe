import { useState } from "react"
import { Terminal, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const { pathname } = useLocation()
    const isHome = pathname === "/"
    const [menuOpen, setMenuOpen] = useState(false)

    const close = () => setMenuOpen(false)

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                <div className="flex items-center gap-2">
                    <div className="border border-blue-500 rounded p-1">
                        <Terminal size={20} className="text-blue-500" />
                    </div>
                    <span className="text-xl font-bold">
                        <span className="text-white">DevOps </span>
                        <span className="text-slate-400">with Tom</span>
                    </span>
                </div>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    {isHome ? (
                        <>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#what-i-do" className="hover:text-blue-400 transition-colors">Skills</a></li>
                            <li><a href="#certs" className="hover:text-blue-400 transition-colors">Certifications</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            <li>
                                <Link to="/blog" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition-colors">← Home</Link>
                        </li>
                    )}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-5 flex flex-col gap-5 text-sm font-medium text-slate-300">
                    {isHome ? (
                        <>
                            <a href="#about" onClick={close} className="hover:text-blue-400 transition-colors">About</a>
                            <a href="#what-i-do" onClick={close} className="hover:text-blue-400 transition-colors">Skills</a>
                            <a href="#certs" onClick={close} className="hover:text-blue-400 transition-colors">Certifications</a>
                            <a href="#projects" onClick={close} className="hover:text-blue-400 transition-colors">Projects</a>
                            <a href="#contact" onClick={close} className="hover:text-blue-400 transition-colors">Contact</a>
                            <Link to="/blog" onClick={close} className="self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                                Blog
                            </Link>
                        </>
                    ) : (
                        <Link to="/" onClick={close} className="hover:text-blue-400 transition-colors">← Home</Link>
                    )}
                </div>
            )}
        </nav>
    )
}

export default NavBar
