const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv =document.getElementById('numberOfPeople')
const perPersonTotalDiv =document.getElementById('perPersonTotal')

//get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


//calculate the total bill per person

const calculateBill =() =>{

    // console.log(numberOfPeople)
    // console.log(billInput.nodeValue)
    const bill = Number(billInput.value)
    // console.log(`bill ${bill}`)

    //get tip from the user and convert to percentage
    const tipPercentage =Number(tipInput.value)/100
    // console.log(`tip% ${tipPercentage}`)
    
    //get total tip amount
    const tipAmount = bill*tipPercentage
    // console.log(`tip amount ${tipAmount}`)

    //calculate the total
    const total = tipAmount+bill
    //console.log(`total amount ${total}`)

    //calculate per person toal
    const perPersonTotal = total/numberOfPeople
    //console.log(` per pesoon total ${perPersonTotal}`)

    //update per person total
    perPersonTotalDiv.innerText =`$${perPersonTotal.toFixed(2)}` 
}


const increasePeople =()=>{
    //increment perople by one 
    numberOfPeople +=1

    //update number of people
    numberOfPeopleDiv.innerText= numberOfPeople

    //calculate the bill based on the peoples number 
    calculateBill()
}

const decreasePeople =()=>{

    if (numberOfPeople <=1 ){
        throw 'oops you can not have -ve customer'
    }
    //increment perople by one 
    numberOfPeople -=1

    //update number of people
    numberOfPeopleDiv.innerText= numberOfPeople

    //calculate the bill based on the peoples number 
    calculateBill()
}