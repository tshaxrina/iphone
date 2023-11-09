let natural = document.querySelector('#natural')
let blue = document.querySelector('#blue')
let white = document.querySelector('#white')
let black = document.querySelector('#black')
let img = document.querySelector('.pc')

natural.onclick = () => {
    img.style.backgroundImage = 'url("img/grey.jpg")'
}
blue.onclick = () => {
    img.style.backgroundImage = 'url("img/blue.jpg")'
}
white.onclick = () => {
    img.style.backgroundImage = 'url("img/white.jpg")'
}
black.onclick = () => {
    img.style.backgroundImage = 'url("img/black.jpg")'
}
