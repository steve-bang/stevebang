import Link from 'next/link';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string;
    startDate: string;
    endDate: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-200">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={project.link} className="hover:text-primary transition-colors">
            {project.title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <footer className="mt-4">
          <Link href={project.link} className="text-blue-500 hover:underline">
            View Project
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Started: {format(new Date(project.startDate), 'MMM d, yyyy')} | Ended: {format(new Date(project.endDate), 'MMM d, yyyy')}
          </p>
        </footer>
      </div>
    </article>
  );
} 