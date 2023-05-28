const getRandom = document.getElementById('randomDog')
const btnRandom = document.getElementById('btnRandom')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        getRandom.innerHTML = `<img src='${json.message}' height=300 width=300/>`
      })
  }

  btnRandom.onclick=()=>getNewDog()
