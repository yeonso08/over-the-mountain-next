import Image from 'next/image'
import { Mountain } from '@/entities/mountain/model/types'

interface MountainCardProps {
  mountain: Mountain
}

export const MountainCard = ({ mountain }: MountainCardProps) => {
  return (
    <div className="max-w-[500px w-full">
      <div className="relative aspect-[5/3] w-full">
        <Image
          className="rounded object-cover"
          src={mountain.potoFile}
          alt={mountain.mntiName}
          fill
          sizes="(max-width: 500px) 100vw, 500px"
          priority
        />
      </div>
      <div className="flex gap-2">
        <p>{mountain.mntiName}</p>
        <p>{mountain.height}m</p>
      </div>
    </div>
  )
}
