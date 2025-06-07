import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Logo from '@/components/Logo';
import Buymeacoffee from './Buymeacoffee';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Sharing software engineering experiences and insights to help developers grow.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="https://github.com/steve-bang" className="text-gray-600 hover:text-primary transition-colors" target='_blank'>
                <FiGithub size={24} />
              </Link>
              {/* <Link href="https://twitter.com/sangdotnet" className="text-gray-600 hover:text-primary transition-colors">
                <FiTwitter size={24} />
              </Link> */}
              <Link href="https://linkedin.com/in/steve-bang-924ab6284" className="text-gray-600 hover:text-primary transition-colors">
                <FiLinkedin size={24} />
              </Link>
            </div>

            <Buymeacoffee />

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/category/dotnet" className="text-gray-600 hover:text-primary transition-colors">.NET Development</Link>
              </li>
              <li>
                <Link href="/blog/category/architecture" className="text-gray-600 hover:text-primary transition-colors">Architecture</Link>
              </li>
              <li>
                <Link href="/blog/category/devops" className="text-gray-600 hover:text-primary transition-colors">DevOps</Link>
              </li>
              <li>
                <Link href="/blog/category/web-development" className="text-gray-600 hover:text-primary transition-colors">Web Development</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Steve Bang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 