'use client'

import { Button } from '@/shared/ui/button'
import { useState } from 'react'

export const ToggleButton = () => {
  const [selected, setSelected] = useState<string>('')

  const buttons = ['산 아래 산', '산 중의 산', '산 너머 산']

  return (
    <div className="space-x-4">
      {buttons.map((buttonText) => (
        <Button
          key={buttonText}
          variant={selected === buttonText ? 'default' : 'outline'}
          className={`rounded-full ${
            selected === buttonText
              ? 'bg-primary text-primary-foreground'
              : 'border-primary text-primary'
          }`}
          onClick={() => setSelected(buttonText)}
        >
          {buttonText}
        </Button>
      ))}
    </div>
  )
}
