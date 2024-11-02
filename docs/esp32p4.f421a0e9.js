
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire477f"];
var parcelRegister = parcelRequire.register;
parcelRegister("9Kuc3", function(module, exports) {

$parcel$export(module.exports, "ESP32P4ROM", () => $718fd4bc2e8adbc1$export$80700ef855e8973d);

var $d9Our = parcelRequire("d9Our");

var $bYhW8 = parcelRequire("bYhW8");
class $718fd4bc2e8adbc1$export$80700ef855e8973d extends (0, $d9Our.ESP32ROM) {
    constructor(){
        super(...arguments);
        this.CHIP_NAME = "ESP32-P4";
        this.IMAGE_CHIP_ID = 18;
        this.IROM_MAP_START = 0x40000000;
        this.IROM_MAP_END = 0x4c000000;
        this.DROM_MAP_START = 0x40000000;
        this.DROM_MAP_END = 0x4c000000;
        this.BOOTLOADER_FLASH_OFFSET = 0x2000; // First 2 sectors are reserved for FE purposes
        this.CHIP_DETECT_MAGIC_VALUE = [
            0x0,
            0x0addbad0
        ];
        this.UART_DATE_REG_ADDR = 1343004812;
        this.EFUSE_BASE = 0x5012d000;
        this.EFUSE_BLOCK1_ADDR = this.EFUSE_BASE + 0x044;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.SPI_REG_BASE = 0x5008d000; // SPIMEM1
        this.SPI_USR_OFFS = 0x18;
        this.SPI_USR1_OFFS = 0x1c;
        this.SPI_USR2_OFFS = 0x20;
        this.SPI_MOSI_DLEN_OFFS = 0x24;
        this.SPI_MISO_DLEN_OFFS = 0x28;
        this.SPI_W0_OFFS = 0x58;
        this.EFUSE_RD_REG_BASE = this.EFUSE_BASE + 0x030; // BLOCK0 read base address
        this.EFUSE_PURPOSE_KEY0_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY0_SHIFT = 24;
        this.EFUSE_PURPOSE_KEY1_REG = this.EFUSE_BASE + 0x34;
        this.EFUSE_PURPOSE_KEY1_SHIFT = 28;
        this.EFUSE_PURPOSE_KEY2_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY2_SHIFT = 0;
        this.EFUSE_PURPOSE_KEY3_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY3_SHIFT = 4;
        this.EFUSE_PURPOSE_KEY4_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY4_SHIFT = 8;
        this.EFUSE_PURPOSE_KEY5_REG = this.EFUSE_BASE + 0x38;
        this.EFUSE_PURPOSE_KEY5_SHIFT = 12;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT_REG = this.EFUSE_RD_REG_BASE;
        this.EFUSE_DIS_DOWNLOAD_MANUAL_ENCRYPT = 1048576;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_REG = this.EFUSE_BASE + 0x034;
        this.EFUSE_SPI_BOOT_CRYPT_CNT_MASK = 1835008;
        this.EFUSE_SECURE_BOOT_EN_REG = this.EFUSE_BASE + 0x038;
        this.EFUSE_SECURE_BOOT_EN_MASK = 1048576;
        this.PURPOSE_VAL_XTS_AES256_KEY_1 = 2;
        this.PURPOSE_VAL_XTS_AES256_KEY_2 = 3;
        this.PURPOSE_VAL_XTS_AES128_KEY = 4;
        this.SUPPORTS_ENCRYPTED_FLASH = true;
        this.FLASH_ENCRYPTED_WRITE_ALIGN = 16;
        this.MEMORY_MAP = [
            [
                0x00000000,
                0x00010000,
                "PADDING"
            ],
            [
                0x40000000,
                0x4c000000,
                "DROM"
            ],
            [
                0x4ff00000,
                0x4ffa0000,
                "DRAM"
            ],
            [
                0x4ff00000,
                0x4ffa0000,
                "BYTE_ACCESSIBLE"
            ],
            [
                0x4fc00000,
                0x4fc20000,
                "DROM_MASK"
            ],
            [
                0x4fc00000,
                0x4fc20000,
                "IROM_MASK"
            ],
            [
                0x40000000,
                0x4c000000,
                "IROM"
            ],
            [
                0x4ff00000,
                0x4ffa0000,
                "IRAM"
            ],
            [
                0x50108000,
                0x50110000,
                "RTC_IRAM"
            ],
            [
                0x50108000,
                0x50110000,
                "RTC_DRAM"
            ],
            [
                0x600fe000,
                0x60100000,
                "MEM_INTERNAL2"
            ]
        ];
        this.UF2_FAMILY_ID = 0x3d308e94;
        this.EFUSE_MAX_KEY = 5;
        this.KEY_PURPOSES = {
            0: "USER/EMPTY",
            1: "ECDSA_KEY",
            2: "XTS_AES_256_KEY_1",
            3: "XTS_AES_256_KEY_2",
            4: "XTS_AES_128_KEY",
            5: "HMAC_DOWN_ALL",
            6: "HMAC_DOWN_JTAG",
            7: "HMAC_DOWN_DIGITAL_SIGNATURE",
            8: "HMAC_UP",
            9: "SECURE_BOOT_DIGEST0",
            10: "SECURE_BOOT_DIGEST1",
            11: "SECURE_BOOT_DIGEST2",
            12: "KM_INIT_KEY"
        };
        this.TEXT_START = (0, (/*@__PURE__*/$parcel$interopDefault($bYhW8))).text_start;
        this.ENTRY = (0, (/*@__PURE__*/$parcel$interopDefault($bYhW8))).entry;
        this.DATA_START = (0, (/*@__PURE__*/$parcel$interopDefault($bYhW8))).data_start;
        this.ROM_DATA = (0, (/*@__PURE__*/$parcel$interopDefault($bYhW8))).data;
        this.ROM_TEXT = (0, (/*@__PURE__*/$parcel$interopDefault($bYhW8))).text;
    }
    async getPkgVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return registerValue >> 27 & 0x07;
    }
    async getMinorChipVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return registerValue >> 0 & 0x0f;
    }
    async getMajorChipVersion(loader) {
        const numWord = 2;
        const addr = this.EFUSE_BLOCK1_ADDR + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        return registerValue >> 4 & 0x03;
    }
    async getChipDescription(loader) {
        const pkgVersion = await this.getPkgVersion(loader);
        const chipName = pkgVersion === 0 ? "ESP32-P4" : "unknown ESP32-P4";
        const majorRev = await this.getMajorChipVersion(loader);
        const minorRev = await this.getMinorChipVersion(loader);
        return `${chipName} (revision v${majorRev}.${minorRev})`;
    }
    async getChipFeatures(loader) {
        return [
            "High-Performance MCU"
        ];
    }
    async getCrystalFreq(loader) {
        return 40; // ESP32P4 XTAL is fixed to 40MHz
    }
    async getFlashVoltage(loader) {
        return;
    }
    async overrideVddsdio(loader) {
        loader.debug("VDD_SDIO overrides are not supported for ESP32-P4");
    }
    async readMac(loader) {
        let mac0 = await loader.readReg(this.MAC_EFUSE_REG);
        mac0 = mac0 >>> 0;
        let mac1 = await loader.readReg(this.MAC_EFUSE_REG + 4);
        mac1 = mac1 >>> 0 & 0x0000ffff;
        const mac = new Uint8Array(6);
        mac[0] = mac1 >> 8 & 0xff;
        mac[1] = mac1 & 0xff;
        mac[2] = mac0 >> 24 & 0xff;
        mac[3] = mac0 >> 16 & 0xff;
        mac[4] = mac0 >> 8 & 0xff;
        mac[5] = mac0 & 0xff;
        return this._d2h(mac[0]) + ":" + this._d2h(mac[1]) + ":" + this._d2h(mac[2]) + ":" + this._d2h(mac[3]) + ":" + this._d2h(mac[4]) + ":" + this._d2h(mac[5]);
    }
    async getFlashCryptConfig(loader) {
        return; // doesn't exist on ESP32-P4
    }
    async getSecureBootEnabled(laoder) {
        const registerValue = await laoder.readReg(this.EFUSE_SECURE_BOOT_EN_REG);
        return registerValue & this.EFUSE_SECURE_BOOT_EN_MASK;
    }
    async getKeyBlockPurpose(loader, keyBlock) {
        if (keyBlock < 0 || keyBlock > this.EFUSE_MAX_KEY) {
            loader.debug(`Valid key block numbers must be in range 0-${this.EFUSE_MAX_KEY}`);
            return;
        }
        const regShiftDictionary = [
            [
                this.EFUSE_PURPOSE_KEY0_REG,
                this.EFUSE_PURPOSE_KEY0_SHIFT
            ],
            [
                this.EFUSE_PURPOSE_KEY1_REG,
                this.EFUSE_PURPOSE_KEY1_SHIFT
            ],
            [
                this.EFUSE_PURPOSE_KEY2_REG,
                this.EFUSE_PURPOSE_KEY2_SHIFT
            ],
            [
                this.EFUSE_PURPOSE_KEY3_REG,
                this.EFUSE_PURPOSE_KEY3_SHIFT
            ],
            [
                this.EFUSE_PURPOSE_KEY4_REG,
                this.EFUSE_PURPOSE_KEY4_SHIFT
            ],
            [
                this.EFUSE_PURPOSE_KEY5_REG,
                this.EFUSE_PURPOSE_KEY5_SHIFT
            ]
        ];
        const [reg, shift] = regShiftDictionary[keyBlock];
        const registerValue = await loader.readReg(reg);
        return registerValue >> shift & 0xf;
    }
    async isFlashEncryptionKeyValid(loader) {
        const purposes = [];
        for(let i = 0; i <= this.EFUSE_MAX_KEY; i++){
            const purpose = await this.getKeyBlockPurpose(loader, i);
            purposes.push(purpose);
        }
        const isXtsAes128Key = purposes.find((p)=>p === this.PURPOSE_VAL_XTS_AES128_KEY);
        return true;
    }
}

});
parcelRegister("bYhW8", function(module, exports) {
module.exports = JSON.parse('{"entry":1341195918,"text":"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","text_start":1341194240,"data":"EAD1TwYK8U9WCvFPrgrxT4QL8U/wC/FPngvxT9QI8U9AC/FPgAvxT8IK8U+ECPFP9grxT4QI8U/gCfFPJgrxT1YK8U+uCvFP8gnxTzgJ8U9oCfFP7gnxT0AO8U9WCvFPCA3xTwAO8U/EB/FPJA7xT8QH8U/EB/FPxAfxT8QH8U/EB/FPxAfxT8QH8U/EB/FPpAzxT8QH8U8mDfFPAA7xTw==","data_start":1341533100,"bss_start":1341456384}');

});



//# sourceMappingURL=esp32p4.f421a0e9.js.map
