import fs from 'fs'
import path from 'path'

const DATA_PATH = path.resolve('Data')
const FILE_NAME = 'data.json'
const LOCAL_FILE_PATH = path.join(DATA_PATH, FILE_NAME)

export function createLocalJson(data) {
  try {
    console.log(` Checking if folder exists: ${DATA_PATH}`)

    // Ensure the Data folder exists
    if (!fs.existsSync(DATA_PATH)) {
      console.log('Folder does NOT exist, creating it...')
      fs.mkdirSync(DATA_PATH, { recursive: true })
    } else {
      console.log('Folder already exists.')
    }


    // Write data to the file
    fs.writeFileSync(LOCAL_FILE_PATH, JSON.stringify(data, null, 2))

    console.log('✔ File Created Successfully:', LOCAL_FILE_PATH)
  } catch (e) {
    console.error(`❌ ERROR WRITING FILE: ${e.message}`)
  }
}

export function addData(filePath, data) {
  try {
    // Extract directory path (so we don't treat a file as a folder)
    const dirPath = path.dirname(filePath)

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      console.log('Directory does not exist. Creating it...')
      fs.mkdirSync(dirPath, { recursive: true }) // Create the directory
    }

    // Overwrite the file with new data
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    console.log('✔ File overwritten successfully:', filePath)
  } catch (e) {
    console.error(`❌ ERROR ADDING DATA: ${e.message}`)
  }
}