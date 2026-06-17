import homelogo from "../assets/homepage/homelogo.png"
import mePic from "../assets/homepage/me.jpg"
import AnsibleLogo from "../assets/homepage/Ansible.svg"
import AWSLogo from "../assets/homepage/AWS.svg"
import DockerLogo from "../assets/homepage/Docker.svg"
import GitHubLogo from "../assets/homepage/GitHub.svg"
import TerraformLogo from "../assets/homepage/HashiCorp Terraform.svg"
import JenkinsLogo from "../assets/homepage/Jenkins.svg"
import KubernetesLogo from "../assets/homepage/Kubernetes.svg"
import PythonLogo from "../assets/homepage/Python.svg"
import { Server, GitBranch, Cloud, Activity, ExternalLink } from "lucide-react"

const techLogos = [
    { src: AnsibleLogo, alt: "Ansible" },
    { src: AWSLogo, alt: "AWS" },
    { src: DockerLogo, alt: "Docker" },
    { src: GitHubLogo, alt: "GitHub" },
    { src: TerraformLogo, alt: "Terraform" },
    { src: JenkinsLogo, alt: "Jenkins" },
    { src: KubernetesLogo, alt: "Kubernetes" },
    { src: PythonLogo, alt: "Python" },
]

const whatIDo = [
    {
        icon: Server,
        title: "Infrastructure as Code",
        description: "Creating and managing infrastructure with Terraform, CloudFormation and more.",
    },
    {
        icon: GitBranch,
        title: "CI/CD Automation",
        description: "Building safe, fast and reliable pipelines with Jenkins, GitHub Actions and GitLab CI.",
    },
    {
        icon: Cloud,
        title: "Cloud & Containers",
        description: "Working with AWS, Azure, GCP and container orchestration with Docker and Kubernetes.",
    },
    {
        icon: Activity,
        title: "Monitoring & Observability",
        description: "Implementing logging, monitoring and alerting with Prometheus, Grafana and ELK Stack.",
    },
]

const certs = [
    {
        badge: "AWS",
        title: "AWS Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        date: "Jan 2024",
    },
    {
        badge: "CKA",
        title: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "Mar 2024",
    },
    {
        badge: "TF",
        title: "HashiCorp Terraform Associate",
        issuer: "HashiCorp",
        date: "Jun 2023",
    },
    {
        badge: "DCA",
        title: "Docker Certified Associate",
        issuer: "Docker Inc.",
        date: "Sep 2023",
    },
]

const projects = [
    {
        title: "Production Kubernetes on AWS",
        description: "Automated provisioning of a production-grade Kubernetes cluster on AWS using Terraform and Ansible, with full network policy and RBAC.",
        tags: ["Kubernetes", "Terraform", "AWS"],
    },
    {
        title: "CI/CD Pipeline Automation",
        description: "Multi-stage Jenkins pipeline for a microservices application with automated testing, image builds, and GitOps-driven deployments.",
        tags: ["Jenkins", "Docker", "GitOps"],
    },
    {
        title: "Observability Stack",
        description: "Deployed Prometheus, Grafana, and Loki across a distributed system for full metrics, logs, and alerting coverage.",
        tags: ["Prometheus", "Grafana", "Kubernetes"],
    },
]

function HomePage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-slate-950 py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-6 w-full md:max-w-xl text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Automate. Deploy. Monitor. Repeat.
                        </h1>
                        <p className="text-slate-300">
                            A DevOps Engineer passionate about building reliable, scalable and automated systems.
                        </p>
                        <p className="text-slate-300">
                            Sharing practical knowledge and real-world experiences from the trenches.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                            <a
                                href="/blog"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded transition-colors"
                            >
                                Read My Blog
                            </a>
                            <a
                                href="#about"
                                className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-medium px-5 py-2.5 rounded transition-colors"
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 hidden md:block">
                        <img src={homelogo} alt="DevOps illustration" className="w-72 lg:w-96 h-auto" />
                    </div>
                </div>
            </section>

            {/* Tech logos strip */}
            <section className="bg-slate-50 py-8 lg:py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-center flex-wrap gap-6 lg:gap-10">
                        {techLogos.map(({ src, alt }) => (
                            <img
                                key={alt}
                                src={src}
                                alt={alt}
                                className="h-8 lg:h-10 w-auto grayscale hover:grayscale-0 transition-all"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About me */}
            <section id="about" className="bg-white py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 lg:mb-10">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        <div className="flex-shrink-0">
                            <img
                                src={mePic}
                                alt="Tom"
                                className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="flex flex-col gap-5 max-w-lg text-center md:text-left">
                            <h3 className="text-lg lg:text-xl font-semibold text-slate-700">Hi, I'm Tom</h3>
                            <p className="text-slate-600 leading-relaxed">
                                I'm a DevOps Engineer focused on automation, infrastructure as code, CI/CD, and observability.
                                I enjoy building tools that make deployments easier and systems more reliable.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                When I'm not shipping code, I'm writing about DevOps, sharing lessons learned, and working on my own projects.
                            </p>
                            <a
                                href="#"
                                className="self-center md:self-start bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded transition-colors"
                            >
                                Learn more about me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I do */}
            <section id="what-i-do" className="bg-slate-50 py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 lg:mb-12">What I Do</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whatIDo.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 flex flex-col gap-4 shadow-sm"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Icon size={24} className="text-blue-600" />
                                </div>
                                <h3 className="text-base lg:text-lg font-semibold text-slate-900">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section id="certs" className="bg-white py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 lg:mb-12">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certs.map(({ badge, title, issuer, date }) => (
                            <div
                                key={title}
                                className="flex items-center gap-5 border border-slate-200 rounded-xl p-5 shadow-sm"
                            >
                                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">{badge}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm lg:text-base font-semibold text-slate-900">{title}</h3>
                                    <p className="text-sm text-slate-500">{issuer}</p>
                                    <p className="text-xs text-slate-400">{date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="bg-slate-50 py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 lg:mb-12">Projects</h2>
                    <div className="flex flex-col gap-10 lg:gap-12">
                        {projects.map(({ title, description, tags }, index) => (
                            <div
                                key={title}
                                className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className="w-full md:w-1/2 h-52 lg:h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-slate-600 text-sm">[ project image ]</span>
                                </div>
                                <div className="flex flex-col gap-4 w-full md:max-w-md text-center md:text-left">
                                    <h3 className="text-lg lg:text-xl font-semibold text-slate-900">{title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{description}</p>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium justify-center md:justify-start"
                                    >
                                        Find out more <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-slate-950 py-12 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
                        <div className="flex flex-col gap-5 w-full md:max-w-sm">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white">Get in Touch</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Have a question, want to collaborate, or just want to talk DevOps?
                                Drop me a message and I'll get back to you.
                            </p>
                            <div className="flex flex-col gap-2 text-sm text-slate-400 mt-2">
                                <span>dev.tombriggs@gmail.com</span>
                            </div>
                        </div>

                        <form
                            className="flex-1 flex flex-col gap-4 w-full"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <textarea
                                rows={5}
                                placeholder="Your message..."
                                className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            />
                            <button
                                type="submit"
                                className="self-start bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
