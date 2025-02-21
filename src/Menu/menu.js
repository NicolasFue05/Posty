import inquirer from 'inquirer'
import ASCIITitle from './title.js'

const MainMenu = async () => {
  console.clear()
  console.log(ASCIITitle())

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'main_choice',
      message: 'WELCOME TO POSTY!\n Use The Arrow Keys or The Vim Keys (J-K) To Select The Options',
      choices: [
        'Start', 
        'Use Instructions',
        'Settings',
        'Exit'
      ]
    }
  ])

  return answers.main_choice
}

const StartMenu = async () => {
  console.clear()
  console.log(ASCIITitle())

  // URL input
  // Check if there a URL storage in the .txt file, if true use that URL, if not ask for the URL
  const inputAnswers = await inquirer.prompt([
    {
      type: 'input',
      name: 'start_input',
      message: 'Set URL',
    }
  ])

  // Endpoint Select
  const endpointAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'endpoint_select',
      message: 'Endpoint?',
      choices: [
        'No required',
        'Set Endpoint'
      ]
    }
  ])

  let endpointInput = null   

  if (endpointAnswer.endpoint_select === 'Set Endpoint') {
    endpointInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'endpoint_input',
        message: 'Put the EndPoint'
      }
    ])
  } 


  const jsonChoice = await inquirer.prompt([
    {
      type: 'list',
      name: 'json_input',
      message: 'Json Location',
      choices: [
        'Create a local Json File',
        'Give a path to the Json File'
      ]
    }
  ])
  // if user want to create a local json file, ask for a path or create one in the Data folder
  let jsonPath = null

  if (jsonChoice.json_input !== 'Create a local Json File') {
    jsonPath = await inquirer.prompt([
      {
        type: 'input',
        name: 'json_path',
        message: 'Please write the path to the json file:',
      }
    ])
  }

  return ({
    url: inputAnswers.start_input,
    endpoint: endpointAnswer.endpoint_select,
    endpointInput: endpointInput?.endpoint_input || '',
    jsonChoice: jsonChoice.json_input,
    jsonPath: jsonPath?.json_path || 'No required'
  })
}

// TODO: Create the instructions component

export {
  MainMenu,
  StartMenu
} 