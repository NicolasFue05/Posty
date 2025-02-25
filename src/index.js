import { MainMenu, SettingsMenu, StartMenu } from './Menu/menu.js'
import { exitMessage } from './Menu/title.js'
import fetchData from './Processor/fetchingData.js'
import { addData, createLocalJson } from './Processor/jsonFile.js'
import { checkJsonPath } from './Processor/paths.js'

async function run() {
  try {
    const mainMenuResult = await MainMenu()
    console.log(mainMenuResult)

    if (mainMenuResult === 'Start') {
      const startMenuResult = await StartMenu()

      const data = await fetchData(
        startMenuResult.url,
        startMenuResult.endpointInput,
        startMenuResult.jsonPath
      )

      // if fetchData is null return a error message
      if (data === null) {
        return null
      }

      if (startMenuResult.jsonChoice === 'Create a local Json File') {
        createLocalJson(data)
      } else if (startMenuResult.jsonChoice === 'Give a path to the Json File') {
        addData(startMenuResult.jsonPath, data)
      } else {
        const jsonPath = await checkJsonPath()
        addData(jsonPath, data)
      }

    } else if (mainMenuResult === 'Exit') {
      exitMessage()
    } else if(mainMenuResult === 'Settings') {
      await SettingsMenu()
    }
  } catch (e) {
    if (e instanceof Error && e.name === 'ExitPromptError') {
      exitMessage()
    } else {
      throw e
    }
  }
}


run()