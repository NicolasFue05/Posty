import { MainMenu, StartMenu } from './Menu/menu.js'
import fetchData from './Processor/fetchingData.js'
import getTime from './Processor/time.js'

async function run() {
  const mainMenuResult = await MainMenu()
  console.log(mainMenuResult)

  // If the mainresult is start show the startMenu
  if (mainMenuResult === 'Start') {
    const startMenuResult = await StartMenu()

    console.log('Fetching Data every...', startMenuResult.timeInput)
    await fetchData(startMenuResult.url, startMenuResult.endpoint, startMenuResult.endpointInput, startMenuResult.timeInput, startMenuResult.jsonPath)

    // Schedule repeated fetching
    setInterval(() => {
      fetchData(startMenuResult.url, startMenuResult.endpointInput, startMenuResult.timeInput, startMenuResult.jsonPath)
    }, getTime(startMenuResult.timeInput))


  } else if (mainMenuResult === 'Exit') {
    console.log('Tank\'s for using POSTY!')
  }
}

run()