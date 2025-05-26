import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white to-gray-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23512BD4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Badge */}
            <AnimatedSection className="inline-flex items-center px-4 py-2 rounded-full bg-primary bg-opacity-10 text-primary mb-8">
              <span className="text-sm font-medium">Chào mừng đến với <b>Steve Bang</b> Blog</span>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Software Engineering</span><br />
              <span className="text-gray-900">Góc Nhìn & Trải Nghiệm</span>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chia sẻ kiến thức lập trình đến tất cả mọi người một cách dễ hiểu, dễ tiếp cận, thực tiễn và truyền cảm hứng cho cộng đồng.
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.6} className="flex justify-center gap-8 mb-12">
              {[
                { value: '100+', label: 'Bài viết' },
                { value: '50K+', label: 'Độc giả' },
                { value: '3+', label: 'Năm kinh nghiệm' }
              ].map((stat, index) => (
                <AnimatedSection 
                  key={stat.label}
                  delay={0.6 + index * 0.1}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </AnimatedSection>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.8} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/blog"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-purple-600 text-white hover:from-purple-600 hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-600 to-primary group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Bài viết mới nhất</span>
                <span className="relative invisible">Bài viết mới nhất</span>
              </Link>
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-purple-600 duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Đăng ký ngay</span>
                <span className="relative invisible">Đăng ký ngay</span>
              </button>
            </AnimatedSection>

            
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection 
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Bài viết phổ biến
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Post 1 */}
            <AnimatedSection 
              whileInView={{ opacity: 1, y: 0 }}
              delay={0.2}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 max-w-sm mx-auto"
            >
              <Image 
                src="/images/domain-driven-design.png" 
                alt="Featured post image"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-primary bg-opacity-10 text-primary px-2.5 py-0.5 rounded-full text-xs">.NET</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Domain Driven Design Trong .NET: Từ Tư Duy Đến Triển Khai</h3>
                <p className="text-gray-600 text-sm mb-3">Tìm hiểu Domain Driven Design (DDD) trong .NET với hướng dẫn chi tiết từ tư duy kiến trúc đến...</p>
                <Link href="/blog/building-scalable-dotnet-applications" className="text-primary hover:underline text-sm">Đọc thêm →</Link>
              </div>
            </AnimatedSection>

            {/* Featured Post 2 */}
            {/* <AnimatedSection 
              whileInView={{ opacity: 1, y: 0 }}
              delay={0.3}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 max-w-sm mx-auto"
            >
              <Image 
                src="https://via.placeholder.com/400x250" 
                alt="Featured post image"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-primary bg-opacity-10 text-primary px-2.5 py-0.5 rounded-full text-xs">Architecture</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Clean Architecture in Practice</h3>
                <p className="text-gray-600 text-sm mb-3">A comprehensive guide to implementing clean architecture in your
                  projects...</p>
                <Link href="/blog/clean-architecture-in-practice" className="text-primary hover:underline text-sm">Đọc thêm →</Link>
              </div>
            </AnimatedSection> */}

            {/* Featured Post 3 */}
            {/* <AnimatedSection 
              whileInView={{ opacity: 1, y: 0 }}
              delay={0.4}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 max-w-sm mx-auto"
            >
              <Image 
                src="https://via.placeholder.com/400x250" 
                alt="Featured post image"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-primary bg-opacity-10 text-primary px-2.5 py-0.5 rounded-full text-xs">DevOps</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">CI/CD Pipeline Optimization</h3>
                <p className="text-gray-600 text-sm mb-3">Tips and tricks for optimizing your CI/CD pipeline for faster
                  deployments...</p>
                <Link href="/blog/cicd-pipeline-optimization" className="text-primary hover:underline text-sm">Đọc thêm →</Link>
              </div>
            </AnimatedSection> */}
          </div>
          {/* View All Blogs Link */}
          <AnimatedSection 
            whileInView={{ opacity: 1, y: 0 }}
            delay={0.5}
            className="text-center mt-12"
          >
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group">
              <span className="text-lg font-medium">Tất cả bài viết</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                <FiArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
