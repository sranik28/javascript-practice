// function largestNumber(number){
//     let larges =number[0];
//     for(i=0; i<number.length; i++){
//         const element = number[i];
//         if(element > larges){
//             larges = element;
//         }
//     }
//     return larges;
// }
// const numbers = [200, 400, 300, 700, 10];
// const result = largestNumber(numbers);
// console.log(result);

// easy rule second lasrgest number

function secondLargestNumber(number){
    let fristLargest=0;
    let secondLargest=0;
    for(i=0; i<number.length; i++ ){
        let index = number[i];
        if(index > fristLargest){
            fristLargest = secondLargest;
            secondLargest = index;
        }
    }
    return secondLargest;
}
const numbers= [200, 400, 750, 500, 900, 100];
const result = secondLargestNumber(numbers);
console.log(result);