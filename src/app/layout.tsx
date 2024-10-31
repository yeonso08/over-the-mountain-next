import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen bg-green-100 antialiased`}
      >
        <div className="mx-auto flex ">
          <div className="min-w-[550px] bg-white">{children}</div>
        </div>
      </body>
    </html>
  )
}
