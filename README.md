# Web Flasher
DIY FFB Pedal Flasher is a web-based flashing tool that installs firmware for the DIY FFB Pedal project.

To use, simply plug in your board while holding the `BOOT` button and click "Connect" to select the correct serial port. Select the correct board and click "Flash" and the tool will do the rest.

[https://gilphilbert.github.io/pedal-flasher/](https://gilphilbert.github.io/pedal-flasher/)

## Development
To setup the development environment:
```bash
git clone git@github.com:gilphilbert/pedal-flasher.git
npm i
npm run dev
```
To build the project for deployment
```bash
npm run build
git add .
git commit -m "my amazing commit"
git push
```
GitHub pages will do the rest!

### Libraries
- `esptool-js`