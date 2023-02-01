// function number(num1, num2, num3){
//     console.log(num1, num2, num3);
//     console.log("my number");
    
// }
// number(20, 25, 30)

// function sum(a, b, c, d, e){
//     console.log(a, b, c, d, e);
//     var sum= a+b+c+d+e;
//     console.log(sum)

// }
// sum(22, 23, 25, 30 )

// function singara(num1,num2){
//     console.log(num1, num2)
//     var sum = num1+num2;
//     // console.log(sum)
//     return sum;
// }
// var total= singara(250, 200)
// console.log("total",total)

// function foo(){
//     bar()
//     console.log("foo")
// }
// foo()
// function bar(){
//     console.log("bar")
// }
// bar()

// function singara(money){
//     var singaraPrice = 10;
//     var quantity =money/singaraPrice;

//     return quantity;
// }

// var singaras = singara(500)
// console.log("aij nao", singaras)

// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],
   
//     crust: 'deep dish',
   
//     serves: 2
   
//    }
//    var pizza2 = Object.values(toppings)
//    console.log(pizza2)

// var number=3;
// for (var i=1; i <=10; i++  ){
//     var result=i*number
//     console.log(result)
// }

// function multiplication(){
//     for (i=1; i<=10; i++){
//         console.log(13+ " * " + i + " = " + 13*i )
//     }
// }
// var math=multiplication()



// var numbers=[10, 20, 30, 40, 50, 40, 50, 20]
// function makeAvg(ints){
//     var total=0;
//     for(i=0;i<ints.length;i++){
//         var number=ints[i];
//         total=total+number;
//     }
//     var avarage=total/ints.length;
//     return avarage;
// }
// var result = makeAvg(numbers)
// console.log(result)


var numbers=48;
function isEven(numbers){
    if(numbers%2 ==0){
        
        return "true"; 
    }
    else{
        return "false";
    }     
}
var myNumber= isEven(numbers) ;
console.log(myNumber);
 



// function fullname(fastName, lastName){
//     var fullN= fastName + " " + lastName;
//     return fullN;
// }
// var name1= "hablu";
// var name2= "bablu";

// var full=fullname(name1, name2);
// console.log("my full name:", full);