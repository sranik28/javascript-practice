// function getSumOfArray(numbers){
//     let sum = 0;
//     for (let i=0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum+= element;
//         // console.log(index, element, sum);
//     }
//     return sum; 
// }
// const myNumbers = [12, 65, 45, 78, 32, 45, 92 ];
// getSumOfArray(myNumbers);

// function getOfAnEvenArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 === 0){
//             console.log(index,element);
//         }
//     }
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 92 ];
// getOfAnEvenArray(myNumbers);

function getOfAnOddArray(numbers){
    let sum = 0;
    const oddnumbers =[];
    for(let i = 0; i <numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(sum, element, index );
        if(element % 2 !==0){
            console.log("this is odd number", element)
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}

const myNumber = [12, 63, 45, 78, 32, 95, 92 ];
const oddNumber= getOfAnOddArray(myNumber);
console.log(oddNumber);




