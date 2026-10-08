import type { Metadata } from 'next'
import { Bricolage_Grotesque, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { PageLoader } from '@/components/page-loader'

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Muazam.dev — Malik Muazzam Ali, Web Developer',
  description:
    'Portfolio of Malik Muazzam Ali — web developer focused on modern web technologies, clean interfaces, and continuous learning.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <PageLoader />
        {children}
          <Toaster 
            position="top-right"
            richColors
            theme="dark"
            toastOptions={{
              style: {
                background: 'rgba(39, 39, 42, 0.95)',
                border: '1px solid rgba(63, 63, 70, 0.5)',
                color: 'white',
              },
            }}
          />
      </body>
    </html>
  )
}
