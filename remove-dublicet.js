//  same name bar bar thakle take remove kore ekta name near jonno-----------

function removeDublicet(names){
    let result = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(result.includes(name) === false){
            result.push(name);
        }
    }
    return result;
}
let totalName = ["abul", "abul", "babul", "babul", "kobul", "dabul", "habul", "cabul", "mokbul", "bulbul"]
const result = removeDublicet(totalName);
console.log(result);