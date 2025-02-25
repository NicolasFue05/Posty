const ASCIITitle = () => {
  return `
    ██████╗  ██████╗ ███████╗████████╗██╗   ██╗
    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝
    ██████╔╝██║   ██║███████╗   ██║    ╚████╔╝ 
    ██╔═══╝ ██║   ██║╚════██║   ██║     ╚██╔╝  
    ██║     ╚██████╔╝███████║   ██║      ██║   
    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   `
}

export const exitMessage = () => {
  console.clear()
  console.log(ASCIITitle())
  console.log('\t💖 Tank you for using POSTY \n\t👾 Created by: NicolasFue05')
}

export default ASCIITitle