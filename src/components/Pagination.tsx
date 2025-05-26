import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <Link key={p} href={`${baseUrl}?page=${p}`} className={`mx-1 px-3 py-1 rounded ${p === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          {p}
        </Link>
      ))}
    </div>
  );
} 