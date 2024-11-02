const connectButton = document.getElementById("connectButton") as HTMLButtonElement;
const disconnectButton = document.getElementById("disconnectButton") as HTMLButtonElement;
const programButton = document.getElementById("programButton") as HTMLButtonElement;
const terminal = document.getElementById("terminal") as HTMLDivElement;
const lblConnTo = document.getElementById("lblConnTo") as HTMLLabelElement;
const alertDiv = document.getElementById("alertDiv") as HTMLDivElement;

const board = document.getElementById('board-name') as HTMLSelectElement;
const lblFirmwareVersion = document.getElementById('lblFirmwareVersion') as HTMLLabelElement;

//const debugLogging = document.getElementById("debugLogging") as HTMLInputElement;

// This is a frontend example of Esptool-JS using local bundle file
// To optimize use a CDN hosted version like
// https://unpkg.com/esptool-js@0.2.0/bundle.js
import { ESPLoader, FlashOptions, LoaderOptions, Transport } from "esptool-js";
import { serial } from "web-serial-polyfill";
if (!navigator.serial && navigator.usb) navigator.serial = serial;

declare let Terminal; // Terminal is imported in HTML script
declare let CryptoJS; // CryptoJS is imported in HTML script

const term = new Terminal({ cols: 80, rows: 24, 'theme': { background: '#333' } });
term.open(terminal);

let device = null;
let transport: Transport;
let chip: string = null;
let esploader: ESPLoader;

interface BoardFirmware {
  board: string;
  version: string;
  url: string;
  offset: string;
  chip: string;
}

let boardFirmwares: Array<BoardFirmware> = [];

disconnectButton.style.display = "none";
programButton.style.display = "none";

/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */

/**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */
/*
function handleFileSelect(evt) {
  const file = evt.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (ev: ProgressEvent<FileReader>) => {
    evt.target.data = ev.target.result;
  };

  reader.readAsBinaryString(file);
}
*/

board.onchange = () => {
  //const _selectedBoard:Array<BoardFirmware> = boardFirmwares.filter(el => el.board = board.value);
  //if (_selectedBoard.length > 0)
  //  selectedBoard = _selectedBoard[0];
  lblFirmwareVersion.innerHTML = "Firmware version: " + boardFirmwares[board.selectedIndex].version;
}

const espLoaderTerminal = {
  clean() {
    term.clear();
  },
  writeLine(data) {
    term.writeln(data);
  },
  write(data) {
    term.write(data);
  },
};

connectButton.onclick = async () => {
  if (device === null) {
    device = await navigator.serial.requestPort({});
    transport = new Transport(device, true);
  }

  try {
    const flashOptions = {
      transport,
      baudrate: 921600,
      terminal: espLoaderTerminal,
      debugLogging: false  //debugLogging: debugLogging.checked,
    } as LoaderOptions;
    esploader = new ESPLoader(flashOptions);

    chip = await esploader.main();

    // Temporarily broken
    // await esploader.flashId();
  } catch (e) {
    console.error(e);
    term.writeln(`Error: ${e.message}`);
  }

  console.log("Settings done for :" + chip);
  lblConnTo.innerHTML = "Connected to device: " + chip;
  lblConnTo.style.display = "block";
  connectButton.style.display = "none";
  disconnectButton.style.display = "initial";
  programButton.style.display = "initial";
};

/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */
function cleanUp() {
  device = null;
  transport = null;
  chip = null;
}

disconnectButton.onclick = async () => {
  if (transport) await transport.disconnect();

  term.reset();
  connectButton.style.display = "initial";
  disconnectButton.style.display = "none";
  programButton.style.display = "none";
  lblConnTo.style.display = "none";
  alertDiv.style.display = "none";
  cleanUp();
};

/**
 * Validate the provided files images and offset to see if they're valid.
 * @returns {string} Program input validation result
 */
function validateProgramInputs() {
  //get a list of all boards with the board name selected
  //const _boards:Array<BoardFirmware> = boardFirmwares.filter(el => el.board = board.value);
  //  if (_boards.length > 0) {
  //    const _board:BoardFirmware = _boards[0];
  if (chip.startsWith(boardFirmwares[board.selectedIndex].chip))
    return "success";
  //}
  return "Incorrect chip for this board";
}

