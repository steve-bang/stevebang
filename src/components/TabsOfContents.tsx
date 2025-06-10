import { Heading } from '@/lib/extract-heading';
import Link from 'next/link';
import { ReactNode } from 'react';



interface TabsOfContentsProps {
    headings: Heading[];
    children: ReactNode; // Rendered MDX content
}

export default function TabsOfContents({ headings, children }: TabsOfContentsProps) {
    // Use a simple tab state with server component (no client interactivity)
    // Default: show both TOC and content, or TOC above content
    return (
        <div className="mb-8">
            {/* Table of Contents */}
            <nav className="toc mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800 mb-2">Table of Contents</div>
                <ul>
                    {headings.map((h, i) => (
                        <li
                            key={i}
                            style={{ marginLeft: (h.level - 1) * 16 }}
                            className="mb-2 text-blue-500"
                        >
                            <Link
                                href={`#${h.id}`}
                                className={`block hover:text-primary transition-colors'
                                    `}
                            >
                                {h.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Article Content */}
            {children}
        </div>
    );
}
