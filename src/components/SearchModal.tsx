import { BlogPost } from "@/app/blog/[slug]/page";
import { getBlogPostsBySearch } from "@/lib/mdx";
import { IPost } from "@/types/Post";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { FaTimes } from "react-icons/fa";

type Props = {
    open: boolean,
    onClose: () => void,
}

export default function SearchModal(
    { open, onClose }: Props
) {

    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [results, setResults] = useState<BlogPost[]>([])
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (open) {
            inputRef.current?.focus()
        }
    }, [open])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }

            // Trap tab key within modal
            if (e.key === 'Tab' && modalRef.current) {
                const focusableElements = modalRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )

                const firstElement = focusableElements[0] as HTMLElement
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

                if (!e.shiftKey && document.activeElement === lastElement) {
                    firstElement.focus()
                    e.preventDefault()
                }

                if (e.shiftKey && document.activeElement === firstElement) {
                    lastElement.focus()
                    e.preventDefault()
                }
            }
        }

        if (open) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
            inputRef.current?.focus()
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [open, onClose])

    useEffect(() => {
        if (!query || query.trim() == '') {
            setResults([])
            setIsLoading(false)
            return
        }

        setIsLoading(true)
        const delayDebounce = setTimeout(async () => {
            try {

                const res = await fetch(`api/posts?keywords=${query}`);

                const json = await res.json();
                setResults(json)
            }
            finally {
                setIsLoading(false)
            }
        }, 500)

        return () => clearTimeout(delayDebounce)
    }, [query])

    function onCloseModal() {
        setQuery("");
        setResults([])
        setIsLoading(false)
        onClose()
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50" ref={modalRef} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
            <div
                className="fixed inset-0 bg-gray-900 opacity-70 h-screen"
                onClick={onClose}
            />

            <div className="relative h-screen flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col fade-in">

                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                id="searchInput"
                                type="text"
                                onChange={(e) => setQuery(e.target.value)}
                                value={query}
                                placeholder="Search keywords..."
                                className="w-full p-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                autoFocus
                            />
                            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <button id="closeSearch" className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" onClick={onCloseModal}>
                                <FaTimes />
                            </button>
                        </div>
                    </div>

                    {/* Search Results */}
                    <div id="searchResults" className="flex-1 overflow-y-auto custom-scrollbar p-4">
                        {
                            isLoading ? (
                                <div id="loadingResults" className="flex flex-col items-center justify-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
                                    <p className="text-gray-600">Searching for posts...</p>
                                </div>
                            ) : results.length === 0 && query ? (
                                <div id="emptyResults" className="flex flex-col items-center justify-center py-12">
                                    <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                                    <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
                                    <p className="text-gray-500 text-center max-w-md">Try different keywords or check back later for new posts.</p>
                                </div>
                            ) : (
                                <div id="resultsContainer" className="space-y-4">
                                    <div className="space-y-4">
                                        {results.map((post, index) => (
                                            <BlogCard
                                                key={post.slug}
                                                post={post}
                                                className="animate-slide-up"
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                                onCloseModal={onCloseModal}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )
                        }


                    </div>

                    {/* Search Footer */}
                    <div className="p-4 border-t border-gray-200 text-sm text-gray-500 flex justify-between items-center">
                        <span>{results.length} {results.length === 1 ? 'result' : 'results'}</span>
                        <div>
                            <span className="mr-2">Press <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> to close</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


interface BlogCardProps {
    post: BlogPost
    className?: string
    style?: React.CSSProperties
    onCloseModal: () => void
}

export function BlogCard({ post, className = '', style, onCloseModal }: BlogCardProps) {
    return (
        <div
            className={`bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition ${className}`}
            style={style}
        >
            <div className="flex justify-between items-start mb-2">
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-5">{post.description}</p>
            <Link
                href={`/blog/${post.slug}`}
                className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition"
                onClick={onCloseModal}
            >
                Read post →
            </Link>
        </div>
    )
}