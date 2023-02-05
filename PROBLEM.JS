// function onlyPositive(number){
//     let numbers = [];
//     for(let i = 0; i<number.length;i++){
//         if(number[i]<0){
//             break;
//         }
//         else if(number[i]>=0){
//             numbers.push(number[i])
//         }
//     }
//     return numbers;
// }
// // const num=[0, 2, 45, 2, -2, 2, 35 ]
// const result = onlyPositive([0, 2, 45, 2, -2, 2, 35 ]);
// console.log(result);


// function bestFriend(name){
//     let bigest=[0];
//     for(let i=0; i<name.length;i++ ){
//        if(bigest.length<name[i].length){
//         bigest=name[i];
//        } 
//     }
//     return bigest;
// }
// const names= ['abul', "babul", "bulbul", 'cul bul pande', "kabul"];
// const result = bestFriend(names);
// console.log(result);

// function onlyPositive(number){
//     let output = [];
//     for( let i=0; i<number.length; i++){
//         if(number[i]<0){
//             break;
//         }
//         else if(number[i]>=0){
//             output.push(number[i]);
//         }
//     }
//     return output;
// }
// const numbers = [1, 2, 3, 6, -2, -5, 5];
// const result= onlyPositive(numbers);
// console.log(result);
 



// function paperRequirements(firstBookQuantity,secondBookQuantity,thirdBookQuantity){
//     let first100Book=100;
//     let second200Book=200;
//     let third300Book= 300;

//     const first100Price = firstBookQuantity * first100Book;
//     const second200Price = secondBookQuantity * second200Book;
//     const third300price = thirdBookQuantity * third300Book;

//     const totalbookprice = first100Price + second200Price + third300price;

//     return totalbookprice;
// }
// // const book=(2,2,3);
// const result=paperRequirements(2, 3, 5);
// console.log(result);


// function getNumberOdd(number){
//     let sum = 0;
//     let output =[];
//     for(i=0;i<number.length; i++){
//         const element=number[i];      
//         sum+=element;
//         if(element % 2 !==0){
//             output.push(element)
//         }
//     }
//     return output;
// }
// const numbers= [25, 54, 75, 98, 34, 44];
// const result= getNumberOdd(numbers);
// console.log("this is odd number:", result);

// function getEvenNumber(number){
//     let sum = 0;
//     let output = [];
//     for(i=0; i<number.length; i++){
//         let element=number[i];
//         sum+=element;
//         if(element % 2 ===0){
//             output.push(element);
//         }
//     }
//     return output;
// }
// const numbers = [22, 74, 75, 55, 45, 12];
// const result = getEvenNumber(numbers);
// console.log("this is even number:", result);



// easy rule second lasrgest number

// function secondLargestNumber(number){
//     let fristLargest = 0;
//     let secondLargest = 0;
//     for(i=0; i<number.length; i++ ){
//         let index = number[i];
//         if(index > fristLargest){
//             secondLargest =fristLargest;
//             fristLargest = index;
//         }
//     }
//     return secondLargest;
// }
// const numbers= [200, 400, 750, 500, 900, 1000, 2000];
// const result = secondLargestNumber(numbers);
// console.log(result);

// Mathematics, Biology, Chemistry, Physics,
// 75.25, 65, 80, 35.45, 99.50

// let Bangla = 99.50;
// let Mathematics =75.25;
// let Biology = 65;
// let Chemistry = 80;
// let  Physics = 35.45;

// let sum = Bangla + Mathematics + Biology + Chemistry + Physics;
// let totalSum = sum / 5;
// console.log(totalSum.toFixed(2))


// let first= "I am going to be";
// let secound = "an awesome web developer";

// console.log(first+ " "+ secound);

// let number= 119;
// let num = number % 5;
// console.log(num);

// যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.

// let myNumber =85;
// let aliNumber = 95;
// let daliaNumber = 66;
// let caliaNumber = 80;
// let maliaNumber = 59;
// let liliaNumber = 47;

// if(myNumber>=90){
//     console.log("My grade: A+")

// }
// else if(myNumber>=80){
//     console.log("my grade: B")
// }
// else if(myNumber>=70){
//     console.log("my grade: C")
// }
// else if(myNumber>=60){
//     console.log("my grade: D")
// }
// else if(myNumber>=50){
//     console.log("my grade: F")
// }

// if(aliNumber>=90){
//     console.log("My grade: A+")

// }
// else if(aliNumber>=80){
//     console.log("my grade: B")
// }
// else if(aliNumber>=70){
//     console.log("my grade: C")
// }
// else if(aliNumber>=60){
//     console.log("my grade: D")
// }
// else if(aliNumber>=50){
//     console.log("my grade: F")
// }

// if(daliaNumber>=90){
//     console.log("My grade: A+")

// }
// else if(daliaNumber>=80){
//     console.log("my grade: B")
// }
// else if(daliaNumber>=70){
//     console.log("my grade: C")
// }
// else if(daliaNumber>=60){
//     console.log("my grade: D")
// }
// else if(daliaNumber>=50){
//     console.log("my grade: F")
// }

// if(caliaNumber>=90){
//     console.log("My grade: A+")

// }
// else if(caliaNumber>=80){
//     console.log("my grade: B")
// }
// else if(caliaNumber>=70){
//     console.log("my grade: C")
// }
// else if(caliaNumber>=60){
//     console.log("my grade: D")
// }
// else if(caliaNumber>=50){
//     console.log("my grade: F")
// }
// if(maliaNumber>=90){
//     console.log("My grade: A+")

// }
// else if(maliaNumber>=80){
//     console.log("my grade: B")
// }
// else if(maliaNumber>=70){
//     console.log("my grade: C")
// }
// else if(maliaNumber>=60){
//     console.log("my grade: D")
// }
// else if(maliaNumber>=50){
//     console.log("my grade: F")
// }

// if(liliaNumber>=90){
//     console.log("My grade: A+")
// }
// else if(liliaNumber>=80){
//     console.log("my grade: B")
// }
// else if(liliaNumber>=70){
//     console.log("my grade: C")
// }
// else if(liliaNumber>=60){
//     console.log("my grade: D")
// }
// else if(liliaNumber>=50){
//     console.log("my grade: F")
// }

// let singel = "red"

// if(singel==="red"){
//     console.log("gele mara khabi")
// }
// else if(singel==="yellow"){
//     console.log('aste ja naile mair khabi')
// }
// else if(singel==="green"){
//     console.log("vag pagla")
// } 

// let fruits = ['Apple', 'Banana', 'Orange'];

// let index = fruits.indexOf("Banana");
// console.log(index);

// fruits[1]="Mango";
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.push("Watermelon");
// console.log(fruits);

// let num1 = 13;
// let num2 = 79;
// let num3 = 80;
// if(num1>num2 && num1>num3){
//     console.log(num1);
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2);
// }
// else if (num3>num1 && num3>num2){
//     console.log(num3);
// }


// let num1 =9; 
// let num2 =8; 
// let num3 =9; 

// if(num1 == num2 == num3){
//     console.log("notIsoscales")
// }
// else if(num1==num2 || num1==num3){
//     console.log("Isoscales")
// }

// let num1 =  "রাত ৮ টা বাজে মডিউল আনলক করো"
for(i=0; i<5; i++){
    console.log( "১ রাত ৮ টা বাজে মডিউল আনলক করো  ২ ফটাফট ভিডিও দেখে দেখে প্রাকটিস কর ৩ ভিডিও দেখতে দেখতে নোটস নাও ৪ মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ৫ কোন কিছু বুঝতে না পারলে চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে , সাপোর্ট সেশনে জয়েন করো ")
}
