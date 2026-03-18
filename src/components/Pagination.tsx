import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  // Build page number list with ellipsis logic
  // Always show: first, last, current, and 1 neighbour on each side
  const getPageNumbers = (): (number | '…')[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | '…')[] = [1];

    if (currentPage > 3) pages.push('…');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('…');

    pages.push(totalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const linkBase =
    'inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 select-none';

  const activeClass =
    'bg-primary dark:bg-purple-600 text-white shadow-sm shadow-primary/30 dark:shadow-purple-900/40 cursor-default';

  const inactiveClass =
    'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-purple-500 hover:text-primary dark:hover:text-purple-400 hover:bg-primary/5 dark:hover:bg-purple-500/10';

  const arrowClass =
    'inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-all duration-150 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-primary dark:hover:border-purple-500 hover:text-primary dark:hover:text-purple-400 hover:bg-primary/5 dark:hover:bg-purple-500/10';

  const disabledArrowClass =
    'inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-600 cursor-not-allowed';

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1.5 mt-12"
    >
      {/* Previous */}
      {hasPrev ? (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          aria-label="Previous page"
          className={arrowClass}
        >
          <FiChevronLeft className="w-4 h-4" />
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledArrowClass}>
          <FiChevronLeft className="w-4 h-4" />
        </span>
      )}

      {/* Page numbers */}
      {pageNumbers.map((p, idx) =>
        p === '…' ? (
          <span
            key={`ellipsis-${idx}`}
            className="inline-flex items-center justify-center w-9 h-9 text-gray-400 dark:text-gray-600 text-sm select-none"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={`${baseUrl}?page=${p}`}
            aria-label={`Page ${p}`}
            aria-current={p === currentPage ? 'page' : undefined}
            className={`${linkBase} ${p === currentPage ? activeClass : inactiveClass}`}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {hasNext ? (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          aria-label="Next page"
          className={arrowClass}
        >
          <FiChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span aria-disabled="true" className={disabledArrowClass}>
          <FiChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}