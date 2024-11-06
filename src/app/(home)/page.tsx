import MountainListCard from '@/app/(home)/components/mountainListCard'
import { Suspense } from 'react'
import Loading from '@/app/(home)/loading'

export default function Home() {
  return (
    <div className="p-4 ">
      <div className="mb-4 h-24 bg-green-300">컨텐츠내용</div>
      <Suspense fallback={<Loading />}>
        <MountainListCard />
      </Suspense>
    </div>
  )
}
