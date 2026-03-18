import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Steve Bang",
  description:
    "Terms and Conditions for Steve Bang blog. Read the rules governing your use of this website, including content ownership, disclaimer, and limitations of liability.",
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
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing and using <strong>{SITE_NAME}</strong> ({SITE_URL}), you
        accept and agree to be bound by these Terms and Conditions and our{" "}
        <a
          href="/privacy-policy"
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
        >
          Privacy Policy
        </a>
        . If you do not agree to these terms, please discontinue use of this
        website immediately. We reserve the right to update these terms at any
        time, and continued use of the site constitutes acceptance of any
        changes.
      </p>
    ),
  },
  {
    id: "description",
    title: "2. Description of Service",
    content: (
      <>
        <p>
          {SITE_NAME} is a personal blog focused on software engineering,
          backend development, and related technical topics. The website
          provides:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
          <li>Educational articles, tutorials, and technical guides</li>
          <li>Code examples and open-source project references</li>
          <li>Personal opinions and professional insights on software development</li>
          <li>A newsletter for subscribers who opt in</li>
          <li>A contact form for inquiries and collaboration requests</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content: (
      <>
        <p>
          All content on this website — including but not limited to articles,
          blog posts, code snippets, images, graphics, and design — is the
          intellectual property of <strong>{SITE_NAME}</strong> unless
          otherwise stated.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: "✅",
              label: "Permitted",
              items: [
                "Read and share links to articles",
                "Quote short excerpts with attribution",
                "Use code snippets for personal/commercial projects",
                "Share on social media with credit",
              ],
              style:
                "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/25",
              labelStyle: "text-emerald-700 dark:text-emerald-400",
            },
            {
              icon: "❌",
              label: "Not Permitted",
              items: [
                "Reproduce full articles without permission",
                "Use content for commercial resale",
                "Remove attribution or copyright notices",
                "Scrape content for AI training datasets",
              ],
              style:
                "bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/25",
              labelStyle: "text-red-700 dark:text-red-400",
            },
          ].map((block) => (
            <div
              key={block.label}
              className={`p-4 rounded-lg border ${block.style}`}
            >
              <p
                className={`text-sm font-semibold mb-2 ${block.labelStyle}`}
              >
                {block.icon} {block.label}
              </p>
              <ul className="space-y-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "user-conduct",
    title: "4. User Conduct",
    content: (
      <>
        <p>When using this website, you agree not to:</p>
        <ul className="mt-3 list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-400">
          <li>
            Use the site for any unlawful purpose or in violation of any
            applicable laws or regulations
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the website or
            its infrastructure
          </li>
          <li>
            Submit spam, malicious content, or misleading information through
            the contact form
          </li>
          <li>
            Engage in any activity that could disrupt or impair the functioning
            of the website
          </li>
          <li>
            Use automated bots or scrapers to extract content from the website
            without prior written consent
          </li>
          <li>
            Impersonate the site owner or misrepresent your affiliation with
            this website
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "5. Disclaimer of Warranties",
    content: (
      <>
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/25">
          <p className="text-amber-800 dark:text-amber-300 text-sm font-semibold mb-1">
            ⚠️ Important Disclaimer
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            All content on this website is provided for informational and
            educational purposes only. It does not constitute professional
            advice of any kind.
          </p>
        </div>
        <p className="mt-4">
          The information on this website is provided &quot;as is&quot; without
          warranty of any kind, express or implied. While we strive to keep
          content accurate and up to date, we make no representations or
          warranties regarding the completeness, accuracy, reliability, or
          suitability of any information. Technical articles and code examples
          reflect the author&apos;s personal experience and may not be
          applicable to every situation.
        </p>
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "6. Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by law, <strong>{SITE_NAME}</strong>{" "}
        shall not be liable for any direct, indirect, incidental, special,
        consequential, or punitive damages arising from your use of, or
        inability to use, this website or its content. This includes, without
        limitation, any errors or omissions in content, loss of data, loss of
        profits, or any damage resulting from reliance on information obtained
        from this website.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "7. Third-Party Links & Services",
    content: (
      <>
        <p>
          This website may contain links to external websites and third-party
          services for your convenience. These include, but are not limited to:
        </p>
        <ul className="mt-3 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Google AdSense
            </strong>{" "}
            — for displaying advertisements
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              GitHub
            </strong>{" "}
            — for open-source code repositories
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              Buy Me a Coffee
            </strong>{" "}
            — for voluntary support contributions
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-300">
              External documentation and references
            </strong>{" "}
            linked within articles
          </li>
        </ul>
        <p className="mt-4">
          We have no control over the content, privacy policies, or practices
          of third-party sites and accept no responsibility for them. We
          encourage you to review the privacy policies and terms of any
          third-party services you visit.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "8. Advertising",
    content: (
      <p>
        This website uses <strong>Google AdSense</strong> to display
        advertisements. Ads are served by Google and may be personalized based
        on your browsing history and interests. Revenue from advertising helps
        support the continued operation of this blog. We do not endorse any
        products or services advertised on this site. For more details on how
        advertising data is handled, please refer to our{" "}
        <a
          href="/privacy-policy#google-adsense"
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
        >
          Privacy Policy — Google AdSense section
        </a>
        .
      </p>
    ),
  },
  {
    id: "newsletter",
    title: "9. Newsletter & Communications",
    content: (
      <>
        <p>
          By subscribing to the {SITE_NAME} newsletter, you consent to
          receiving periodic emails about new blog posts, tutorials, and
          software engineering content. You can unsubscribe at any time by
          clicking the unsubscribe link in any email or by contacting us
          directly.
        </p>
        <p className="mt-3">
          We will never sell, share, or rent your email address to third
          parties without your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "10. Privacy",
    content: (
      <p>
        Your use of this website is also governed by our{" "}
        <a
          href="/privacy-policy"
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
        >
          Privacy Policy
        </a>
        , which is incorporated into these Terms and Conditions by reference.
        Please review the Privacy Policy to understand our practices regarding
        the collection and use of your personal information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to Terms",
    content: (
      <p>
        We reserve the right to modify these Terms and Conditions at any time.
        Changes will be effective immediately upon posting to the website. The
        &quot;Last Updated&quot; date at the top of this page will reflect the
        most recent revision. We encourage you to review these terms
        periodically. Your continued use of the website after any changes
        constitutes your acceptance of the new terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "12. Governing Law",
    content: (
      <p>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of Vietnam. Any disputes arising from your use
        of this website shall be subject to the exclusive jurisdiction of the
        courts located in Ho Chi Minh City, Vietnam.
      </p>
    ),
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: (
      <>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us:
        </p>
        <div className="mt-4 p-4 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 space-y-2">
          <p className="text-slate-800 dark:text-slate-300 font-semibold">
            {SITE_NAME}
          </p>
          <p className="text-slate-500 dark:text-slate-400">
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

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      {/* ── Hero ── */}
      <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-5">
            <a
              href="/"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-slate-600 dark:text-slate-400">
              Terms &amp; Conditions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Last updated:{" "}
            <time className="text-slate-700 dark:text-slate-300 font-medium">
              {LAST_UPDATED}
            </time>
          </p>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Please read these Terms and Conditions carefully before using{" "}
            <strong className="text-slate-700 dark:text-slate-300">
              {SITE_NAME}
            </strong>
            . By accessing this website, you agree to be bound by these terms.
          </p>

          {/* Quick links to related policies */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/privacy-policy"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100
                dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30 dark:hover:bg-blue-500/20
                transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M8 1.5A6.5 6.5 0 1014.5 8 6.508 6.508 0 008 1.5zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM6.75 11.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-.75v-3.5a.75.75 0 00-.75-.75h-.75a.75.75 0 000 1.5h.25v2.75h-.75z" />
              </svg>
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200
                dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 dark:hover:bg-slate-700
                transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M1.75 2A1.75 1.75 0 000 3.75v8.5C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM1.5 3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v.63l-6.5 3.467L1.5 4.38v-.63zm0 1.845l5.63 3.003a1 1 0 00.94 0L13.5 5.595V12.25a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V5.595z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Sticky TOC sidebar ── */}
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

          {/* ── Main content ── */}
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

            {/* ── Footer note ── */}
            <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-500 text-center">
                These Terms &amp; Conditions were last updated on{" "}
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
                , you agree to these terms.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href="/contact"
                  className="text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href="/"
                  className="text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}