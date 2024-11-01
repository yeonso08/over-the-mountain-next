'use client'

import { ReactNode, useState } from 'react'

const TabsHeader = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<'home' | 'schedule'>('home') // 'home'과 'schedule' 중 하나로 타입 지정

  const handleMenuClick = (selectedMenu: 'home' | 'schedule') => {
    setMenu(selectedMenu)
  }

  return (
    <div className="min-h-screen w-full">
      <div className="flex border-b">
        <div className="p-4">
          <button
            onClick={() => handleMenuClick('home')}
            className={`text-lg ${
              menu === 'home' ? 'font-bold' : 'font-normal'
            }`}
          >
            홈
          </button>
        </div>
        <div className="p-4">
          <button
            onClick={() => handleMenuClick('schedule')}
            className={`text-lg ${
              menu === 'schedule' ? 'font-bold' : 'font-normal'
            }`}
          >
            등산일정
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default TabsHeader
