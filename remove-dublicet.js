//  same name bar bar thakle take remove kore ekta name near jonno-----------

// function removeDublicet(names){
//     let result = [];
//     for(let i = 0; i < names.length; i++){
//         const name = names[i];
//         if(result.includes(name) === false){
//             result.push(name);
//         }
//     }
//     return result;
// }
// let totalName = ["abul", "abul", "babul", "babul", "kobul", "dabul", "habul", "cabul", "mokbul", "bulbul"]
// const result = removeDublicet(totalName);
// console.log(result);

function findSecondLargestElem(arr){
    let first = -1 , second = -1;
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second;
}
let arr = [12, 39, 1, 10, 40, 1]
const result= findSecondLargestElem(arr);
console.log(result);