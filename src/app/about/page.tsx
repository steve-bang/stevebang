import Link from 'next/link';
import {
  FaServer, FaCloud, FaLayerGroup, FaCheck,
  FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane,
} from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';

// ─── Metadata ────────────────────────────────────────────────────────────────
// E-E-A-T optimized: experience, expertise, authority in title + description

export const metadata: Metadata = {
  title: 'About Steve Bang | Backend .NET Developer & Software Architect',
  description:
    'Steve Bang is a Backend .NET Developer and Project Manager with 3+ years of experience building scalable microservices, cloud systems on Azure, and clean-architecture applications. Based in Ho Chi Minh City, available worldwide.',
  keywords:
    'Steve Bang, backend developer, .NET developer, software architect, ASP.NET Core, microservices, Azure, DevOps, clean architecture, Ho Chi Minh City, Vietnam',
  authors: [{ name: 'Steve Bang', url: 'https://www.steve-bang.com/about' }],
  alternates: {
    canonical: 'https://www.steve-bang.com/about',
  },
  openGraph: {
    title: 'About Steve Bang | Backend .NET Developer & Software Architect',
    description:
      'Steve Bang is a Backend .NET Developer and Project Manager with 3+ years building scalable systems using .NET, Azure, and microservices.',
    type: 'profile',
    url: 'https://www.steve-bang.com/about',
    siteName: 'Steve Bang',
    images: [{ url: '/images/about-og.jpg', width: 1200, height: 630, alt: 'Steve Bang – Backend Developer & Software Architect' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Steve Bang | Backend .NET Developer & Software Architect',
    description:
      'Steve Bang is a Backend .NET Developer and Project Manager with 3+ years building scalable systems using .NET, Azure, and microservices.',
    images: ['/images/about-twitter.jpg'],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

// ─── Page data ───────────────────────────────────────────────────────────────

const skills = [
  {
    category: 'Backend Development',
    icon: <FaServer />,
    items: ['.NET Core & ASP.NET', 'Microservices Architecture', 'RESTful APIs', 'SQL & NoSQL Databases'],
  },
  {
    category: 'DevOps & Cloud',
    icon: <FaCloud />,
    items: ['Azure Cloud Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    category: 'Software Architecture',
    icon: <FaLayerGroup />,
    items: ['Clean Architecture', 'Domain-Driven Design', 'SOLID Principles', 'Design Patterns'],
  },
];

const techStack = ['C#', '.NET', 'JavaScript', 'TypeScript', 'Next.js', 'Kubernetes', 'Azure', 'Docker', 'CI/CD'];

const experiences = [
  {
    title: 'Backend Developer & Project Manager',
    company: '1ByteSoftware',
    period: '2022 – Present',
    description:
      'Leading deployment of scalable backend systems using .NET Core and Azure. Spearheaded the migration of legacy monoliths to microservices architecture, improving system performance and long-term maintainability.',
    technologies: ['.NET Core', 'Microservices', 'Azure'],
  },
  {
    title: 'Fresher Backend Developer',
    company: 'R2S',
    period: '2021 – 2022',
    description:
      'Joined as a fresher and quickly contributed to backend development projects. Gained hands-on experience with ASP.NET, SQL Server, React, and Docker in a professional team environment.',
    technologies: ['ASP.NET', 'React', 'Docker'],
  },
];

const socialLinks = [
  { platform: 'GitHub', icon: <FaGithub />, url: 'https://github.com/steve-bang' },
  { platform: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/steve-bang-924ab6284' },
];

// ─── FAQ content — improves AI/GEO citation potential ────────────────────────

const faqs = [
  {
    question: 'What technologies does Steve Bang specialize in?',
    answer:
      'Steve Bang specializes in .NET Core, ASP.NET, microservices architecture, Azure cloud services, Docker, Kubernetes, and clean architecture patterns including Domain-Driven Design.',
  },
  {
    question: 'Is Steve Bang available for freelance or consulting work?',
    answer:
      'Yes. Steve Bang is available for freelance projects and full-time opportunities worldwide. He typically responds within 24 hours at mrsteve.bang@gmail.com.',
  },
  {
    question: 'How many years of experience does Steve Bang have?',
    answer:
      'Steve Bang has 3+ years of professional experience in backend development and project management, working with startups and established companies.',
  },
];

// ─── Structured data schemas ─────────────────────────────────────────────────

function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.steve-bang.com/about#person',
    name: 'Steve Bang',
    givenName: 'Steve',
    familyName: 'Bang',
    jobTitle: 'Backend Developer & Project Manager',
    description:
      'Passionate software engineer with 3+ years of experience building scalable backend systems using .NET Core, Azure, microservices, and clean architecture.',
    url: 'https://www.steve-bang.com/about',
    image: {
      '@type': 'ImageObject',
      url: 'https://www.steve-bang.com/images/logo.jpg',
      width: 256,
      height: 256,
    },
    email: 'mailto:mrsteve.bang@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'VN',
    },
    knowsAbout: skills.flatMap((s) => s.items),
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Backend Developer',
      occupationLocation: { '@type': 'Country', name: 'Vietnam' },
      skills: techStack.join(', '),
    },
    sameAs: socialLinks.map((l) => l.url),
    worksFor: {
      '@type': 'Organization',
      name: '1ByteSoftware',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.steve-bang.com/about',
    },
  };
}

function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.steve-bang.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.steve-bang.com/about' },
    ],
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <>
      {/* Structured data — Person + FAQ + Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300"
        aria-label="About Steve Bang"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="Steve Bang" />
        <meta itemProp="email" content="mrsteve.bang@gmail.com" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Avatar */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                    <Image
                      src="/images/logo.jpg"
                      alt="Steve Bang – Backend .NET Developer and Software Architect profile photo"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                      itemProp="image"
                    />
                  </div>
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 py-2 rounded-full shadow-md">
                  <span className="font-semibold text-sm text-primary dark:text-purple-400">3+ Years Exp</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:w-2/3 text-center md:text-left">

              {/* SEO-rich h1: primary keyword front-loaded */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-50 leading-tight">
                <span
                  className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
                  itemProp="jobTitle"
                >
                  Backend .NET Developer
                </span>{' '}
                &amp; Project Manager
              </h1>

              {/* Subtitle with location — helps local/geo SEO */}
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-5 tracking-wide uppercase">
                Ho Chi Minh City, Vietnam · Available Worldwide
              </p>

              {/* Bio paragraphs — use natural language, keyword-rich but human */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed" itemProp="description">
                Hi, I&apos;m <strong className="text-gray-900 dark:text-gray-100">Steve Bang</strong> — a backend developer and project manager specialising in <strong>.NET Core</strong>, microservices, and Azure cloud systems. Over 3+ years I&apos;ve helped startups and scale-ups ship backend systems that serve millions of users, with a strong focus on clean architecture, maintainability, and performance.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                This blog is my way of giving back to the developer community — sharing lessons from real production systems, deep dives into .NET and DevOps, and practical software architecture guides.
              </p>

              {/* Tech skill pills */}
              <div className="mb-8">
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Core Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 dark:bg-purple-500/15 text-primary dark:text-purple-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="/resume.pdf"
                  download
                  aria-label="Download Steve Bang's resume PDF"
                  className="bg-purple-600 dark:bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors font-medium text-sm"
                >
                  Download Resume
                </Link>
                <Link
                  href="#contact"
                  aria-label="Contact Steve Bang"
                  className="border-2 border-primary dark:border-purple-500 text-primary dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors font-medium text-sm"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="experience-heading"
            className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-gray-50"
          >
            Professional Journey
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            3+ years building production-grade backend systems across startups and product companies.
          </p>

          <div className="max-w-3xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-purple-300 dark:to-purple-800" aria-hidden="true" />
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-primary dark:bg-purple-500 ring-2 ring-white dark:ring-gray-900" aria-hidden="true" />

                <article
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200"
                  itemScope
                  itemType="https://schema.org/OrganizationRole"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100" itemProp="roleName">
                        {exp.title}
                      </h3>
                      <p className="text-primary dark:text-purple-400 font-medium text-sm" itemProp="memberOf">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 bg-primary/10 dark:bg-purple-500/15 text-primary dark:text-purple-400 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section
        className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="skills-heading"
            className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-gray-50"
          >
            Technical Expertise
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Specialised in backend systems, cloud infrastructure, and clean software design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-primary/10 dark:bg-purple-500/15 rounded-lg flex items-center justify-center mb-4">
                  {React.cloneElement(skill.icon, { className: 'w-5 h-5 text-primary dark:text-purple-400' })}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FaCheck className="w-3.5 h-3.5 text-primary dark:text-purple-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — boosts AI/GEO citation potential ───────────── */}
      <section
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-gray-50"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Common questions about my background, services, and availability.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl p-6"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-start gap-2" itemProp="name">
                  <span className="text-primary dark:text-purple-400 mt-0.5 shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-5" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="contact-heading"
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50"
            >
              Let&apos;s Connect
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* Contact form */}
            <div className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-8 shadow-sm dark:shadow-gray-900/40">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Send a message</h3>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        required
                        className="w-full px-4 py-2.5 rounded-lg text-sm border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-purple-500/40 focus:border-primary dark:focus:border-purple-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-purple-500/40 focus:border-primary dark:focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-purple-500/40 focus:border-primary dark:focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Send message to Steve Bang"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-3.5 overflow-hidden font-medium text-sm transition duration-300 ease-out rounded-lg bg-primary dark:bg-purple-700 text-white hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 shadow-sm"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-purple-700 group-hover:translate-x-0 ease">
                    <FaPaperPlane className="w-5 h-5" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                    Send Message
                  </span>
                  <span className="relative invisible">Send Message</span>
                </button>
              </form>
            </div>

            {/* Right column */}
            <div className="space-y-6">

              {/* Direct contact */}
              <div className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-8 shadow-sm dark:shadow-gray-900/40">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Direct Contact</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: <FaEnvelope className="w-5 h-5 text-primary dark:text-purple-400" />,
                      label: 'Email',
                      content: (
                        <>
                          <a href="mailto:mrsteve.bang@gmail.com" className="text-primary dark:text-purple-400 hover:underline underline-offset-2 text-sm" itemProp="email">
                            mrsteve.bang@gmail.com
                          </a>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Responds within 24 hours</p>
                        </>
                      ),
                    },
                    {
                      icon: <FaMapMarkerAlt className="w-5 h-5 text-primary dark:text-purple-400" />,
                      label: 'Location',
                      content: (
                        <>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">Ho Chi Minh City, Vietnam</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Remote — working in your timezone</p>
                        </>
                      ),
                    },
                  ].map(({ icon, label, content }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 dark:bg-purple-500/15 rounded-xl flex items-center justify-center shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-8 shadow-sm dark:shadow-gray-900/40">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Steve Bang on ${social.platform}`}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/60 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-purple-500 hover:text-primary dark:hover:text-purple-400 text-gray-600 dark:text-gray-300 transition-all text-sm font-medium group"
                    >
                      {React.cloneElement(social.icon, { className: 'w-4 h-4 group-hover:text-primary dark:group-hover:text-purple-400 transition-colors' })}
                      {social.platform}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 shadow-sm dark:shadow-gray-900/40">
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Available for opportunities</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Open to freelance projects and full-time roles. Response time:{' '}
                  <span className="font-semibold text-primary dark:text-purple-400">within 24 hours</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;