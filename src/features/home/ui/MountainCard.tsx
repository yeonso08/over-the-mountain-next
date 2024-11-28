import Image from 'next/image'
import { getMountainList } from '@/features/home/api/mountainList'

export async function MountainCard() {
  const mountains = await getMountainList()

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {mountains.map((mountain) => (
        <div key={mountain.mntiListNo} className="w-full max-w-[500px]">
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
          <div>
            <p>{mountain.mntiName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
