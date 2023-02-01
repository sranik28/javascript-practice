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

function findLeapyer(arrOfYears){
    let result=[];
    for(let i=0; i<arrOfYears.length; i++){
        let element=arrOfYears[i];
        if(element % 4 ==0){
            result.push(element);
        }
    }
    return result;
}
let years=[2023, 2024, 2025, 2028, 2030];
const result= findLeapyer(years);
console.log(result);