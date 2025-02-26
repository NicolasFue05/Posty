import inquirer from 'inquirer'
import ASCIITitle from './title.js'
import process from 'node:process'
import { savePath, checkPath } from '../Processor/paths.js'
import Instructions from './instructions.js'

const MainMenu = async () => {
  console.clear()
  console.log(ASCIITitle())

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'main_choice',
      message:
        'WELCOME TO POSTY!\n Use The Arrow Keys or The Vim Keys (J-K) To Select The Options',
      choices: ['Start', 'Settings', 'Exit'],
    },
  ])

  return answers.main_choice
}

const StartMenu = async () => {
  console.clear()
  console.log(ASCIITitle())

  // URL input
  // Check if there a URL storage in the .txt file, if true use that URL, if not ask for the URL
  const apiOption = await inquirer.prompt([
    {
      type: 'list',
      name: 'api_url_option',
      message: 'API URL',
      choices: ['Set API Url', 'Use current Api Url']
    }
  ])

  let apiURL = null
  if (apiOption.api_url_option === 'Set API Url') {
    const response = await inquirer.prompt([
      {
        type: 'input',
        name: 'api_url',
        message: 'Set API URL',
      },
    ])
    apiURL = response.api_url
  } else {
    apiURL = await checkPath(false)
    console.log(apiURL)
  }

  // Endpoint Select
  const endpointAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'endpoint_select',
      message: 'Endpoint?',
      choices: ['No required', 'Set Endpoint'],
    },
  ])

  let endpointInput = null

  if (endpointAnswer.endpoint_select === 'Set Endpoint') {
    endpointInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'endpoint_input',
        message: 'Put the EndPoint',
      },
    ])
  }
  // add the checkPath function
  // if chechJsonPath is null show the normal prompt, if it not, show the select saved json and return the firstline of the saved txt
  const jsonChoice = await inquirer.prompt([
    {
      type: 'list',
      name: 'json_input',
      message: 'Json Location',
      choices: [
        'Use Saved Json Path',
        'Create a local Json File',
        'Give a path to the Json File',
      ],
    },
  ])
  // if user want to create a local json file, ask for a path or create one in the Data folder
  let jsonPath = null

  if (jsonChoice.json_input === 'Give a path to the Json File') {
    jsonPath = await inquirer.prompt([
      {
        type: 'input',
        name: 'json_path',
        message: 'Please write the path to the json file:',
      },
    ])
  } else if (jsonChoice.json_input === 'Use Saved Json Path') {
    jsonPath = await checkPath()
  }

  return {
    url: apiURL,
    endpoint: endpointAnswer.endpoint_select,
    endpointInput: endpointInput?.endpoint_input || '',
    jsonChoice: jsonChoice.json_input,
    jsonPath: jsonPath?.json_path,
  }
}

const SettingsMenu = async () => {
  console.clear()
  console.log(ASCIITitle())

  // Create the save current json path option
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'config_menu',
      message: 'SETTINGS',
      choices: ['Save Current Json Path', 'Save Current API Url','Instructions'],
    },
  ])

  let jsonPath = null
  let APIPath = null
  if (answers.config_menu === 'Save Current Json Path') {
    jsonPath = await inquirer.prompt([
      {
        type: 'input',
        name: 'json_path',
        message: 'Please Put The Json File Path',
        default: process.cwd(),
      },
    ])

    savePath(true, String(jsonPath.json_path))
  } else if(answers.config_menu === 'Save Current API Url') {
    APIPath = await inquirer.prompt([
      {
        type: 'input',
        name: 'api_path',
        message: 'Set the current API Url:'
      }
    ])
    savePath(false, String(APIPath.api_path))
  }

  // if option is Save current API URL
  // Save APIURL
  // saveURL(String(apiURL.api_url))

  if (answers.config_menu === 'Instructions') {
    Instructions()
  }
}

export { MainMenu, StartMenu, SettingsMenu }
