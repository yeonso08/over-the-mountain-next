export const getMountainList = async () => {
  const API_URL = process.env.NEXT_PUBLIC_APP_API_URL ?? ''
  console.log(`Fetching mountain list from: ${API_URL}/main/list`)

  const response = await fetch(`${API_URL}/main/list`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`Error fetching mountain list: ${response.statusText}`)
  }

  const data = await response.json()
  console.log('Fetched mountain list successfully:', data)
  return data
}
