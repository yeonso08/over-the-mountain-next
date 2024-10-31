import TabsHeader from '@/components/layouts/TabsHeader'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <TabsHeader>{children}</TabsHeader>
}

export default HomeLayout
