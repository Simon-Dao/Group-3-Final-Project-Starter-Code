
let dark = {
    textPrimary: '#fff',
    textSecondary: 'rgb(255, 255, 255, 0.7)',
    textTertiary: 'rgb(255, 255, 255, 0.5)',
    backgroundPrimary: '#121212',
    backgroundSecondary: '#252525',
    backgroundTertiary: '#2f2f2f',
    buttonPrimary: '#8cc283',
    buttonSecondary:'rgb(0, 0, 0)',
    buttonTertiary:'rgba(0, 0, 0)',
}

let light = {
    textPrimary: '#121212',
    textSecondary: 'rgb(0, 0, 0)',
    textTertiary: 'rgb(55, 55, 55)',
    backgroundPrimary: '#F1F3F4',
    backgroundSecondary: '#FFFFFF',
    backgroundTertiary: '#6200EE',
    buttonPrimary: '#8cc283',
    buttonSecondary:'#66bb6a',
    buttonTertiary:'#388e3c',
}

const colorModeButton = document.getElementById('color-mode-button');

function toggleColorMode(e) {
    
    if(darkMode) {
        selectedMode = light
        colorModeButton.textContent = 'dark'
    } else {
        selectedMode = dark
        colorModeButton.textContent = 'light'
    }
    localStorage.setItem('darkMode', darkMode)
    console.log(localStorage.getItem('darkMode'))

    updateColor()

    darkMode = !darkMode
}

function updateColor()
 {
    for(key in selectedMode) {

        if(key.includes('text'))
            setColorForElements(key)
        else
            setBackgroundForElements(key)
    }
 }
function setColorForElements(name) {
    //this grabs all of the elements with the specific class name
    const elements = document.querySelectorAll('.'+name)


    //the code below this if statement will not run if there are no elements with that class name
    if(elements.length == 0) return

    elements.forEach(function(element) {
        element.style.color = selectedMode[name]
    })
}

function setBackgroundForElements(name) {
    const elements = document.querySelectorAll('.'+name)

    //the code below this if statement will not run if there are no elements with that class name
    if(elements.length == 0) return

    elements.forEach(function(element) {
        element.style.backgroundColor = selectedMode[name]
    })
}

if(localStorage.getItem('darkMode') === 'undefined') localStorage.setItem('darkMode', false)

let darkMode = localStorage.getItem('darkMode') == true

let selectedMode = darkMode ? dark : light
toggleColorMode()

colorModeButton.addEventListener('click', toggleColorMode)