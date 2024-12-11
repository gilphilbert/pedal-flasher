const connectButton = document.getElementById("connectButton") as HTMLButtonElement
const disconnectButton = document.getElementById("disconnectButton") as HTMLButtonElement
const programButton = document.getElementById("programButton") as HTMLButtonElement
const terminal = document.getElementById("terminal") as HTMLDivElement
const lblConnTo = document.getElementById("lblConnTo") as HTMLLabelElement
const alertDiv = document.getElementById("alertDiv") as HTMLDivElement
const boardType = document.getElementById('boardType') as HTMLSelectElement
const board = document.getElementById('boardName') as HTMLSelectElement
const channel = document.getElementById('channel') as HTMLSelectElement
const lblFirmwareVersion = document.getElementById('lblFirmwareVersion') as HTMLLabelElement
const safariWarning = document.getElementById('safariWarning') as HTMLDivElement
const consoleButton = document.getElementById('consoleButton') as HTMLButtonElement
const progressBar = document.getElementById('progressBar') as HTMLDivElement
const successNotice = document.getElementById('successNotice') as HTMLDivElement
const failureNotice = document.getElementById('failureNotice') as HTMLDivElement
const failureMessage = document.getElementById('failureMessage') as HTMLParagraphElement

const reducedSpeed = document.getElementById('reducedSpeed') as HTMLInputElement

const pageStats = {
  flashAttempts: 0,
  flashSuccesses: 0,
  pageHits: 0
}

import { ESPLoader, FlashOptions, LoaderOptions, Transport } from "esptool-js"
import { serial } from "web-serial-polyfill"
if (!navigator.serial && navigator.usb) navigator.serial = serial

declare let Terminal 
declare let CryptoJS

const term = new Terminal({ cols: 80, rows: 24, 'theme': { background: '#333' } })
term.open(terminal)

const urls = {
  control: {
    dev: "https://raw.githubusercontent.com/gilphilbert/pedal-flasher/refs/heads/main/json/dev/Version_ControlBoard.json",
    main: "https://raw.githubusercontent.com/gilphilbert/pedal-flasher/refs/heads/main/json/main/Version_ControlBoard.json",
  },
  bridge: {
    dev: "https://raw.githubusercontent.com/gilphilbert/pedal-flasher/refs/heads/main/json/dev/Version_Bridge.json",
    main: "https://raw.githubusercontent.com/gilphilbert/pedal-flasher/refs/heads/main/json/main/Version_Bridge.json",
  }
}

let device = null
let transport: Transport
let chip: string = null
let esploader: ESPLoader

interface BoardFirmware {
  board: string
  description: string
  version: string
  url: string
  chip: string
}

let boardFirmwares: Array<BoardFirmware> = []

safariWarning.style.display = navigator.userAgent.toLowerCase().indexOf('safari/') > -1 ? "none" : "block"

boardType.disabled = true
channel.disabled = true
board.disabled = true
programButton.disabled = true
disconnectButton.style.display = "none"
terminal.style.display = "none"
successNotice.style.display = "none"
failureNotice.style.display = "none"

const espLoaderTerminal = {
  clean() {
    //this is called automatically after the flash is called
    //we will remove it for now since we don't want it to be cleared
    //term.clear()
  },
  writeLine(data) {
    term.writeln(data)
  },
  write(data) {
    term.write(data)
  },
}

function getFirmwareJSON() {
  fetch(urls[boardType.value][channel.value])
    .then(response => response.json())
    .then(json => {
      const len = board.options.length
      for (let i = len - 1; i >= 0; i--)
        board.options.remove(0)

      let optionEnabled = false
      boardFirmwares = []

      json.Configurations.forEach(jsondata => {
        if (jsondata.board != "Gilphilbert_PCBAv2") {
          const firmware:BoardFirmware = {
            board: jsondata.Board,
            description: jsondata.Description,
            version: jsondata.Version,
            url: jsondata.URL.slice(0, jsondata.URL.lastIndexOf("/") + 1),
            chip: jsondata.Chip
          }
          boardFirmwares.push(firmware)

          if (board.childElementCount == 0)
            lblFirmwareVersion.innerText = "Firmware version: " + firmware.version

          const opt:HTMLOptionElement = document.createElement('option')
          opt.value = firmware.board
          opt.innerHTML = firmware.description
          opt.disabled = chip.startsWith(firmware.chip) ? false : true
          board.appendChild(opt)

          optionEnabled = optionEnabled == true ? true : chip.startsWith(firmware.chip) ? true : false
        }
      })
      programButton.disabled = !optionEnabled
    })
}

channel.onchange = () => { getFirmwareJSON() }
boardType.onchange = () => { getFirmwareJSON()}
board.onchange = () => {
  lblFirmwareVersion.innerHTML = "Firmware version: " + boardFirmwares[board.selectedIndex].version
}

consoleButton.onclick = () => {
  terminal.style.display = terminal.style.display == "none" ? "block" : "none"
}

