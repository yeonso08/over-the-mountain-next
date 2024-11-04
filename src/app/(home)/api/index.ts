export const getMountainList = async () => {
  const API_URL = process.env.NEXT_PUBLIC_APP_API_URL ?? ''
  const response = await fetch(`${API_URL}/main/list`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`Error fetching mountain list: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}
