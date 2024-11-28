import { getMountainList } from '@/features/home/api/mountainList'
import { FilteredMountains } from '@/features/home/ui/FilteredMountains'

export async function MountainList() {
  const mountains = await getMountainList()

  return (
    <div className="flex flex-col gap-4">
      <FilteredMountains initialMountains={mountains} />
    </div>
  )
}
