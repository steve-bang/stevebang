import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#512BD4',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#374151',
            h2: {
              color: '#1a1a1a',
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '700',
            },
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.75',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: '#1a1a1a',
              borderRadius: '0.5rem',
              padding: '1rem',
              margin: '1.5rem 0',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeft: '4px solid #512BD4',
              paddingLeft: '1rem',
              margin: '1.5rem 0',
              fontStyle: 'italic',
              color: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 