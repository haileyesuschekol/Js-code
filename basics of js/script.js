myname = 'haile'
// console.log(haile)

//operators

const car = 'black'
// console.log(car)

// + ,- , * , / , %
//food tip calculator

// const totalFood = Number(prompt('total amount of food'))
// const tip = Number(prompt(('tip')))
// const amountTip = tip/100
// const total = totalFood+tip
// console.log(total) 

// datatypes

//number
//string
//boolean
//array
//object

//math methods

//math.floor(3.4)
//math.ceil(3.8)
//math.random()


//conditional statment

let weather = 'sunny'

if(weather == 'sunny'){
    //console.log('wear your sunglasses')
}else{
   // console.log('grab your umbrella')
}

//conditional operators
// == , === , <,> ,<=,>= ,!== , !=


//Function

function sayMyName(){
console.log('haile')
}
//sayMyName()

// function with argument

function sayMyName2(myName){
console.log(myName)
}
//sayMyName2('my name is haile')


// templet litrals

function greeting(yourName){
    console.log(`hello ${yourName} how are you ?`)
}

// greeting('baba')


// return make the function reusable
function sum(a, b){
    return a+b
}


function totalFoodCalculator(a,b){
     totalFood = a
     tip = b
     amountTip = b/100*a
    const total = sum(a,amountTip)
    console.log(total) 

}

// totalFoodCalculator(400,20)


//ES6 
// arrow function with explicite return

const sumArrow = (a, b) => {
    return a+b;
}
// console.log(sumArrow(20,80))

// arrow function with implicit return

const sumArrow2 = ( a,b) => a+b
// console.log(sumArrow2(25,25))

// Array

const items=['apple' , 'banana' , 'mango']
// console.log(items)
// console.log(items[2])

//Array methods

//push to add item on the array
items.push('orange', 'pinapple','avocado')
//console.log(items)

//slice 
//console.log(items.slice(2,5 ))

//indexof
//console.log(items.indexOf('orange'))

//length
//console.log(items.length)


//object
// assigning an object 

const person = {
    Name : 'boss',
    age:'25',
}

//accesing an object by dot 
// console.log(person.Name)
// console.log(person.age)

//accesing an object by barce 
// console.log(person['Name'])
// console.log(person['age'])

 person.phoneNumeber='1-234-567-8910'

// console.log(person.phoneNumeber)

// examples

const cars = (color,plateNo) =>{
    const car= {
        color:color,
        plateNo:plateNo,
        cost:500000,
        tax:function(){
            const taxes  = this.cost*0.15
            return taxes
        }
    }

    const description =`my car color is ${car.color} and my palte number is ${car.plateNo} and costs ${car.cost} with ${car.tax()} of tax`
    return description
}

// console.log(cars('black', '12345'))

// for loop

const friuts =['banana' , 'apple' ,'orange', 'pineapple','banana' , 'apple' ,'orange', 'pineapple']

for(let i = 0; i<friuts.length ; i++){
    //console.log(i+1, friuts[i])
}

// the new pythonic array

for(fruit in friuts){
    //console.log(fruit)
}

// example 

const doubel = (arrNumber) =>{
    let result=[]
    for(const num of arrNumber){
        result.push(num*2)
    }
    return result
}
// console.log(doubel([1,2,3,4,5,6]))

//excercise 

const letterCounter = () =>{
    const letter ='hellooo'
    for(let letters in letter){
        letters++
        console.log(letters)
    }  
}
    //letterCounter()

const addNumbers =(addingNumbers)=>{
      let results = 0
    for(const sum of addingNumbers){
         results +=sum
    }
    return results
}

//console.log(addNumbers([1,2,3,4,5,6,7,8]))


const greatestNum =(num)=>{
    let result = num[0]
   for(let i=1;i<num.length;i++){
    if(num[i]>result)
    result=num[i]
   }
   return result
}

//console.log(greatestNum([2,4,6,4,9,12,3,5,23,6,345,77,234,]))

const maxNum =(num)=>{
    let result = num[0]
    for(number of num){
        if(number>result){
            result=number
        }
    }
    return {result}
}
//console.log(maxNum([4,5,6,3,7,5,23,4]))

// example
const frequencyChecker=(phrase)=>{
let frequency ={}
for(const letter of phrase){
    console.log(letter)
    if(letter in frequency){
        frequency[letter]+=1
    }else{
        frequency[letter] =1
    }
} 
return frequency
}

//console.log(frequencyChecker('heloo'))


// const obj ={
//     names:'ha',
//     age:24
// }

// console.log(names in obj)

const wordFrequency =(words)=> {
    let frequency={}
     newWords=words.split(' ')
     //console.log(newWords)
     for(const word of newWords){
        if(word in frequency){
            frequency[word]+=1
        }else{
            frequency[word]=1
        }
     }
     return frequency    
}

//console.log(wordFrequency('hello man hello'))


// higer order function

//map
//filter
//reduce

//map - loops and returns an array

arr =[1,2,3,4,5].map(number=>{
    // console.log(number)
    // console.log('hello this is map')
})

let amap =['1', '2' ,'3'].map(number =>number*2)
//console.log(amap)

const doubleNum = (num)=>{
    return num.map(dNum => dNum*2)
}
//console.log(doubleNum([1,2,3,4]))

//filter - loops amd return an array with conditions

const filters =(nums) =>{
let filterNumber = nums.filter(num=> num > 2)
return filterNumber
}
//console.log(filters([1,2,3,4]))

const highNetWorth =[
    {name: 'jo', netWorth:1000},
    {name: 'abi',netWorth:2000},
    {name: 'zia',netWorth:3000}
]

let netWorths = highNetWorth.filter(worth => worth.netWorth > 1000)
const namesOfActors = netWorths.map(actor => actor.name)
//console.log(namesOfActors,netWorths)

//reduce()
//loops and give back the accumulator
//takes in a functiona as an argument 
//reduces to one number

const sumArray =[1,2,3,4]
const sumResult = sumArray.reduce((a , b)=> a+b)
//console.log(sumResult)

let sunIncomes = highNetWorth.reduce((pre, curr)=>pre + curr.netWorth, 0)
//console.log(sunIncomes)



