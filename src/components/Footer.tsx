import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Logo from '@/components/Logo';
import Buymeacoffee from './Buymeacoffee';

export default function Footer() {
  return (
    <footer className="
      bg-gradient-to-br from-white to-gray-100
      dark:from-gray-950 dark:to-gray-900
      border-t border-gray-200 dark:border-gray-800
      py-12
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Sharing software engineering experiences and insights to help developers grow.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://github.com/steve-bang"
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </Link>
              <Link
                href="https://linkedin.com/in/steve-bang-924ab6284"
                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </Link>
            </div>

            <Buymeacoffee />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/blog', label: 'Blog' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-purple-400 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/blog/category/dotnet', label: '.NET Development' },
                { href: '/blog/category/architecture', label: 'Architecture' },
                { href: '/blog/category/devops', label: 'DevOps' },
                { href: '/blog/category/web-development', label: 'Web Development' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-purple-400 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Steve Bang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}