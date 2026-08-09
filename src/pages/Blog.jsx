import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import blogmainImg from "../assets/blog/blogmain.png"
import aiImg from "../assets/blog/ai.png"
import cicdImg from "../assets/blog/cicd.png"
import devopsImg from "../assets/blog/devops.png"
import kubernetesImg from "../assets/blog/kubernetes.png"
import loggingImg from "../assets/blog/logging.png"
import securityImg from "../assets/blog/security.png"
import softwareImg from "../assets/blog/software.png"

const categoryImages = {
    ai: aiImg,
    cicd: cicdImg,
    devops: devopsImg,
    kubernetes: kubernetesImg,
    logging: loggingImg,
    security: securityImg,
    software: softwareImg,
}

const CONTENT_KEYS = ["ai", "devops", "cicd", "kubernetes", "logging", "security", "software"]
const FILTERS = ["all", ...CONTENT_KEYS]

function Blog() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState("all")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/posts")
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error("Error fetching posts:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    const filteredPosts = activeFilter === "all"
        ? posts
        : posts.filter(p => p.content_key === activeFilter)

    const categoryCounts = CONTENT_KEYS.reduce((acc, key) => {
        acc[key] = posts.filter(p => p.content_key === key).length
        return acc
    }, {})

    const firstPost = posts[0]

    return (
        <div>
            {/* Hero */}
            <section className="bg-slate-950 py-12 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Blog</h1>
                        <h3 className="text-base lg:text-lg text-slate-300 max-w-md leading-relaxed">
                            Thoughts, tutorials and real-world lessons from my DevOps journey.
                        </h3>
                    </div>
                    <img
                        src={blogmainImg}
                        alt="Blog"
                        className="flex-shrink-0 w-56 md:w-72 h-36 md:h-48 object-cover rounded-xl hidden md:block"
                    />
                </div>
            </section>

            <div className="bg-white py-8 lg:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                    {/* Filter toggles */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                                    activeFilter === filter
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Two-column layout */}
                    <div className="flex flex-col lg:flex-row gap-10 items-start">

                        {/* Post list */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {loading && (
                                <p className="text-slate-400 col-span-2">Loading posts...</p>
                            )}
                            {!loading && filteredPosts.length === 0 && (
                                <p className="text-slate-400 col-span-2">No posts in this category yet.</p>
                            )}
                            {filteredPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col"
                                >
                                    <img
                                        src={categoryImages[post.content_key]}
                                        alt={post.content_key}
                                        className="w-full h-36 object-cover"
                                    />
                                    <div className="p-5 flex flex-col gap-2.5 flex-1">
                                        <h3 className="text-base font-semibold text-slate-900 leading-snug">
                                            {post.title}
                                        </h3>
                                        <span className="self-start text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium capitalize">
                                            {post.content_key}
                                        </span>
                                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                            {post.content}
                                        </p>
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="self-start text-sm text-blue-600 hover:text-blue-700 font-medium mt-auto pt-2"
                                        >
                                            Read more →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">

                            {/* Thought of the Weekend */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-base font-bold text-slate-900 mb-3">
                                    Thought of the Weekend
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed italic">
                                    "The best infrastructure is the kind you never have to think about.
                                    Build systems that are boring by design — resilient, observable, and easy to hand off."
                                </p>
                            </div>

                            {/* Categories */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h3 className="text-base font-bold text-slate-900 mb-4">Categories</h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-center justify-between">
                                        <button
                                            onClick={() => setActiveFilter("all")}
                                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                        >
                                            All
                                        </button>
                                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                            {posts.length}
                                        </span>
                                    </li>
                                    {CONTENT_KEYS.map(key => (
                                        <li key={key} className="flex items-center justify-between">
                                            <button
                                                onClick={() => setActiveFilter(key)}
                                                className="text-sm text-slate-600 hover:text-blue-600 capitalize transition-colors"
                                            >
                                                {key}
                                            </button>
                                            <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                                {categoryCounts[key]}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* First post */}
                            {firstPost && (
                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                    <h3 className="text-base font-bold text-slate-900 mb-4">
                                        Read My First Ever Post
                                    </h3>
                                    <img
                                        src={categoryImages[firstPost.content_key]}
                                        alt={firstPost.title}
                                        className="w-full h-28 object-cover rounded-lg mb-3"
                                    />
                                    <h4 className="text-sm font-semibold text-slate-800 mb-1">{firstPost.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                                        {firstPost.content}
                                    </p>
                                    <Link
                                        to={`/blog/${firstPost.id}`}
                                        className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Read it →
                                    </Link>
                                </div>
                            )}

                            {/* Contact */}
                            <div className="bg-blue-600 rounded-xl p-6 text-white">
                                <h3 className="text-base font-bold mb-2">Get in Touch</h3>
                                <p className="text-sm text-blue-100 leading-relaxed mb-4">
                                    Have a question or want to chat about DevOps? I'd love to hear from you.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-white text-blue-600 font-medium text-sm px-4 py-2 rounded hover:bg-blue-50 transition-colors"
                                >
                                    Contact Me
                                </Link>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
