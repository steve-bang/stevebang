import Link from 'next/link';
import { format } from 'date-fns';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';

export const metadata = {
  title: 'Projects | Steve Bang',
  description: 'Explore our latest projects.',
};

const projects = [
  {
    title: 'Jframework',
    description:
      "A platform that manages an application's fundamental issues, such as users, roles, permissions, events, tickets, licenses, and more. We provide nearly 60% of the work in your application.",
    link: 'https://jframework.io',
    startDate: '2023-10-05',
    endDate: null,
    tags: ['Platform', 'SaaS'],
  },
  {
    title: 'VardyTests',
    description:
      'AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.',
    link: 'https://vardytests.com/',
    startDate: '2022-02-01',
    endDate: null,
    tags: ['AI', 'EdTech'],
  },
  {
    title: 'PasswordTheBest',
    description:
      'PasswordTheBest is the best password library for .NET. It provides password validation and password hashing to help you follow the best password practices. Advanced password security toolkit with multiple hashing implementations.',
    link: 'https://www.nuget.org/packages/PasswordTheBest',
    startDate: '2024-03-01',
    endDate: '2024-10-31',
    tags: ['.NET', 'Security', 'NuGet'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-primary dark:text-purple-400 mb-3">
            Projects
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            A selection of things I've built and shipped.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group relative
                bg-white dark:bg-gray-800/60
                border-l-4 border-primary dark:border-purple-500
                rounded-r-xl
                shadow-sm dark:shadow-gray-900/40
                dark:border dark:border-l-4 dark:border-gray-700/50 dark:border-l-purple-500
                p-6
                hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-gray-900/60
                transition-all duration-200
              "
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </Link>
                </h2>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="shrink-0 mt-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-purple-400 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* Tags */}
              {project.tags && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 dark:bg-purple-500/15 text-primary dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/60">
                <p className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{format(new Date(project.startDate), 'MMM yyyy')}</span>
                  <span className="mx-0.5 text-gray-300 dark:text-gray-600">→</span>
                  <span>
                    {project.endDate
                      ? format(new Date(project.endDate), 'MMM yyyy')
                      : <span className="text-green-500 dark:text-green-400 font-medium">Ongoing</span>
                    }
                  </span>
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary dark:text-purple-400 hover:underline underline-offset-2"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}