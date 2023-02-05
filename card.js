let products = [
    {name: 'panjabi', price:2700, quantity: 3},
    {name: "shoe", price : 2000, quantity : 2},
    {name: 'pant', price: 2500 , quantity : 4},
    {name: 'shirt', price: 1500, quantity : 5},
]
function shoppingCard(totalProducts){
    let sum =0;
    for(let i =0; i<totalProducts.length; i++ ){
        const product = totalProducts[i];
        const totalCost = product.price * product.quantity;
        sum+=totalCost;
    }
    return sum;
}
const product = shoppingCard(products);
console.log(product);



let phn ={
name:"redmi",
camera:64,
stroge:32,
}
phn.stroge =60;
console.log(phn);






