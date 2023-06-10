const order = () =>{
console.log('1 ready')
}

//console.log('2 talking')
//console.log('3 laughing')
//setTimeout(order , 2000)

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        isReady = true
        isReady ? resolve('ready') : reject('not yet')
    }, 2000);
})

// console.log(
//     promise1.then(success => console.log(success))
//     .catch(error =>console.log(error))
//     )

// console.log(fetch(`https://dog.ceo/api/breeds/image/random`) //promise
// .then(respo => respo.json())
// .then(data => console.log(data))
// )    

// async/await

const getDog = async () =>{
    const url = `https://dog.ceo/api/breeds/image/random`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data) 
}

//getDog()

const getSoup = async()=>{
    try{
        const soup =await promise1
        console.log(soup)
    }catch(error){
        console.log(error)
    }
}

//getSoup()