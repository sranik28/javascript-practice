function positiveNumbers(number){
    let numbers = [];
    for(let i = 0; i<number.length; i++){
        if(number[i] <0){
            break;            
        }
        else if(number[i] >=0){
            numbers.push(number[i]);          
        }       
    }
    return numbers;
}
const num =[0, 1, -2, 2, -5, -6, -1];
const result=positiveNumbers(num);
console.log(result)