programButton.onclick = async () => {
  const alertMsg = document.getElementById("alertmsg");
  const err = validateProgramInputs();

  if (err != "success") {
    alertMsg.innerHTML = "<strong>" + err + "</strong>";
    alertDiv.style.display = "block";
    return;
  }

  // Hide error message
  alertDiv.style.display = "none";

  const fileArray = [];
  const progressBars = [];

  /*
  for (let index = 1; index < table.rows.length; index++) {
    const row = table.rows[index];

    const offSetObj = row.cells[0].childNodes[0] as HTMLInputElement;
    const offset = parseInt(offSetObj.value);

    const fileObj = row.cells[1].childNodes[0] as ChildNode & { data: string };
    const progressBar = row.cells[2].childNodes[0];

    progressBar.textContent = "0";
    progressBars.push(progressBar);

    row.cells[2].style.display = "initial";
    row.cells[3].style.display = "none";

    fileArray.push({ data: fileObj.data, address: offset });
  }
  */

  try {
    const flashOptions: FlashOptions = {
      fileArray: fileArray,
      flashSize: "keep",
      eraseAll: false,
      compress: true,
      reportProgress: (fileIndex, written, total) => {
        progressBars[fileIndex].value = (written / total) * 100;
      },
      calculateMD5Hash: (image) => CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)),
    } as FlashOptions;
    await esploader.writeFlash(flashOptions);
  } catch (e) {
    console.error(e);
    term.writeln(`Error: ${e.message}`);
  } finally {
    // Hide progress bars and show erase buttons
    //for (let index = 1; index < table.rows.length; index++) {
    //  table.rows[index].cells[2].style.display = "none";
    //  table.rows[index].cells[3].style.display = "initial";
    //}
  }
};

const JSONData = {
  "Configurations": [
    {
      "Config": "V3",
      "Version": "0.87.1",
      "URL": "https://raw.githubusercontent.com/ChrGri/DIY-Sim-Racing-FFB-Pedal/develop/OTA/ControlBoard/esp32/firmware.bin",
      "Offset": "0x1000",
      "Chip": "ESP32-D0WD"
    },
    {
      "Config": "V4",
      "Version": "0.87.1",
      "URL": "https://raw.githubusercontent.com/ChrGri/DIY-Sim-Racing-FFB-Pedal/develop/OTA/ControlBoard/esp32S3/firmware.bin",
      "Offset": "0x0000",
      "Chip": "ESP32-S3"
    },
    {
      "Config": "Speedcrafter",
      "Version": "0.87.1",
      "URL": "https://raw.githubusercontent.com/ChrGri/DIY-Sim-Racing-FFB-Pedal/develop/OTA/ControlBoard/Speedcrafter/firmware.bin",
      "Offset": "0x1000",
      "Chip": "ESP32-D0WD"
    },
    {
      "Config": "PCBAv1",
      "Version": "0.87.1",
      "URL": "https://raw.githubusercontent.com/ChrGri/DIY-Sim-Racing-FFB-Pedal/develop/OTA/ControlBoard/Gilphilbert_1_2/firmware.bin",
      "Offset": "0x0000",
      "Chip": "ESP32-S3"
    }
  ]
}
//fetch("https://raw.githubusercontent.com/tcfshcrw/FFBPedalOTA_Json/main/JSON/dev/ControlBoard/Version_esp32.json")
//  .then(response => response.json())
//  .then(json => {
    JSONData.Configurations.forEach(jsondata => {
      const firmware:BoardFirmware = {
        board: jsondata.Config,
        version: jsondata.Version,
        url: jsondata.URL,
        offset: jsondata.Offset,
        chip: jsondata.Chip
      }
      boardFirmwares.push(firmware);

      if (board.childElementCount == 0)
        lblFirmwareVersion.innerText = "Firmware version: " + firmware.version;

      const opt:HTMLOptionElement = document.createElement('option');
      opt.value = jsondata.Config;
      opt.innerHTML = jsondata.Config;
      board.appendChild(opt);

    });

//  });