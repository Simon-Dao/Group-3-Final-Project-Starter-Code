const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const pauseButton = document.querySelector('#pause')
const randomColors = [
'#f8c990',
'#a2ba83',
'#949c18',
'#d6849e',
'#97e42c',
'#3eb41a',
'#43092d',
'#6d718c',
'#a05864',
'#b3e549',
'#804826',
'#7d7cdb',
'#ce3e27',
'#2e9c82',
'#a0e1ae',
'#98c7e2'
] 

let utterance = new SpeechSynthesisUtterance()
let text = document.querySelector('#readable-text').textContent
utterance.text = text

startButton.addEventListener('click', (e) => {
    
    if(window.speechSynthesis.paused) {
        //for some reason it breaks the program
        
        //window.speechSynthesis.resume()
    } else {
        window.speechSynthesis.speak(utterance)
    }
})

pauseButton.addEventListener('click', (e) => {
    window.speechSynthesis.pause()
})

stopButton.addEventListener('click', (e) => {
    window.speechSynthesis.cancel()
})

let number = 15

console.log(number.toString(16))
