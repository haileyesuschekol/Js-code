 const BaseUrl = `https://superheroapi.com/api.php/261709416369407`
const displayImg = document.getElementById('display')
const getNewHero = document.getElementById('getNewHero')
const inputField = document.getElementById('inputField')
const searchBtn = document.getElementById('searchBtn')
const nameOfHero =document.getElementById('nameOfHero')
const statusOfHero = document.getElementById('statusOfHero')

const getHero = (id) =>{
    fetch(`${BaseUrl}/${id}`)
    .then(response => response.json())
    .then(json => {
        const stats= getStats(json)
        nameOfHero.innerText= json.name
        let heroImg = json.image.url
        displayImg.innerHTML =`<img src = "${json.image.url}" height = 250 width =200/> ${stats}`
    })
}

const searchSuperHero =(name)=>{
    fetch(`${BaseUrl}/search/${name}`)
    .then(response=>response.json())
 .then(json=>{
    const hero =json.results[0]
    const searchStats = getStats(hero)
    displayImg.innerHTML =`<img src = "${hero.image.url}" height = 250 width =200/> ${searchStats}`

})
}  

searchBtn.onclick=()=>searchSuperHero(inputField.value)
getNewHero.onclick=() => {
    randomId = Math.floor(Math.random()*731) 
    getHero(randomId)
}

const displayName=()=>{
nameOfHero.innerText= json.name   
}

const getStats=(character) =>{
   const stat = Object.keys(character.powerstats).map(stat =>{
        return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    return stat.join('')
}