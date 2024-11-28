'use client'

import { Mountain } from '@/entities/mountain/model/types'
import { useState } from 'react'
import { MountainLevel } from '@/features/home/model/types'
import { ToggleButton } from '@/features/home/ui/ToggleButton'
import { MountainCard } from '@/features/home/ui/MountainCard'

interface FilteredMountainsProps {
  initialMountains: Mountain[]
}

export function FilteredMountains({
  initialMountains,
}: FilteredMountainsProps) {
  const [selectedLevel, setSelectedLevel] = useState<MountainLevel>('')

  const filteredMountains = initialMountains.filter((mountain) => {
    switch (selectedLevel) {
      case '산 아래 산':
        return mountain.height <= 300
      case '산 중의 산':
        return mountain.height > 300 && mountain.height <= 400
      case '산 너머 산':
        return mountain.height > 500
      default:
        return true
    }
  })

  return (
    <>
      <ToggleButton selected={selectedLevel} onSelect={setSelectedLevel} />
      {filteredMountains.map((mountain) => (
        <MountainCard key={mountain.mntiListNo} mountain={mountain} />
      ))}
    </>
  )
}
