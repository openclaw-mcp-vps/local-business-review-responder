import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReviewReply AI — Respond to Google & Yelp Reviews Professionally',
  description: 'AI-powered review response tool for local businesses. Automatically generate professional, on-brand replies to Google and Yelp reviews.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fabacee1-d1f5-4b3e-9094-2afc31e830b3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
