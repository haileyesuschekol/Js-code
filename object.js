'use strict'
//objects 

const applicant = {
    firstName :'john',
    lastName :'peter',
    age : 29,
    job:'programmer',
    
    clacBirthYear : function (){
        this.birthYear = 2022-this.age;
        return this.birthYear;
    },

    summary : function(){
        return `${this.firstName} was born in ${this.clacBirthYear()} and he is now a good ${this.job}`;
    }
};

// console.log(applicant.summary());
// console.log(`${applicant.firstName} was born in ${applicant.clacBirthYear()} and he is a ${applicant.job}`);

// console.log(applicant.clacBirthYear());

// console.log("age: " +applicant.age);
// console.log(applicant["lastName"]);

// const choose = "firstName"; 
// console.log(applicant[choose]);

// applicant.friends = ['tom','jerry']  // add new data
// console.log(applicant.friends[0]);

// applicant['phoneNumber'] = 12345; // add new data
// console.log(applicant['phoneNumber']);

// console.log(applicant.firstName + ' has ' + applicant.friends.length +' friends and his best friend is called ' + applicant.friends[0]);



// challenge comparing bmi 

const teamEthiopia ={
    firstName:'teddy',
    lastName:'afro',
    mass:78,
    height:1.69,

    bmiCalc: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

const teamNigeria = {
    firstName:'ujulu',
    lastName:'bungada',
    mass:92,
    height:1.95,

    bmiCalc: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

// teamEthiopia.bmiCalc() > teamNigeria.bmiCalc() ? 
// console.log(`${teamEthiopia.firstName}'s Bmi (${teamEthiopia.bmiCalc()}) is higher than ${teamNigeria.firstName}'s Bmi (${teamNigeria.bmiCalc()})`)
// :
// console.log(`${teamNigeria.firstName}'s Bmi (${teamNigeria.bmiCalc()}) is higher than ${teamEthiopia.firstName}'s Bmi (${teamEthiopia.bmiCalc()})`)
// ;
 
