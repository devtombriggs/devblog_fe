import { Terminal } from "lucide-react"

const NavBar = () => {
    return (
        <nav className="border-b border-slate-800 bg-slate-950">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-10">
                <div className="flex items-center gap-2">
                    <div className="border border-blue-500 rounded p-1">
                        <Terminal size={20} className="text-blue-500" />
                    </div>
                    <span className="text-xl font-bold">
                        <span className="text-white">DevOps </span>
                        <span className="text-slate-400">with Tom</span>
                    </span>
                </div>       
                            <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
                <li>
                    <a href="#about" className="hover:text-blue-400">
                    About
                    </a>
                </li>

                <li>
                    <a href="#what-i-do" className="hover:text-blue-400">
                    Skills
                    </a>
                </li>

                <li>
                    <a href="#certs" className="hover:text-blue-400">
                    Certifications
                    </a>
                </li>

                <li>
                    <a href="#projects" className="hover:text-blue-400">
                    Projects
                    </a>
                </li>

                <li>
                    <a href="/blog" className="hover:text-blue-400">
                    Blog
                    </a>
                </li>

                <li>
                    <a href="/contact" className="hover:text-blue-400">
                        Contact Me
                    </a>
                </li>
            </ul>      
            </div>

        </nav>
    )
}

export default NavBar;