'use client'
import { getMountainList } from '@/app/(home)/api'
import useSWR from 'swr'

export default function Home() {
  const { data, error, isLoading } = useSWR('/main/list', getMountainList, {
    revalidateOnFocus: false,
  })

  return <div>home</div>
}
