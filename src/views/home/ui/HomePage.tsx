import { MountainCard } from '@/features/home/ui/MountainCard'
import { ToggleButton } from '@/features/home/ui/ToggleButton'

export function HomePage() {
  return (
    <div className="space-y-4 p-4">
      <ToggleButton />
      <MountainCard />
    </div>
  )
}
