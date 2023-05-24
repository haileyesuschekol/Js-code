let title = document.getElementById('title').innerText=('good buy')
console.log(title)

let newDom = document.getElementById('new').innerHTML='<p>hello this is Dom</p>'

document.getElementById('title').style.color ='red'

let green = document.getElementById('green')
let yellow = document.getElementById('yellow')
let red = document.getElementById('red')
let clicker = document.getElementById('click')
let squares = document.querySelectorAll('.squares')

// squares.onclick = () => {
//     clicker.innerText='You clicked Yellow'
//     clicker.style.color='green'
// }
// squares.onclick = () => {
//     clicker.innerText='You clicked Yellow'
//     clicker.style.color='yellow'

// }
// squares.onclick = () => {
//     clicker.innerText='You clicked Red'
//     clicker.style.color='red'

// }


// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

const timeClicked={
    'red':0, 'yellow':0 ,'green':0
}

//for each

squares.forEach(squares=>{
    squares.onclick = () => {
        //console.log(squares.value)
        timeClicked[squares.value] += 1
        squares.innerHTML = timeClicked[squares.value]        
    }
})

const cleargame = document.getElementById('clearbtn')

let clearbutton = () =>{
    squares.forEach(squares => {
        squares.innerText= ' '
        timeClicked[squares.value] = 0
} )
}

cleargame.onclick =() => clearbutton()