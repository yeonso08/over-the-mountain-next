import { createServerApi } from '@/shared/api/base'
import { Mountain } from '@/entities/mountain/model/types'

export async function getMountainList() {
  const api = await createServerApi()
  const response = await api.get<Mountain[]>('main/list')
  return response.data
}
