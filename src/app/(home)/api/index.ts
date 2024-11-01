import axiosInstance from '@/api/axiosInstance'

export const getMountainList = async () => {
  const response = await axiosInstance.get('/main/list')
  return response.data
}
