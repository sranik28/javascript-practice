// const inches=144;
// const myFeet=myInches/12;
// console.log(myFeet)

function inchFeet(inche){
    const feet = inche/12;
    return feet;
}
const dadaInches=144;

const dadaFeet= inchFeet(dadaInches);
console.log("dada feet", dadaFeet);

const nanaInches = 250;
const nanaFeet= inchFeet( nanaInches).toFixed(2);
console.log("nana feet" ,nanaFeet)