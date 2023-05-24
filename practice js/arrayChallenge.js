'use strict'
// challenge to solve minimum , maximum  and avg 
const maxVal = function(temp1,temp2){
    const temp3 = temp1.concat(temp2);
    //console.log('values = '+temp3);
     let max = temp3[0];
     let min =temp3[0];
     for(let i = 0; i<temp3.length;i++){
         if(max<temp3[i]) max=temp3[i];
         if(min>temp3[i]) min=temp3[i];
     }
    // console.log("max = "+max,"min = "+min);
     return (max+min)/2;
 }
 
 const temp1 = [34,36,35,38,39];
 const temp2 = [37,33,38,39,33];
 
 //console.log(maxVal(temp1,temp2));

 
 // challenge-2  convert array to string  
const forcast = function(temperature){
    let str ='';
    
    for(let i=0;i<temperature.length;i++){
        str += `... ${temperature[i]}°C in ${i+1} days `;  
    }
   // console.log(str);
}
const temp=[17,21,23];

forcast(temp);