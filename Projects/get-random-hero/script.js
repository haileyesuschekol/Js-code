//261709416369407

const BaseUrl = `https://superheroapi.com/api.php/261709416369407`
const displayImg = document.getElementById('display')
const getNewHero = document.getElementById('getNewHero')
const inputField = document.getElementById('inputField')
const searchBtn = document.getElementById('searchBtn')

const getHero = (id) =>{
    fetch(`${BaseUrl}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let heroImg = json.image.url
        displayImg.innerHTML =`<img src = "${json.image.url}" height = 250 width =200/>`

    })
}


//console.log(randomId)
getNewHero.onclick=() => {
    randomId = Math.floor(Math.random()*731) 
    getHero(randomId)
}