import { MainMenu, StartMenu } from './Menu/menu.js'
import fetchData from './Processor/fetchingData.js'
import { addData, createLocalJson } from './Processor/jsonFile.js'

async function run() {
  const mainMenuResult = await MainMenu()
  console.log(mainMenuResult)

  if (mainMenuResult === 'Start') {
    const startMenuResult = await StartMenu()
    console.log('Fetching Data...')

    const data = await fetchData(
      startMenuResult.url,
      startMenuResult.endpointInput,
      startMenuResult.jsonPath
    )

    if (startMenuResult.jsonChoice === 'Create a local Json File') {
      createLocalJson(data)
    } else {
      addData(startMenuResult.jsonPath, data)
    }

  } else if (mainMenuResult === 'Exit') {
    console.log('Thanks for using POSTY!')
  }
}


run()