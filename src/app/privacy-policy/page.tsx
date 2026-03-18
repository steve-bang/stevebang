import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Steve Bang",
  description:
    "Privacy Policy for Steve Bang blog. Learn how we collect, use, and protect your personal information, including our use of Google AdSense and analytics.",
};

const LAST_UPDATED = "December 12, 2025";
const SITE_NAME = "Steve Bang";
const SITE_URL = "https://www.steve-bang.com";
const CONTACT_EMAIL = "mrsteve.bang@gmail.com";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <p>
        Welcome to <strong>{SITE_NAME}</strong> ({SITE_URL}). This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website. Please read this policy
        carefully. If you disagree with its terms, please discontinue use of
        our site.
      </p>
    ),
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We may collect information about you in the following ways:</p>
        <h3 className="mt-4 mb-2 text-base font-semibold text-slate-800 dark:text-slate-200">
          2.1 Information You Provide
        </h3>
        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
          <li>
            Name and email address when you subscribe to our newsletter or
            contact us
          </li>
          <li>
            Any other information you voluntarily submit through contact forms
          </li>
        </ul>
        <h3 className="mt-4 mb-2 text-base font-semibold text-slate-800 dark:text-slate-200">
          2.2 Automatically Collected Information
        </h3>
        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
          <li>Device information: IP address, browser type, operating system</li>
          <li>
            Usage data: pages visited, time on site, referring URLs, clickstream
            data
          </li>
          <li>
            Cookies and similar tracking technologies (detailed in Section 5)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the collected information to:</p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
          <li>Operate, maintain, and improve our website</li>
          <li>Send newsletters and blog update emails (with your consent)</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>
            Display relevant advertisements through third-party ad networks
          </li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "google-adsense",
    title: "4. Google AdSense & Advertising",
    content: (
      <>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements on
          our website. Google AdSense is an advertising service provided by
          Google LLC.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-950/40 dark:border-blue-800/50">
          <p className="text-blue-700 dark:text-blue-300 text-sm font-medium mb-2">
            How Google AdSense works:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
            <li>
              Google uses cookies (including the DoubleClick cookie) to serve
              ads based on your prior visits to our site and other websites on
              the Internet
            </li>
            <li>
              Interest-based advertising allows Google to show you ads based on
              your browsing history
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads based on your visit to our and/or other
              sites on the Internet
            </li>
          </ul>
        </div>
        <p className="mt-4">
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
          >
            Google Ads Settings
          </a>{" "}
          or by visiting{" "}
          <a
            href="https://www.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
          >
            www.aboutads.info
          </a>
          . For more information on how Google uses data from our site, please
          visit{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
          >
            Google&apos;s Privacy & Terms
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to enhance
          your browsing experience. Cookies are small data files stored on your
          device.
        </p>
        <div className="mt-4 space-y-3">
          {[
            {
              name: "Essential Cookies",
              desc: "Required for the website to function properly. They cannot be disabled.",
              dotClass: "bg-green-500 dark:bg-green-400",
            },
            {
              name: "Analytics Cookies",
              desc: "Help us understand how visitors interact with our website (e.g., Google Analytics).",
              dotClass: "bg-yellow-500 dark:bg-yellow-400",
            },
            {
              name: "Advertising Cookies",
              desc: "Used by Google AdSense and partners to deliver personalized ads.",
              dotClass: "bg-blue-500 dark:bg-blue-400",
            },
          ].map((cookie) => (
            <div
              key={cookie.name}
              className="flex gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50"
            >
              <span
                className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${cookie.dotClass}`}
              />
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {cookie.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {cookie.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4">
          You can control or delete cookies through your browser settings.
          However, disabling certain cookies may affect the functionality of our
          website.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: (
      <>
        <p>
          Our website may use the following third-party services that have their
          own privacy policies:
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 dark:bg-slate-800/80 dark:border-slate-700/50">
                <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">
                  Service
                </th>
                <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">
                  Purpose
                </th>
                <th className="text-left px-4 py-3 text-slate-700 dark:text-slate-300 font-semibold">
                  Privacy Policy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/30">
              {[
                {
                  name: "Google AdSense",
                  purpose: "Advertisement",
                  url: "https://policies.google.com/privacy",
                },
                {
                  name: "Google Analytics",
                  purpose: "Usage Analytics",
                  url: "https://policies.google.com/privacy",
                },
                {
                  name: "Buy Me a Coffee",
                  purpose: "Donation Platform",
                  url: "https://www.buymeacoffee.com/privacy-policy",
                },
              ].map((service) => (
                <tr
                  key={service.name}
                  className="bg-white hover:bg-slate-50 dark:bg-slate-900/30 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-800 dark:text-slate-200 font-medium">
                    {service.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {service.purpose}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
                    >
                      View Policy
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: (
      <p>
        We retain personal data only for as long as necessary to fulfill the
        purposes outlined in this Privacy Policy, or as required by law. Contact
        form submissions and newsletter subscriptions are retained until you
        request deletion. Analytics data is retained for up to 26 months as per
        Google Analytics default settings.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: (
      <>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Right to Access
            </strong>{" "}
            — Request a copy of the personal data we hold about you
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Right to Rectification
            </strong>{" "}
            — Request correction of inaccurate data
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Right to Erasure
            </strong>{" "}
            — Request deletion of your personal data
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Right to Withdraw Consent
            </strong>{" "}
            — Unsubscribe from newsletters at any time
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Right to Opt-out of Advertising
            </strong>{" "}
            — Opt out of personalized ads via Google Ads Settings
          </li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, please contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "9. Children's Privacy",
    content: (
      <p>
        Our website is not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13. If you
        believe a child has provided us with personal data, please contact us
        immediately and we will take steps to remove such information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by updating the &quot;Last Updated&quot; date at the top
        of this page. We encourage you to review this Privacy Policy periodically
        to stay informed about how we protect your information. Continued use of
        the website after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy
          Policy, please contact us:
        </p>
        <div className="mt-4 p-4 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 space-y-2">
          <p className="text-slate-800 dark:text-slate-300">
            <strong>Steve Bang</strong>
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Ho Chi Minh City, Vietnam
          </p>
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            <a
              href={SITE_URL}
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
            >
              {SITE_URL}
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-8 pb-20 min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      {/* Hero */}
      <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-4">
            <a
              href="/"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-slate-600 dark:text-slate-400">
              Privacy Policy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Last updated:{" "}
            <time className="text-slate-700 dark:text-slate-300 font-medium">
              {LAST_UPDATED}
            </time>
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Your privacy matters. This policy explains what information we
            collect, how we use it, and the choices you have — including our use
            of Google AdSense for advertising.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Table of Contents — sticky sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                On this page
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors py-1 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`pb-10 leading-relaxed ${
                    index < sections.length - 1
                      ? "border-b border-slate-100 dark:border-slate-800"
                      : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 dark:text-slate-400 space-y-3 [&_strong]:text-slate-800 dark:[&_strong]:text-slate-200 [&_p]:leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-500">
                This Privacy Policy was last updated on{" "}
                <strong className="text-slate-700 dark:text-slate-400">
                  {LAST_UPDATED}
                </strong>
                . By using{" "}
                <a
                  href={SITE_URL}
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {SITE_URL}
                </a>
                , you agree to the terms described in this policy.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}