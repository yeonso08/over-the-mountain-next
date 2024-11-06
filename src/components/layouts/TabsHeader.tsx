'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TabsHeader = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  const getMenuFromPath = (path: string): 'home' | 'schedule' => {
    if (path.startsWith('/schedule')) return 'schedule'
    return 'home'
  }

  const currentMenu = getMenuFromPath(pathname || '/')

  return (
    <div className="min-h-screen w-full">
      <div className="flex border-b">
        <div className="p-4">
          <Link
            href="/"
            passHref
            className={`text-lg ${
              currentMenu === 'home' ? 'font-bold' : 'font-normal'
            }`}
          >
            홈
          </Link>
        </div>
        <div className="p-4">
          <Link
            href="/schedule"
            passHref
            className={`text-lg ${
              currentMenu === 'schedule' ? 'font-bold' : 'font-normal'
            }`}
          >
            등산일정
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default TabsHeader
