import Link from 'next/link';
import { FaServer, FaCloud, FaLayerGroup, FaCheck, FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'About Me | Steve Bang - Backend Developer - Project Manager',
  description: 'Learn about Steve Bang, a passionate software engineer with 3+ years of experience in JavaScript, React, Node.js, and .NET technologies.',
  keywords: 'software engineer, web developer, .NET expert, React developer, technical leader, Steve Bang, SteveBang, Steve',
  openGraph: {
    title: 'About Me | Steve Bang',
    description: 'Learn about Steve Bang, a passionate software engineer with 3+ years of experience',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Steve Bang Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me | Steve Bang',
    description: 'Learn about Steve Bang, a passionate software engineer with 3+ years of experience',
    images: ['/images/about-twitter.jpg'],
  },
};

const AboutPage = () => {
  const skills = [
    { category: 'Backend Development', icon: <FaServer />, items: ['.NET Core & ASP.NET', 'Microservices Architecture', 'RESTful APIs', 'SQL & NoSQL Databases'] },
    { category: 'DevOps & Cloud', icon: <FaCloud />, items: ['Azure Cloud Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'] },
    { category: 'Software Architecture', icon: <FaLayerGroup />, items: ['Clean Architecture', 'Domain-Driven Design', 'SOLID Principles', 'Design Patterns'] },
  ];

  const experiences = [
    {
      title: 'Backend Developer - Project Manager',
      company: '1ByteSoftware',
      period: '2022 - Present',
      description: 'Deployment of scalable backend systems using .NET Core and Azure. Led the migration of legacy systems to microservices architecture, improving performance and maintainability.',
      technologies: ['.NET Core', 'Microservices', 'Azure'],
    },
    {
      title: 'Fresher - Backend Developer',
      company: 'R2S',
      period: '2021 - 2022',
      description: 'Joined as a fresher, quickly adapted to the team and contributed to backend development projects. Gained hands-on experience with ASP.NET and SQL Server.',
      technologies: ['ASP.NET', 'React', 'Docker'],
    },
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: <FaGithub />, url: 'https://github.com/steve-bang' },
    //{ platform: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/sangdotnet' },
    { platform: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/steve-bang-924ab6284' },
  ];

  const generatePersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Steve Bang",
    "jobTitle": "Software Engineer & Technical Leader",
    "url": "https://steve-bang.com/about",
    "sameAs": socialLinks.map(link => link.url),
    "description": "Passionate software engineer with over 3 years of experience building web applications and solving complex technical challenges.",
    "image": "/images/logo.jpg",
    "email": "mailto:mrsteve.bang@gmail.com",
    "knowsAbout": skills.flatMap(skill => skill.items)
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
              <div className="relative" itemScope itemType="https://schema.org/ImageObject">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary-light to-primary overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src="/images/logo.jpg"
                    alt="Steve Bang Profile Picture"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                    itemProp="contentUrl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                  <span className="font-medium text-primary">3+ Years Exp</span>
                </div>
                <meta itemProp="description" content="Professional profile picture of Steve Bang" />
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#512BD4] to-[#7C3AED] bg-clip-text text-transparent" itemProp="jobTitle">Backend Developer</span> & Project Manager
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6" itemProp="description">
                Hello! I&apos;m a passionate software engineer with over 3 years of experience building web applications and solving complex technical challenges. I specialize in JavaScript ecosystems, including .NET, React, and Node.js, and have a strong focus on creating scalable, maintainable, and high-performance software solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Throughout my career, I&apos;ve worked with startups and established companies, contributing to projects that serve millions of users. This blog is my way of giving back to the developer community by sharing the lessons I&apos;ve learned along the way.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {[ 'C#', '.NET','JavaScript', 'TypeScript', 'NextJS', 'K8S', 'Azure', 'Docker', 'CI/CD'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-gray-700 text-primary dark:text-purple-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/resume.pdf"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                  aria-label="Download Resume"
                  download
                >
                  Download Resume
                </Link>
                <Link
                  href="#contact"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-purple-600 transition-colors"
                  aria-label="Contact Me"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-primary" aria-hidden="true"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary bg-opacity-10 text-primary dark:text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-md">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  {React.cloneElement(skill.icon, { className: 'w-6 h-6 text-primary' })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaCheck className="w-4 h-4 text-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:bg-gray-800 dark:text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:bg-gray-800 dark:text-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:bg-gray-800 dark:text-white"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:bg-gray-800 dark:text-white"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-[#512BD4] text-white hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#512BD4] dark:focus:ring-offset-gray-800"
                  aria-label="Send message"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#7C3AED] group-hover:translate-x-0 ease">
                    <FaPaperPlane className="w-6 h-6" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Send Message</span>
                  <span className="relative invisible">Send Message</span>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                      <a href="mailto:mrsteve.bang@gmail.com" className="text-primary hover:underline" itemProp="email">mrsteve.bang@gmail.com</a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">I&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Remote - Available Worldwide</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Working in your timezone</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Connect on Social</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.platform}
                      href={social.url}
                      className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-600 hover:bg-primary hover:bg-opacity-10 transition-colors group"
                      aria-label={`Connect on ${social.platform}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {React.cloneElement(social.icon, { className: 'w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary' })}
                      <span className="text-sm font-medium mt-2 text-gray-600 dark:text-gray-300 group-hover:text-primary">{social.platform}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Availability</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600 dark:text-gray-300">Available for freelance projects and full-time opportunities</p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Response time:</span>
                  <span className="text-sm font-medium text-primary">Usually within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;