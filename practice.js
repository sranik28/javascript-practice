// practice-1
var harryMom= 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);


var lastMoney = harryMom - totalPrice;
console.log(lastMoney);
// practice-2
var mathematice = 75.25;
var bailogy = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalAddition = mathematice+ bailogy + chemistry + physics + bangla;
var totalMarks = (totalAddition / 5) .toFixed(2);
console.log(totalMarks);
// practice-3 
var fastline = "I am going to be";
var secondLine = "an awesomwe web developer";
var lastLine = "I am going to be" + " " + "an awesomwe web developer";
console.log(lastLine);
// practice-4

var mangoPrice1kg = 200;
var mangoPrice2kg = 200 * 2;
console.log(mangoPrice2kg);

var applePrice1kg = 300;
var applePrice2kg = 300*2;
console.log(applePrice2kg);

var anarPrice1kg = 250;
var anarPrice2kg = 250*2;
console.log(anarPrice2kg);

var komolaPrice1kg = 300;
var komolaPrice2kg = 300*2;
console.log(komolaPrice2kg);

var totalFruits = mangoPrice2kg+applePrice2kg+anarPrice2kg+komolaPrice2kg;
console.log(totalFruits);

// practice-5

var fruits = ["apple", "mango", "Banana", "orange"];

console.log(fruits["apple"]);

fruits[2] = "anar";
console.log(fruits);

var index = fruits.indexOf("mango");
console.log(index);

fruits.push("watermelon");
console.log(fruits);
 
fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

// practice-6

var mySchor = 85;
var tomSchor = 66;
var janesSchor = 95;
var pwtwrsSchor = 56;
var johnsSchor = 40;


var my = " ";
if (mySchor >=80) {
    my= "A grade";
}
else if(mySchor >=60) {
    my = "B grade";
}
else if (mySchor >=50) {
    my = "C grade";
}
else if(mySchor >=40) {
    my = "D grade";
}
else{
    my = "F gread";
}
console.log("my grade:" , my);

var tom = "";
if(tomSchor >=80){
    tom = "A grade"
}
else if(tomSchor >=60){
    tom = "B grade"
}
else if(tomSchor >= 50){
    tom = "C grade"
}
else{
    tom = "F grade"
}
console.log("tom grade:" , tom);

var janes = "";
if(janesSchor >=80){
    janes = "A grade"
}
else if(janesSchor >=60){
    janes = "B grade"
}
else if(janesSchor >= 50){
    janes = "C grade"
}
else{
    janes = "F grade"
}
console.log("janes grade:" ,janes);

var pwtwrs = "";
if(pwtwrsSchor >=80){
    tom = "A grade"
}
else if(pwtwrsSchor >=60){
    pwtwrs = "B grade"
}
else if(pwtwrsSchor >= 50){
    pwtwrs = "C grade"
}
else{
    pwtwrs = "F grade"
}
console.log("pwtwrs grade:" , pwtwrs);

var johns = "";
if(johnsSchor >=80){
    johns = "A grade"
}
else if(johnsSchor >=60){
    johns = "B grade"
}
else if(johnsSchor >= 50){
    johns = "C grade"
}
else{
    johns = "F grade"
}
console.log("johns grade:" ,johns);

// practice-7

var fastNumber = 9;
var secondNumber = 8;
var thirdNumber = 9;

if(fastNumber == secondNumber == thirdNumber){
    console.log("notIsoscales");
}
else if(fastNumber == secondNumber || fastNumber == thirdNumber){
    console.log("isoscales");
}
else{
    console.log("notIsoscales");
}
// practice-8

var fastNumber = 13;
var secondNumber = 79;
var thirdNumber =45;
if(fastNumber > secondNumber  > thirdNumber){
    console.log("notLargest")
}
else if (fastNumber > secondNumber ){
    console.log("Largest-1")
}

// practice-9

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue;
  }
  console.log(marks[i]);
};


// var a=0;
// var webDeveloper = ("i can do it");

// while(a<=100){
//     console.log(webDeveloper);
//     a++ 
// }
var webDeveloper = ("i can do it");
for(var a=0;  a <= 10; a++){
    console.log(webDeveloper)
}



const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }
   console.log(pizza.toppings[2])