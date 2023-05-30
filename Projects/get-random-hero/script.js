//261709416369407

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
        console.log(json.powerstats)
        statusOfHero.innerHTML = `<h3> Intelligence = ${json.powerstats['intelligence']}  </h3>`
        nameOfHero.innerText= json.name
        let heroImg = json.image.url
        displayImg.innerHTML =`<img src = "${json.image.url}" height = 250 width =200/>`

    })
}

const searchSuperHero =(name)=>{
    //console.log(inputField.value)
    fetch(`${BaseUrl}/search/${name}`)
    .then(response=>response.json())
 .then(json=>{
    const hero =json.results[0]
    //nameOfHero.innerText=`<h2>${json.name}</h2>`
        displayImg.innerHTML =`<img src = "${hero.image.url}" height = 250 width =200/>`

})
}  

searchBtn.onclick=()=>searchSuperHero(inputField.value)
//console.log(randomId)
getNewHero.onclick=() => {
    randomId = Math.floor(Math.random()*731) 
    getHero(randomId)
}

const displayName=()=>{
nameOfHero.innerText= json.name
    
}