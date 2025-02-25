import { promises as fs } from 'node:fs'
import path from 'node:path'

const TEXT_PATH = path.resolve('Data')
const FILE_NAME = 'jsonPath.txt'
const LOCAL_TEXT_PATH = path.join(TEXT_PATH, FILE_NAME)

export function saveJsonPath(data) {
  try {
    fs.writeFile(LOCAL_TEXT_PATH, data, 'utf-8')
    console.log('✔ Path saved Successfully!')
  } catch (e) {
    console.error(`❌ ERROR: ${e.message}`)
  }
}

export async function checkJsonPath() {
  try {
    const data = await fs.readFile(LOCAL_TEXT_PATH, 'utf-8')

    if (data.trim() === '') {
      return null
    }

    const firstLine = data.split('\n')[0].trim()

    if (firstLine === '') {
      console.log('❌ NO JSON PATH SAVED')
      return null
    } else {
      console.log('📦 Saved Json Path:', firstLine)
      return firstLine
    }
  } catch (err) {
    console.error(`ERROR: ${err.message}`)
    return null
  }
}
