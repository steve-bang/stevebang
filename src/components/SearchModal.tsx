"use client";

import { BlogPost } from "@/app/blog/[slug]/page";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<BlogPost[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keyboard handling + scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`api/posts?keywords=${query}`);
        const json = await res.json();
        setResults(json);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  function onCloseModal() {
    setQuery("");
    setResults([]);
    setIsLoading(false);
    onClose();
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-950/70 dark:bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative h-screen flex items-start justify-center pt-24 px-4">
        <div className="
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700/60
          rounded-2xl shadow-2xl dark:shadow-black/60
          w-full max-w-2xl max-h-[70vh]
          flex flex-col
          animate-in fade-in slide-in-from-top-4 duration-200
        ">

          {/* Search input */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3.5 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
              <input
                ref={inputRef}
                id="searchInput"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search keywords..."
                className="
                  w-full
                  pl-10 pr-10 py-3
                  bg-gray-50 dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  text-gray-900 dark:text-gray-100
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                  rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-purple-500/50
                  focus:border-primary dark:focus:border-purple-500
                  transition-colors
                "
                autoFocus
              />
              <button
                onClick={onCloseModal}
                aria-label="Close search"
                className="
                  absolute right-3
                  text-gray-400 dark:text-gray-500
                  hover:text-gray-700 dark:hover:text-gray-300
                  transition-colors cursor-pointer
                "
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Results body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-14">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary dark:border-purple-500 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-sm">Searching…</p>
              </div>
            ) : results.length === 0 && query.trim() ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <FiSearch className="w-10 h-10 text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  No results found
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xs">
                  Try different keywords or check back later for new posts.
                </p>
              </div>
            ) : (
              results.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onCloseModal={onCloseModal}
                />
              ))
            )}
          </div>

          {/* Footer */}
          <div className="
            px-4 py-3
            border-t border-gray-100 dark:border-gray-800
            flex justify-between items-center
            text-xs text-gray-400 dark:text-gray-500
          ">
            <span>
              {query.trim()
                ? `${results.length} ${results.length === 1 ? "result" : "results"}`
                : "Type to search"}
            </span>
            <span>
              Press{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-mono text-xs">
                Esc
              </kbd>{" "}
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Result card ─────────────────────────────────────────── */

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  style?: React.CSSProperties;
  onCloseModal: () => void;
}

export function BlogCard({ post, className = "", style, onCloseModal }: BlogCardProps) {
  return (
    <div
      className={`
        group
        bg-white dark:bg-gray-800/60
        border border-gray-200 dark:border-gray-700/50
        hover:border-primary dark:hover:border-purple-500
        hover:shadow-sm dark:hover:shadow-gray-900/40
        rounded-xl p-4
        transition-all duration-150
        ${className}
      `}
      style={style}
    >
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-primary dark:group-hover:text-purple-400 transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 line-clamp-2">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-xs font-semibold text-primary dark:text-purple-400 hover:underline underline-offset-2 transition-colors"
        onClick={onCloseModal}
      >
        Read post →
      </Link>
    </div>
  );
}