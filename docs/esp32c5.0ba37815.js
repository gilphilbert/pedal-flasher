
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire477f"];
var parcelRegister = parcelRequire.register;
parcelRegister("7JsjV", function(module, exports) {

$parcel$export(module.exports, "ESP32C5ROM", () => $5a12b431bbee623e$export$d31876c33eaae20b);

var $4a0iZ = parcelRequire("4a0iZ");

var $1I7I1 = parcelRequire("1I7I1");
class $5a12b431bbee623e$export$d31876c33eaae20b extends (0, $4a0iZ.ESP32C6ROM) {
    constructor(){
        super(...arguments);
        this.CHIP_NAME = "ESP32-C5";
        this.IMAGE_CHIP_ID = 23;
        this.EFUSE_BASE = 0x600b4800;
        this.EFUSE_BLOCK1_ADDR = this.EFUSE_BASE + 0x044;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.UART_CLKDIV_REG = 0x60000014;
        this.TEXT_START = (0, (/*@__PURE__*/$parcel$interopDefault($1I7I1))).text_start;
        this.ENTRY = (0, (/*@__PURE__*/$parcel$interopDefault($1I7I1))).entry;
        this.DATA_START = (0, (/*@__PURE__*/$parcel$interopDefault($1I7I1))).data_start;
        this.ROM_DATA = (0, (/*@__PURE__*/$parcel$interopDefault($1I7I1))).data;
        this.ROM_TEXT = (0, (/*@__PURE__*/$parcel$interopDefault($1I7I1))).text;
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
        this.IROM_MAP_START = 0x42000000;
        this.IROM_MAP_END = 0x42800000;
        this.DROM_MAP_START = 0x42800000;
        this.DROM_MAP_END = 0x43000000;
        this.PCR_SYSCLK_CONF_REG = 0x60096110;
        this.PCR_SYSCLK_XTAL_FREQ_V = 2130706432;
        this.PCR_SYSCLK_XTAL_FREQ_S = 24;
        this.XTAL_CLK_DIVIDER = 1;
        this.UARTDEV_BUF_NO = 0x4085f51c; // Variable in ROM .bss which indicates the port in use
        // Magic value for ESP32C5
        this.CHIP_DETECT_MAGIC_VALUE = [
            0x1101406f
        ];
        this.FLASH_FREQUENCY = {
            "80m": 0xf,
            "40m": 0x0,
            "20m": 0x2
        };
        this.MEMORY_MAP = [
            [
                0x00000000,
                0x00010000,
                "PADDING"
            ],
            [
                0x42800000,
                0x43000000,
                "DROM"
            ],
            [
                0x40800000,
                0x40860000,
                "DRAM"
            ],
            [
                0x40800000,
                0x40860000,
                "BYTE_ACCESSIBLE"
            ],
            [
                0x4003a000,
                0x40040000,
                "DROM_MASK"
            ],
            [
                0x40000000,
                0x4003a000,
                "IROM_MASK"
            ],
            [
                0x42000000,
                0x42800000,
                "IROM"
            ],
            [
                0x40800000,
                0x40860000,
                "IRAM"
            ],
            [
                0x50000000,
                0x50004000,
                "RTC_IRAM"
            ],
            [
                0x50000000,
                0x50004000,
                "RTC_DRAM"
            ],
            [
                0x600fe000,
                0x60100000,
                "MEM_INTERNAL2"
            ]
        ];
        this.UF2_FAMILY_ID = 0xf71c0343;
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
    }
    async getPkgVersion(loader) {
        const numWord = 2;
        return await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord) >> 26 & 0x07;
    }
    async getMinorChipVersion(loader) {
        const numWord = 2;
        return await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord) >> 0 & 0x0f;
    }
    async getMajorChipVersion(loader) {
        const numWord = 2;
        return await loader.readReg(this.EFUSE_BLOCK1_ADDR + 4 * numWord) >> 4 & 0x03;
    }
    async getChipDescription(loader) {
        const pkgVer = await this.getPkgVersion(loader);
        let desc;
        if (pkgVer === 0) desc = "ESP32-C5";
        else desc = "unknown ESP32-C5";
        const majorRev = await this.getMajorChipVersion(loader);
        const minorRev = await this.getMinorChipVersion(loader);
        return `${desc} (revision v${majorRev}.${minorRev})`;
    }
    async getCrystalFreq(loader) {
        // The crystal detection algorithm of ESP32/ESP8266
        // works for ESP32-C5 as well.
        const uartDiv = await loader.readReg(this.UART_CLKDIV_REG) & this.UART_CLKDIV_MASK;
        const etsXtal = loader.transport.baudrate * uartDiv / 1000000 / this.XTAL_CLK_DIVIDER;
        let normXtal;
        if (etsXtal > 45) normXtal = 48;
        else if (etsXtal > 33) normXtal = 40;
        else normXtal = 26;
        if (Math.abs(normXtal - etsXtal) > 1) loader.info("WARNING: Unsupported crystal in use");
        return normXtal;
    }
    async getCrystalFreqRomExpect(loader) {
        return (await loader.readReg(this.PCR_SYSCLK_CONF_REG) & this.PCR_SYSCLK_XTAL_FREQ_V) >> this.PCR_SYSCLK_XTAL_FREQ_S;
    }
}

});
parcelRegister("1I7I1", function(module, exports) {
module.exports = JSON.parse('{"entry":1082132164,"text":"QREixCbCBsa39wBgEUc3BIRA2Mu39ABgEwQEANxAkYuR57JAIkSSREEBgoCIQBxAE3X1D4KX3bcBEbcHAGBOxoOphwBKyDcJhEAmylLEBs4izLcEAGB9WhMJCQDATBN09D8N4PJAYkQjqDQBQknSRLJJIkoFYYKAiECDJwkAE3X1D4KXfRTjGUT/yb8TBwAMlEGqh2MY5QCFR4XGI6AFAHlVgoAFR2OH5gAJRmONxgB9VYKAQgUTB7ANQYVjlecCiUecwfW3kwbADWMW1QCYwRMFAAyCgJMG0A19VWOV1wCYwRMFsA2CgLc1hUBBEZOFhboGxmE/Y0UFBrc3hUCThweyA6cHCAPWRwgTdfUPkwYWAMIGwYIjktcIMpcjAKcAA9dHCJFnk4cHBGMe9wI3t4RAEwcHsqFnupcDpgcIt/aEQLc3hUCThweyk4YGtmMf5gAjpscII6DXCCOSBwghoPlX4wb1/LJAQQGCgCOm1wgjoOcI3bc3NwBgfEudi/X/NycAYHxLnYv1/4KAQREGxt03tzcAYCOmBwI3BwAImMOYQ33/yFeyQBNF9f8FiUEBgoBBEQbG2T993TcHAEC3NwBgmMM3NwBgHEP9/7JAQQGCgEERIsQ3hIRAkwdEAUrAA6kHAQbGJsJjCgkERTc5xb1HEwREAYFEY9YnAQREvYiTtBQAfTeFPxxENwaAABOXxwCZ4DcGAAG39v8AdY+3NgBg2MKQwphCff9BR5HgBUczCelAupcjKCQBHMSyQCJEkkQCSUEBgoABEQbOIswlNzcEzj9sABMFRP+XAID/54Cg86qHBUWV57JHk/cHID7GiTc3NwBgHEe3BkAAEwVE/9WPHMeyRZcAgP/ngCDxMzWgAPJAYkQFYYKAQRG3h4RABsaTh0cBBUcjgOcAE9fFAJjHBWd9F8zDyMf5jTqVqpWxgYzLI6oHAEE3GcETBVAMskBBAYKAAREizDeEhECTB0QBJsrER07GBs5KyKqJEwREAWPzlQCuhKnAAylEACaZE1nJABxIY1XwABxEY175ArU9fd1IQCaGzoWXAID/54Ag5BN19Q8BxZMHQAxcyFxAppdcwFxEhY9cxPJAYkTSREJJskkFYYKAaTVtv0ERBsaXAID/54CA1gNFhQGyQHUVEzUVAEEBgoBBEQbGxTcNxbcHhECThwcA1EOZzjdnCWATB8cQHEM3Bv3/fRbxjzcGAwDxjtWPHMOyQEEBgoBBEQbGbTcRwQ1FskBBARcDgP9nAIPMQREGxibCIsSqhJcAgP/ngKDJWTcNyTcHhECTBgcAg9eGABMEBwCFB8IHwYMjlPYAkwYADGOG1AATB+ADY3X3AG03IxQEALJAIkSSREEBgoBBEQbGEwcADGMa5QATBbANRTcTBcANskBBAVm/EwewDeMb5f5xNxMF0A31t0ERIsQmwgbGKoSzBLUAYxeUALJAIkSSREEBgoADRQQABQRNP+23NXEmy07H/XKFaf10Is1KyVLFVsMGz5OEhPoWkZOHCQemlxgIs4TnACqJJoUuhJcAgP/ngEAxk4cJBxgIBWq6l7OKR0Ex5AVnfXWTBYX6kwcHBxMFhfkUCKqXM4XXAJMHBweul7OF1wAqxpcAgP/ngAAuMkXBRZU3AUWFYhaR+kBqRNpESkm6SSpKmkoNYYKAooljc4oAhWlOhtaFSoWXAID/54DAxhN19Q8B7U6G1oUmhZcAgP/ngEApTpkzBDRBUbcTBTAGVb8TBQAMSb0xcf1yBWdO11LVVtNezwbfIt0m20rZWtFizWbLaslux/13FpETBwcHPpccCLqXPsYjqgf4qokuirKKtov1M5MHAAIZwbcHAgA+hZcAgP/ngCAghWdj5VcTBWR9eRMJifqTBwQHypcYCDOJ5wBKhZcAgP/ngGAgfXsTDDv5kwyL+RMHBAeTBwQHFAhil+aXgUQzDNcAs4zXAFJNY3xNCWPxpANBqJk/ooUIAY01uTcihgwBSoWXAID/54BAHKKZopRj9UQDs4ekQWPxdwMzBJpAY/OKAFaEIoYMAU6FlwCA/+eAALYTdfUPVd0CzAFEeV2NTaMJAQBihZcAgP/ngECkffkDRTEB5oWFNGNPBQDj4o3+hWeThwcHopcYCLqX2pcjiqf4BQTxt+MVpf2RR+MF9PYFZ311kwcHB5MFhfoTBYX5FAiqlzOF1wCTBwcHrpezhdcAKsaXAID/54BgEnE9MkXBRWUzUT3BMbcHAgAZ4ZMHAAI+hZcAgP/ngKANhWIWkfpQalTaVEpZulkqWppaClv6S2pM2kxKTbpNKWGCgLdXQUkZcZOH94QBRYbeotym2srYztbS1NbS2tDezuLM5srqyO7GPs6XAID/54DAnaE5Ec23Zwlgk4fHEJhDtwaEQCOi5gC3BgMAVY+Ywy05Bc23JwtgN0fYUJOGh8ETBxeqmMIThgfAIyAGACOgBgCThgfCmMKTh8fBmEM3BgQAUY+YwyOgBgC3B4RANzeFQJOHBwATBwe7IaAjoAcAkQfj7ef+XTuRRWgIyTF9M7e3hECThweyIWc+lyMg9wi3B4BANwmEQJOHhw4jIPkAtzmFQF0+EwkJAJOJCbJjBgUQtwcBYBMHEAIjqOcMhUVFRZcAgP/ngAD5twWAQAFGk4UFAEVFlwCA/+eAQPq39wBgEUeYyzcFAgCXAID/54CA+bcXCWCIX4FFt4SEQHGJYRUTNRUAlwCA/+eAgJ/BZ/0XEwcAEIVmQWa3BQABAUWThEQBtwqEQA1qlwCA/+eAQJUTi0oBJpqDp8kI9d+Dq8kIhUcjpgkIIwLxAoPHGwAJRyMT4QKjAvECAtRNR2OB5whRR2OP5wYpR2Of5wCDxzsAA8crAKIH2Y8RR2OW5wCDp4sAnEM+1FUxoUVIEEU+g8c7AAPHKwCiB9mPEWdBB2N09wQTBbANKT4TBcANET4TBeAOOTadOUG3twWAQAFGk4WFAxVFlwCA/+eAQOs3BwBgXEcTBQACk+cXEFzHMbfJRyMT8QJNtwPHGwDRRmPn5gKFRmPm5gABTBME8A+FqHkXE3f3D8lG4+jm/rc2hUAKB5OGRrs2lxhDAoeTBgcDk/b2DxFG42nW/BMH9wITd/cPjUZj6+YItzaFQAoHk4YGwDaXGEMChxMHQAJjmOcQAtQdRAFFtTQBRWU8wT75NqFFSBB9FOE8dfQBTAFEE3X0D0U0E3X8D2k8TT7jHgTqg8cbAElHY2j3MAlH43b36vUXk/f3Dz1H42D36jc3hUCKBxMHB8G6l5xDgocFRJ3rcBCBRQFFl/B//+eAgHEd4dFFaBCtPAFEMagFRIHvl/B//+eAQHczNKAAKaAhR2OF5wAFRAFMYbcDrIsAA6TLALNnjADSB/X37/D/hX3xwWwinP0cfX0zBYxAVdyzd5UBlePBbDMFjEBj5owC/XwzBYxAVdAxgZfwf//ngMBzVflmlPW3MYGX8H//54DAclXxapTRt0GBl/B//+eAAHJR+TMElEHBtyFH44nn8AFMEwQADDG3QUfNv0FHBUTjnOf2g6XLAAOliwD1MrG/QUcFROOS5/YDpwsBkWdj6uceg6VLAQOliwDv8D+BNb9BRwVE45Ln9IOnCwERZ2Nq9xwDp8sAg6VLAQOliwAzhOcC7/Cv/iOsBAAjJIqwMbcDxwQAYwMHFAOniwDBFxMEAAxjE/cAwEgBR5MG8A5jRvcCg8dbAAPHSwABTKIH2Y8Dx2sAQgddj4PHewDiB9mP44H25hMEEAypvTOG6wADRoYBBQexjuG3g8cEAP3H3ERjnQcUwEgjgAQAfbVhR2OW5wKDp8sBA6eLAYOmSwEDpgsBg6XLAAOliwCX8H//54CAYiqMMzSgACm1AUwFRBG1EUcFROOa5+a3lwBgtF9ld30XBWb5jtGOA6WLALTftFeBRfmO0Y601/Rf+Y7RjvTf9FN1j1GP+NOX8H//54CgZSm9E/f3AOMVB+qT3EcAE4SLAAFMfV3jdJzbSESX8H//54AgSBhEVEAQQPmOYwenARxCE0f3/32P2Y4UwgUMQQTZvxFHpbVBRwVE45fn3oOniwADp0sBIyj5ACMm6QB1u4MlyQDBF5Hlic8BTBMEYAyJuwMnCQFjZvcGE/c3AOMZB+IDKAkBAUYBRzMF6ECzhuUAY2n3AOMEBtIjKKkAIybZADG7M4brABBOEQeQwgVG6b8hRwVE45Hn2AMkCQEZwBMEgAwjKAkAIyYJADM0gAClswFMEwQgDO2xAUwTBIAMzbEBTBMEkAzpuRMHIA1jg+cMEwdADeOb57gDxDsAg8crACIEXYyX8H//54CASAOsxABBFGNzhAEijOMJDLbAQGKUMYCcSGNV8ACcRGNb9Arv8O/Ldd3IQGKGk4WLAZfwf//ngIBEAcWTB0AM3MjcQOKX3MDcRLOHh0HcxJfwf//ngGBDJbYJZRMFBXEDrMsAA6SLAJfwf//ngKAytwcAYNhLtwYAAcEWk1dHARIHdY+9i9mPs4eHAwFFs9WHApfwf//ngAA0EwWAPpfwf//ngEAv6byDpksBA6YLAYOlywADpYsA7/Av/NG0g8U7AIPHKwAThYsBogXdjcEV7/DP1XW07/AvxT2/A8Q7AIPHKwATjIsBIgRdjNxEQRTN45FHhUtj/4cIkweQDNzIQbQDpw0AItAFSLOH7EA+1oMnirBjc/QADUhCxjrE7/CvwCJHMkg3hYRA4oV8EJOGSgEQEBMFxQKX8H//54CgMTe3hECTCEcBglcDp4iwg6UNAB2MHY8+nLJXI6TosKqLvpUjoL0Ak4dKAZ2NAcWhZ2OX9QBahe/wb8sjoG0BCcTcRJnD409w92PfCwCTB3AMvbeFS7c9hUC3jIRAk40Nu5OMTAHpv+OdC5zcROOKB5yTB4AMqbeDp4sA45MHnO/wb9MJZRMFBXGX8H//54CgHO/w786X8H//54BgIVWyA6TLAOMPBJjv8O/QEwWAPpfwf//ngEAa7/CPzAKUUbLv8A/M9lBmVNZURlm2WSZalloGW/ZLZkzWTEZNtk0JYYKAAAA=","text_start":1082130432,"data":"FACEQG4KgEC+CoBAFguAQOQLgEBQDIBA/guAQDoJgECgC4BA4AuAQCoLgEDqCIBAXguAQOoIgEBICoBAjgqAQL4KgEAWC4BAWgqAQJ4JgEDOCYBAVgqAQKgOgEC+CoBAaA2AQGAOgEAqCIBAiA6AQCoIgEAqCIBAKgiAQCoIgEAqCIBAKgiAQCoIgEAqCIBABA2AQCoIgECGDYBAYA6AQA==","data_start":1082469296,"bss_start":1082392576}');

});



//# sourceMappingURL=esp32c5.0ba37815.js.map
