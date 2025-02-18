import { MainMenu, StartMenu } from './Menu/menu.js'
import fetchData from './Processor/fetchingData.js'

async function run() {
  const mainMenuResult = await MainMenu()
  console.log(mainMenuResult)

  if (mainMenuResult === 'Start') {
    const startMenuResult = await StartMenu()
    console.log('Fetching Data...')

    await fetchData(
      startMenuResult.url,
      startMenuResult.endpointInput,
      startMenuResult.jsonPath
    )

  } else if (mainMenuResult === 'Exit') {
    console.log('Thanks for using POSTY!')
  }
}


run()