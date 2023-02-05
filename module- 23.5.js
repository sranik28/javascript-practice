// -------------------3------------------

// function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
//     const first100Book = 100;
//     const second200Book = 200;
//     const third300Book = 300;
     
//     const firstBook = firstBookQuantity * first100Book;
//     const secondBook = secondBookQuantity * second200Book;
//     const thirdBook = thirdBookQuantity * third300Book;

//     const totalPage = firstBook + secondBook + thirdBook; 
//     return totalPage;
// }
// ------------------------------------------------------------------

// -----------1------------

// const result = paperRequirements(2, 3, 4);
// console.log(result);

// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch;
// }
// const feet = 5;
// const result = feetToInch(feet);
// console.log("feet:", result);

// -----------------------

// --------------2-----------------
// function centimeterToMeter(centimeter){
//     const meter = centimeter / 100;
//     return meter;
// } 
//  const centimeter = 50;
//  const Tresult = centimeterToMeter(centimeter);
//  console.log("cm:", Tresult) 

// -------------------------------------------------

// ----------------------continue---------------------------------
let bigestNumber = [45, 45, 90, 105, 52, 71, 110];
for(let i =0; i< bigestNumber.length; i++){
    if(bigestNumber[i]>80){
        continue;
    }
    console.log(bigestNumber[i]);
}
// -----------------------------------------

// --------------------5-----------------------
// function onlyPositive(number){
//     let numbers = [];
//     for(let i = 0; i<number.length; i++){
//         if(number[i] <0){
//             break;            
//         }
//         else if(number[i] >=0){
//             numbers.push(number[i]);          
//         }       
//     }
//     return numbers;
// }
// const num =[0, 1, 2, -4, -5, -6, -1];
// const result=positiveNumbers(num);
// console.log(result)

// -------------------------------------------------

// ------------------4--------------------------

function bestFriend(name){
    let bigName =[0];
    for(let i =0; i < name.length; i++) {
        if(bigName.length<name[i].length){
            bigName = name[i];           
        }
    }
    return bigName;
}
const friendNames=['rakib', 'abul', 'babul', 'bulbulli' ];
const result = bestFriend(friendNames);
console.log(result)




let arr=[25, 41, 45,65,80];
arr[2]=100;
console.log(arr)