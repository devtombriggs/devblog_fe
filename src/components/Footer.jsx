import { Terminal } from "lucide-react"

const DummyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
)

const socials = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Email", href: "mailto:placeholder@example.com" },
]

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#what-i-do" },
    { label: "Certifications", href: "#certs" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
]

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="border border-blue-500 rounded p-1">
                            <Terminal size={20} className="text-blue-500" />
                        </div>
                        <span className="text-lg font-bold text-white">DevOps with Tom</span>
                    </div>

                    <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a href={href} className="hover:text-blue-400 transition-colors">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-5">
                        {socials.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <DummyIcon />
                            </a>
                        ))}
                    </div>

                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} DevOps with Tom. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
