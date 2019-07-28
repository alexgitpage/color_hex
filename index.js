// red part
const redSlider = document.querySelector('#red-slider')
let redInput = document.querySelector('#red-input')
let redOutput = document.querySelector('#red-output')
// green part
const greenSlider = document.querySelector('#green-slider')
let greenInput = document.querySelector('#green-input')
let greenOutput = document.querySelector('#green-output')
// blue part
const blueSlider = document.querySelector('#blue-slider')
let blueInput = document.querySelector('#blue-input')
let blueOutput = document.querySelector('#blue-output')

let rgbresult = document.querySelector('#rgb-result')

redSlider.addEventListener('mousemove', event => {
  changeValue(redInput, redSlider, redOutput)
  changeRedColor()
  changeColor()
})
greenSlider.addEventListener('mousemove', event => {
  changeValue(greenInput, greenSlider, greenOutput)
  changeGreenColor()
  changeColor()
})
blueSlider.addEventListener('mousemove', event => {
  changeValue(blueInput, blueSlider, blueOutput)
  changeBlueColor()
  changeColor()
})


// 此函式改變顏色數字的值
function changeValue(input, slider, output) {
  input.textContent = slider.value
  input.innerHTML = slider.value
  if (input.textContent < 10) {
    // 如果小於0會再補上一個0
    output.innerHTML = `0${input.textContent}`
  } else {
    // 轉為16進位
    output.innerHTML = (+input.textContent).toString(16)
  }
}

// 此函式改變單一顏色
function changeRedColor() {
  let color = `#${redOutput.textContent}0000`
  redInput.style.background = color
}
function changeGreenColor() {
  let color = `#00${greenOutput.textContent}00`
  greenInput.style.background = color
}
function changeBlueColor() {
  let color = `#0000${blueOutput.textContent}`
  blueInput.style.background = color
}
// 此函式改變總顏色
function changeColor() {
  let color = `#${redOutput.textContent}${greenOutput.textContent}${blueOutput.textContent}`
  rgbresult.style.background = color
}