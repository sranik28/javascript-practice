// ------------------------------
// reverseString-----------
// -----------------------------
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// var output= reverseString("GeeksforGeeks");
// console.log(output);

// -------------------------
// Calculate total cost
// -------------------------



// ---------------------------
// Subtraction Operation
// --------------------------

// function Subtraction(money){
//     let giveMoney=1000;
//     let applePrice=400;
//     let orangePrice=300;
//     let sum = applePrice+orangePrice;
//     let result = giveMoney - sum ;
//     return result;
// }
// const result=Subtraction();
// console.log(result);


// function deleteProp(){
//     let obj = arr[0];
//     let prop = arr[1];
//     if( prop in obj){
//     delete obj[prop];
//     return "YES";
// }
//     else{
//     return "NO";
// }
// }
// deleteProp()

// ------------------------------------
// Can you find the leap years??
// ------------------------------------

// function findLeapyer(arrOfYears){
//     let result=[];
//     for(let i=0; i<arrOfYears.length; i++){
//         let element=arrOfYears[i];
//         if(element % 4 ==0){
//             result.push(element);
//         }
//     }
//     return result;
// }
// let years=[2023, 2024, 2025, 2028, 2030];
// const result= findLeapyer(years);
// console.log(result);



// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade


function myMark(mark){
    if(myResult >=80){
        return "A grade";        
    }
    else if(myResult>=60 ){
        return "B grade"       
    }
    else if(myResult>=50){
        return "C grade"        
    }
    else if(myResult>=40){
        return "D grade"        
    }
    else if(39>=myResult){
        return "F grade"        
    }
    else{
        return "You are losser"      
    }                     
}
let myResult = 15;
const result= myMark(myResult);
console.log(result);
