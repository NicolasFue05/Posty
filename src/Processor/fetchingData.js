// Create a function that receive the URL, the Enpoint, the time and the json file and fetch the API


// Each minute, ask for the new endpoint, if theres no endpoint, send request in the same URL
async function fetchData(URL, endpoint = '', jsonPath = '') {

  try {
    const response = await fetch(`${URL}${endpoint}`)

    if (!response.ok) {
      throw new Error(`ERROR! \n Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('✔ Data fetched correctly')
    return data

  } catch (e) {
    console.error(`Fetch Error: ${e.message}`)
    return null
  }  
}

export default fetchData