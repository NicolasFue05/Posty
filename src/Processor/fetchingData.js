// Each minute, ask for the new endpoint, if theres no endpoint, send request in the same URL
export default async function fetchData(URL, endpoint = '') {
  try {
    const response = await fetch(`${URL}${endpoint}`)

    if (!response.ok) {
      throw new Error(`ERROR! \n Status: ${response.status}`)
    }

    console.log('✔ Fetching Data...')
    const data = await response.json()
    console.log('✔ Data fetched correctly')

    return data
  } catch (e) {
    if (e instanceof TypeError) {
      console.error(`❌ THE GIVEN API IS NOT AVAILABLE | ERROR: ${e.message}`)
    }
    return null
  }
}
