// myname = 'haile'
// console.log(haile)

//operators

// const car = 'black'
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

// let weather = 'sunny'

// if(weather == 'sunny'){
//     console.log('wear your sunglasses')
// }else{
//     console.log('grab your umbrella')
// }

//conditional operators
// == , === , <,> ,<=,>= ,!== , !=


//Function

// function sayMyName(){
// console.log('haile')
// }
// sayMyName()

// function with argument

// function sayMyName2(myName){
// console.log(myName)
// }
// sayMyName2('my name is haile')


// templet litrals

// function greeting(yourName){
//     console.log(`hello ${yourName} how are you ?`)
// }

// greeting('baba')


// return make the function reusable
// function sum(a, b){
//     return a+b
// }


// function totalFoodCalculator(a,b){
//      totalFood = a
//      tip = b
//      amountTip = b/100*a
//     const total = sum(a,amountTip)
//     console.log(total) 

// }

// totalFoodCalculator(400,20)


//ES6 
// arrow function with explicite return

// const sumArrow = (a, b) => {
//     return a+b;
// }
// console.log(sumArrow(20,80))

// arrow function with implicit return

// const sumArrow2 = ( a,b) => a+b
// console.log(sumArrow2(25,25))

// Array

//const items=['apple' , 'banana' , 'mango']
// console.log(items)
// console.log(items[2])

//Array methods

//push to add item on the array
//items.push('orange', 'pinapple','avocado')
//console.log(items)

//slice 
//console.log(items.slice(2,5 ))

//indexof
//console.log(items.indexOf('orange'))

//length
//console.log(items.length)


//object
// assigning an object 

// const person = {
//     Name : 'boss',
//     age:'25',
// }

//accesing an object by dot 
// console.log(person.Name)
// console.log(person.age)

//accesing an object by barce 
// console.log(person['Name'])
// console.log(person['age'])

// person.phoneNumeber='1-234-567-8910'

// console.log(person.phoneNumeber)

// examples

// const cars = (color,plateNo) =>{
//     const car= {
//         color:color,
//         plateNo:plateNo,
//         cost:500000,
//         tax:function(){
//             const taxes  = this.cost*0.15
//             return taxes
//         }
//     }

//     const description =`my car color is ${car.color} and my palte number is ${car.plateNo} and costs ${car.cost} with ${car.tax()} of tax`
//     return description
// }

// console.log(cars('black', '12345'))

// for loop

// const friuts =['banana' , 'apple' ,'orange', 'pineapple','banana' , 'apple' ,'orange', 'pineapple']

// for(let i = 0; i<friuts.length ; i++){
//     console.log(i+1, friuts[i])
// }

// the new pythonic array

// for(fruit of friuts){
//     console.log(fruit)
// }

// example 

// const doubel = (arrNumber) =>{
//     let result=[]
//     for(const num of arrNumber){
//         result.push(num*2)
//     }
//     return result
// }
// console.log(doubel([1,2,3,4,5,6]))