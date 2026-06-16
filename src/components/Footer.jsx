import { Terminal, Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react"

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
    { icon: Mail, label: "Email", href: "mailto:placeholder@example.com" },
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
            <div className="mx-auto max-w-7xl px-10 py-10">
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
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <Icon size={20} />
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
