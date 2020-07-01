export async function queryData(q) {
  const response = await fetch('mock-data.json')
  const data = await response.json()
  return data
}