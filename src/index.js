import { MainMenu, StartMenu } from './Menu/menu.js'

async function run() {
  const mainMenuResult = await MainMenu()
  console.log(mainMenuResult)

  // If the mainresult is start show the startMenu
  if (mainMenuResult === 'Start') {
    const startMenuResult = await StartMenu()
    console.log(startMenuResult)
  } else if (mainMenuResult === 'Exit') {
    console.log('Tank\'s for using POSTY!')
  }
}

run()