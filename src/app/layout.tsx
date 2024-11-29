import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/shared/styles/globals.css'

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
  title: 'My App',
  description: 'Description of my app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen justify-center bg-transparent antialiased md:bg-green-100 lg:pl-[50%]`}
      >
        <div className="min-h-screen w-full max-w-[550px] bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
