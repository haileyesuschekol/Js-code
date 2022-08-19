'use strict'

//if else statment

const my = (100 + 110 + 110)/3;
const him =( 99+110+190)/3;

console.log(`my avg is ${my} , his avg is ${him}`)

if(my>him && my>=100)
{
    console.log(`i am the winner`)
}else if(him>my && him>=100){
    console.log(`he is a winner`)
}else if(my===him && my>=100 && him>=100){
    console.log(`draw`)
}else console.log(`under average`)

//switch statment

const day = 'sunday';

switch(day){
    case 'monday':
        console.log('practice coding');
        break;
    case 'sunday':
        console.log('go to church');  
        break;  
    default:
        console.log('invalid day')
    }   

// teniray operator

let myAge = 23;
console.log(`i like to drink ${myAge>18 ? 'wine' : 'water'}`);
let drink = myAge>18 ? console.log(`i like to dirnk wine`) : console.log('i like to drink water');

let bill = 60;
let totalBill=  50<=bill && bill<=300 ? console.log(`bill=${bill} tip=${bill*(15/100)} total=${bill+bill*(15/100)}`) : 
console.log(`bill=${bill} tip=${bill*(20/100)} total=${bill+bill*(20/100)}`);

// function declaration .... type of function

function eat(food,howMany ){
    
    let logger= (`i eat ${food} ${howMany} times a day`);
    return logger; 
}

let final = eat("pizza", 2);
console.log(final);

// function expression .... type of function

const functionExpression = function(food,howMany){
    let logger2= (`i eat ${food} ${howMany} times a day`);
    return logger2;
}
let final2 = functionExpression("pizza", 3);
console.log(final2);


// arrow function

const arrfun = birthday => 2022 - birthday;
console.log(arrfun(1991));

// arrow function with many parameters

const mul = (num1, num2) => {
    return num1*num2;
}
console.log(mul(2,5));


// foreign currency converter by recursive function (function call a function)

function converter(money){
    const values = money * 1.5 ;
    return values;
}

function currency(money){
    const convert = converter(money);
    return convert;
}

console.log(currency(200));

// calculate the average and win one team if its scores is double of other team

const calculateAvg = (num1, num2, num3) => {
    return (num1+num2+num3)/3;
}

const avgTeam1 = calculateAvg(20,19,60);
const avgTeam2 = calculateAvg(100,99,88);

const checkWinner= function(team1 , team2){
   
    if(team1>(team2*2)){
        console.log(`the winner is team 1! ${team1} vs ${team2}`);
    }else if(team1===team2){
        console.log(`draw!`)
    }else if(team2>(team1*2)){
        console.log(`the winner is team 2! ${team2} vs ${team1}`)
    }else{console.log(`sorry there is no winner!`)}

}

const finalResult = (checkWinner(avgTeam1,avgTeam2));
console.log(finalResult);