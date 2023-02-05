// function milesToKilometer(miles){
//     const kilomiter = miles*1.609;
//     return kilomiter;
// }
// const mile = 2;
// const result= milesToKilometer(mile) .toFixed(1)  ;
// console.log(result)

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}
const feet = 5;
const result = feetToInch(feet);
console.log("feet:", result);



function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    return meter;
} 
 const centimeter = 50;
 const Tresult = centimeterToMeter(centimeter);
 console.log("cm:", Tresult) 

// function reverseString(str) {
    // var newString = "";
    // for (var i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }
    // return newString;
// }
// var output= reverseString("Hello");
// console.log(output);

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// var output= reverseString("GeeksforGeeks");
// console.log(output);

// function fahrenheitToCelsius(faren){
//     let Celsius = (faren-32)/ 1.8 ;
//     return Celsius;
// }
// const fahrenheit = 103;
// const result = fahrenheitToCelsius(fahrenheit).toFixed(2);
// console.log(result);



// const primes = [];
// for (let i = 2; i <= 100; i++) {
// let isPrime = true;
// for (let j = 2; j < i; j++) {
// if (i % j === 0) {
// isPrime = false;
// break;
// }
// }
// if (isPrime){
// primes.push(i);
// }
// console.log(primes)
// }