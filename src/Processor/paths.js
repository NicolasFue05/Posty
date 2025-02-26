import { promises as fs } from 'node:fs'
import path from 'node:path'

const TEXT_PATH = path.resolve('data')
const FILE_NAME = 'jsonPath.txt'
const API_FILE_NAME = 'api.txt'
const JSON_LOCAL_TEXT_PATH = path.join(TEXT_PATH, FILE_NAME)
const API_LOCAL_TEXT_PATH = path.join(TEXT_PATH, API_FILE_NAME)

// Change name to savePath
export async function savePath(isJson = true, data) {
  try {
    const filePath = isJson ? JSON_LOCAL_TEXT_PATH : API_LOCAL_TEXT_PATH
    await fs.writeFile(filePath, data, 'utf-8') // ✅ Awaiting the write operation
    console.log('✔ Path saved Successfully!')
  } catch (e) {
    console.error(`❌ ERROR: ${e.message}`)
  }
}

// Change name to chackPath
export async function checkPath(isJson = true) {
  try {
    let data = ''
    if (isJson) {
      data = await fs.readFile(JSON_LOCAL_TEXT_PATH, 'utf-8')
    } else {
      data = await fs.readFile(API_LOCAL_TEXT_PATH, 'utf-8')
    }

    if (data.trim() === '') {
      return null
    }

    const firstLine = data.split('\n')[0].trim()

    if (firstLine === '') {
      console.log('❌ NO PATH SAVED')
      return null
    } else {
      // console.log('📦 Saved Path:', firstLine)
      return firstLine
    }
  } catch (err) {
    console.error(`ERROR: ${err.message}`)
    return null
  }
}
