window.addEventListener('load', start)

function start() {
}

let colorRed = 255
let colorGreen = 255
let colorBlue = 255

let inputRed = document.querySelector('input[type="range"].red')
let inputGreen = document.querySelector('input[type="range"].green')
let inputBlue = document.querySelector('input[type="range"].blue')

let inputTextRed = document.querySelector('input[type="text"].red')
let inputTextGreen = document.querySelector('input[type="text"].green')
let inputTextBlue = document.querySelector('input[type="text"].blue')

let box = document.querySelector('.box')
let textForCopy = document.querySelector('.text')

inputRed.addEventListener('input', event => {
  colorRed = event.target.value
  inputRed = event.target.value
  changeValueColor()
})

inputGreen.addEventListener('input', event => {
  colorGreen = event.target.value
  inputGreen = event.target.value
  changeValueColor()
})

inputBlue.addEventListener('input', event => {
  colorBlue = event.target.value
  inputBlue = event.target.value
  changeValueColor()
})

function changeValueColor() {
  inputTextRed.value = colorRed
  inputTextGreen.value = colorGreen
  inputTextBlue.value = colorBlue

  box.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
  textForCopy.textContent = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
}