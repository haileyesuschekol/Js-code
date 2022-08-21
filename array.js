// arrays

const friendsName = ['name1','name2','name3'];
console.log(friendsName[friendsName.length-1]);

const myNickName = new Array('haile','hale');
console.log(myNickName[0]);
myNickName[1] = 'faf';
console.log(myNickName);

// calculate on arrays

const yearOfCentury = year =>{
    const calculateYear = 2022-year;
    return calculateYear;
}
const yearToCalcualte = [1991, 2011, 2022];

const finalOut =[1990 , 2000, yearOfCentury(yearToCalcualte[1])];

console.log(finalOut);