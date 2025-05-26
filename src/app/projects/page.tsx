import Link from 'next/link';
import { format } from 'date-fns';

export const metadata = {
  title: 'Projects | Steve Bang',
  description: 'Explore our latest projects.',
};

const projects = [
  {
    title: 'Jframework',
    description: "A platform that manages an application's fundamental issues, such as users, roles, permissions, events, tickets, licenses, and more. We provide nearly 60% of the work in your application.",
    link: 'https://jframework.io',
    startDate: '2023-10-05',
    endDate: null, // Ongoing project
  },
  {
    title: 'VardyTests',
    description: 'AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.',
    link: 'https://vardytests.com/',
    startDate: '2022-02-01',
    endDate: null,
  },
  {
    title: 'PasswordTheBest',
    description: 'PasswordTheBest is the best password library for .NET. It provides password validation and password hashing to help you follow the best password practices. Advanced password security toolkit with multiple hashing implementations.',
    link: 'https://www.nuget.org/packages/PasswordTheBest',
    startDate: '2024-03-01',
    endDate: '2024-10-31',
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#512BD4]">Dự án</h1>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="border-l-4 border-[#512BD4] pl-4 py-2 bg-white shadow-md rounded-lg transition-transform hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={project.link} className="hover:text-[#512BD4] transition-colors">
                  {project.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 flex items-center">
                <span className="mr-2">Từ: {format(new Date(project.startDate), 'MMM d, yyyy')}</span>
                <span className="mx-2">|</span>
                <span>Đến: {project.endDate ? format(new Date(project.endDate), 'MMM d, yyyy') : 'Hiện tại'}</span>
              </p>
              <Link href={project.link} className="text-[#512BD4] hover:underline mt-2 inline-block">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 