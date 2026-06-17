import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

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

function BlogPost() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/posts/${id}`)
                if (!response.ok) throw new Error("Post not found")
                const data = await response.json()
                setPost(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    if (loading) {
        return (
            <div className="mx-auto max-w-3xl px-10 py-24 text-slate-400">
                Loading post...
            </div>
        )
    }

    if (error || !post) {
        return (
            <div className="mx-auto max-w-3xl px-10 py-24">
                <p className="text-slate-500 mb-4">Could not load this post.</p>
                <Link to="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    ← Back to Blog
                </Link>
            </div>
        )
    }

    const categoryImage = categoryImages[post.content_key]

    return (
        <div className="bg-white">
            {/* Hero banner */}
            {categoryImage && (
                <div className="w-full h-64 overflow-hidden">
                    <img
                        src={categoryImage}
                        alt={post.content_key}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
                {/* Back link */}
                <Link to="/blog" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    ← Back to Blog
                </Link>

                {/* Title + tag */}
                <div className="mt-6 mb-8">
                    <span className="inline-block text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium capitalize mb-3">
                        {post.content_key}
                    </span>
                    <h1 className="text-3xl font-bold text-slate-900 leading-tight">{post.title}</h1>
                </div>

                {/* Markdown content — h1 suppressed since we render the title above */}
                <div className="prose prose-slate max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{ h1: () => null }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
