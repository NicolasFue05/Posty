import ASCIITitle from './title.js'

export default function Instructions() {
  console.clear()
  console.log(ASCIITitle()) // Displays ASCII title
  console.log(
    '-------------------------------------------------------------------------------------',
  )
  console.log('⚙️  INSTRUCTIONS')
  console.log(
    '-------------------------------------------------------------------------------------\n',
  )

  console.log('💡 First of all:')
  console.log('   - You can save a **current JSON path** in the settings menu.')
  console.log('   - You can also save a **current API URL** with its endpoint.')
  console.log(
    '\n------------------------------------------------------------------------------------\n',
  )

  console.log('🔹 **HOW TO START**')
  console.log('   [1] Start the program by selecting the **"Start"** option.')
  console.log(
    '\n------------------------------------------------------------------------------------\n',
  )

  console.log('🔹 **PROGRAM REQUIREMENTS**')
  console.log('   When starting, the program will ask for the following:\n')

  console.log('   📦 **An API URL** (required):')
  console.log('      - You can enter the **full API URL**.')
  console.log(
    '      - Or just enter the base URL and specify the **endpoint** separately.\n',
  )

  console.log('   📌 **An Endpoint** (optional):')
  console.log(
    '      - If you already provided the full API URL, you can skip this.',
  )
  console.log(
    '      - If you only provided the base URL, you must specify an **endpoint**.\n',
  )

  console.log('   📝 **A JSON file path for saving fetched data**:')
  console.log('      - You can use the **saved JSON path**.')
  console.log(
    '      - Create a new **local JSON file** (saved in the `/Data` folder).',
  )
  console.log(
    '      - Enter a **custom path** where the JSON file should be saved.\n',
  )

  console.log('   📂 If choosing a custom path:')
  console.log(
    '      - The program will ask you to enter the full path to the JSON file.\n',
  )

  console.log(
    '\n------------------------------------------------------------------------------------\n',
  )
  console.log('🔹 **SETTINGS MENU OPTIONS**')
  console.log(
    '   - Save a **default JSON file path** (stored in `jsonPath.txt`).',
  )
  console.log('   - Save a **default API URL** (stored in `api.txt`).')
  console.log(
    '\n------------------------------------------------------------------------------------\n',
  )

  console.log('🎯 Follow these steps to configure your program correctly!')
  console.log(
    '\n------------------------------------------------------------------------------------\n',
  )
}

Instructions()
