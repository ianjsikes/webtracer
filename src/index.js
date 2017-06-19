import './main.css'
const logoPath = require('./logo.svg')
const Elm = require('./App.elm')
const wasm = require('./wasm.js')

const root = document.getElementById('root')

Elm.App.embed(root, logoPath)

const Module = {
  wasmBinaryFile: require('./wasm/hello.wasm'),
  ENVIRONMENT: 'WEB',
}

wasm(Module)

// require('./wasm/hello.js');
