# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal technical blog ("Steve Bang", www.steve-bang.com) about .NET/backend topics. Next.js 15 App Router + React 19 + Tailwind CSS v4, TypeScript. Content is file-based MDX; there is no database or CMS.

## Commands

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm start       # serve production build
npm run lint    # next lint (eslint.config.mjs)
```

There is no test suite configured. Path alias: `@/*` → `src/*`.

## Architecture

- **Content** lives in `content/blog/<slug>.mdx`; the filename (minus `.mdx`) is the URL slug and the cover image is referenced from `public/images/`. Frontmatter fields: `title`, `publishedAt` (YYYY-MM-DD), `description`, `keywords` (array — doubles as tags), `author`, `readingTime`, `image`, optional `updatedAt` and `schemaJsonLD`.
- **`src/lib/mdx.ts`** is the single data layer: reads the `content/blog` directory with `fs` + `gray-matter` and exposes `getBlogPosts`, `getAllBlogPostsPublished`, `getBlogPost`, and tag/author/search filters. Note `getBlogPosts` returns *all* posts including future-dated ones; use `getAllBlogPostsPublished` when future-dated posts must be hidden. `BlogPost` type is in `src/types/index.ts`.
- **Rendering**: `src/app/blog/[slug]/page.tsx` renders post bodies with `MDXRemote` from `next-mdx-remote/rsc` (server component) plus remark/rehype plugins, and builds per-post SEO metadata (canonical URL, OpenGraph, Twitter, JSON-LD). `src/lib/extract-heading.ts` + `TabsOfContents` provide the table of contents.
- **Tags** are derived from each post's `keywords` (`src/app/tags/`).
- **Search**: client-side `SearchInput`/`SearchModal` call `GET /api/posts?keywords=...` (`src/app/api/posts/route.ts`), which filters by title/description.
- **SEO routes**: `sitemap.xml`, `sitemap-blog.xml`, `sitemap-static.xml` (route handlers) and `robots.ts`; shared URL/XML helpers are in `src/lib/sitemap.ts`. Base URL comes from `NEXT_PUBLIC_SITE_URL`, defaulting to `https://www.steve-bang.com`. The blog page metadata hardcodes the same domain.
- **Monetization/analytics components**: `GoogleAdSense`, `GoogleAdsBanner`, `Buymeacoffee`, and `@next/third-parties` analytics, configured via `NEXT_PUBLIC_*` env vars in `.env` (domain, Google site verification, Analytics, AdSense, Buy Me a Coffee URL). Remote images are only allowed from `cdn.buymeacoffee.com` (`next.config.ts`).

## Notes

- `TASK.md` and `prompt.ai` are an unrelated .NET (CoC Vibe Coding) project-structure template/prompt, not documentation of this repo.
- `.env` is committed to the repo; avoid adding secrets to it.
