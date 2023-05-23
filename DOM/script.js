let title = document.getElementById('title').innerText=('good buy')
console.log(title)

let newDom = document.getElementById('new').innerHTML='<p>hello this is Dom</p>'

document.getElementById('title').style.color ='red'

let green = document.getElementById('green')
let yellow = document.getElementById('yellow')
let red = document.getElementById('red')
let onclick = document.getElementById('onclick')

green.onclick = () => {
    console.log('green')
    onclick.innerText='You clicked Green'
    onclick.style.color='green'

}
yellow.onclick = () => {
    console.log('yellow')
    onclick.innerText='You clicked Yellow'
    onclick.style.color='yellow'

}
red.onclick = () => {
    console.log('red')
    onclick.innerText='You clicked Red'
    onclick.style.color='red'

}

let squares = document.querySelectorAll('.squares')