connectButton.onclick = async () => {
  if (device === null) {
    device = await navigator.serial.requestPort({})
    transport = new Transport(device, false)
  }

  try {
    connectButton.value = "Connecting..."
    term.clear()
    const flashOptions = {
      transport,
      baudrate: reducedSpeed.checked ? 256000 : 921600,
      terminal: espLoaderTerminal,
      debugLogging: false  //debugLogging: debugLogging.checked,
    } as LoaderOptions
    esploader = new ESPLoader(flashOptions)

    chip = await esploader.main()

    // Temporarily broken
    // await esploader.flashId()
    lblConnTo.innerHTML = "Connected device: " + chip
    lblConnTo.style.display = "block"
    connectButton.style.display = "none"
    connectButton.value = "Connect"
    disconnectButton.style.display = "initial"
    channel.disabled = false
    boardType.disabled = false
    board.disabled = false

    getFirmwareJSON()
  } catch (e) {
    console.error(e)
    term.writeln(`Error: ${e.message}`)
    connectButton.value = "Connect"
  }
}

/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */
function cleanUp() {
  device = null
  transport = null
  chip = null
}

disconnectButton.onclick = async () => {
  if (transport) await transport.disconnect()

  connectButton.style.display = "initial"
  disconnectButton.style.display = "none"
  programButton.disabled = true

  channel.disabled = true
  boardType.disabled = true
  board.disabled = true
  lblConnTo.style.display = "none"
  alertDiv.style.display = "none"
  cleanUp()
}

async function getFile(url:string) {
  const ret = new Promise(async (resolve, reject) => {
    let response = await fetch(url)
    let data = await response.blob()
  
    const reader = new FileReader()
  
    reader.onload = (ev: ProgressEvent<FileReader>) => {
      resolve(ev.target.result)
    }
  
    reader.readAsBinaryString(data)
  
  })
  return ret
}

function validateProgramInputs() {
  if (chip.startsWith(boardFirmwares[board.selectedIndex].chip))
    return "success"
  return "Incorrect chip for this board"
}

programButton.onclick = async () => {
  term.reset()

  const alertMsg = document.getElementById("alertmsg")
  const err = validateProgramInputs()

  fetch("https://api.counterapi.dev/v1/diy-ffb-pedal-webflash/flash-attempts/up")

  programButton.disabled = true
  successNotice.style.display = "none"
  failureNotice.style.display = "none"
  failureMessage.innerHTML = ""

  if (err != "success") {
    alertMsg.innerHTML = "<strong>" + err + "</strong>"
    alertDiv.style.display = "block"
    return
  }

  // Hide error message
  alertDiv.style.display = "none"

  const fileArray = []

  const fileList = [
    { file: boardFirmwares[board.selectedIndex].url + 'bootloader.bin', offset: chip.startsWith("ESP32-D0WD") ? 0x1000 : 0x0000 },
    { file: boardFirmwares[board.selectedIndex].url + 'partitions.bin', offset: 0x8000 },
    { file: boardFirmwares[board.selectedIndex].url + 'boot_app0.bin', offset: 0xe000 },
    { file: boardFirmwares[board.selectedIndex].url + 'firmware.bin', offset: 0x10000 }
  ]

  for (let i = 0; i < fileList.length; i++) {
    const el = fileList[i]

    //need a way to detect download failure
    fileArray.push({ data: await getFile(el.file), address: el.offset })
  }

  try {
    const flashOptions: FlashOptions = {
      fileArray: fileArray,
      flashSize: "keep",
      eraseAll: false,
      compress: true,
      reportProgress: (fileIndex, written, total) => {
        const perc = Math.round((fileIndex * 25) + ((written / total) * 100 / 4)) + '%'
        progressBar.style.width = perc
        progressBar.innerHTML = perc + ' (' + (fileIndex + 1) + '/4)'
      },
      calculateMD5Hash: (image) => CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)),
    } as FlashOptions
    await esploader.writeFlash(flashOptions)
    successNotice.style.display = "block"
    disconnectButton.click()

    fetch("https://api.counterapi.dev/v1/diy-ffb-pedal-webflash/flash-success/up")
  } catch (e) {
    console.error(e)
    term.writeln(`Error: ${e.message}`)
    failureNotice.style.display = "block"
    failureMessage.innerHTML = e.message
  } finally {
    programButton.disabled = false
    progressBar.style.width = "0"
    progressBar.innerHTML = ""
  }
}

async function getPageStats() {
  let response = await fetch("https://api.counterapi.dev/v1/diy-ffb-pedal-webflash/hits/up")
  let data = await response.json()
  console.log(data.count)
  if (Object.keys(data).includes('count')) {
    pageStats.pageHits = data.count
  }

  response = await fetch("https://api.counterapi.dev/v1/diy-ffb-pedal-webflash/flash-attempts")
  data = await response.json()
  console.log(data.count)
  if (Object.keys(data).includes('count')) {
    pageStats.flashAttempts = data.count
  }

  response = await fetch("https://api.counterapi.dev/v1/diy-ffb-pedal-webflash/flash-success")
  data = await response.json()
  console.log(data.count)
  if (Object.keys(data).includes('count')) {
    pageStats.flashSuccesses = data.count
  }

  document.getElementById('pageHits').innerHTML = pageStats.pageHits.toString()
  document.getElementById('pageFlashes').innerHTML = pageStats.flashAttempts.toString()
  document.getElementById('pageSuccessRate').innerHTML = ((pageStats.flashAttempts / pageStats.flashAttempts) * 100).toString() + '%' 
}
getPageStats()

const acc = document.getElementsByClassName("accordion")
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    e.preventDefault()

    this.classList.toggle("active")

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}