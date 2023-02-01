// function isLeapyear(year){
//     const remainder = year%4;
//     if(remainder === 0){
//         return true ;
//     }
//     else{
//        return false ;
//     }
// }
// const isMyYear= isLeapyear(2004);
// console.log("my year:", isMyYear);

// const herYear= isLeapyear(2022);
// console.log("her year:", herYear)


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