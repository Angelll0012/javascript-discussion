/*
for...in
object.keys()
object.values()
object.entries()
*/

const product ={
    id: 1,
    name: "Laptop",
    price: 1000,
    brand: "Dell"
};

for(let key in product){
    console.log(product[key]);
}

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));


