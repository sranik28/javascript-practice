1 + 2 + 3 + 4 + 5 + 6 + 7

function sumOfNumber(number){
    let sum = 0;
    for(let i = 1; i < number.length; i++){
        let index = i;
        const element=number[index]
        sum+=element;
        // console.log(element, sum);
    }
    return sum;
}
const myNumbers = [10, 10, 20, 30, 70, 50];
const result= sumOfNumber(myNumbers);
console.log(result);
