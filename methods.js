/*
.forEach(array, callback, thisArg)
.map(array, callback, thisArg)
.filter(array, callback, thisArg)
.find(array, callback, thisArg)
*/

const products = [
  { id: 1, 
    name: "Laptop",
    category: "Electronics",
     price: 999.99,
     rating: 4.5,
    instock: true },

  { id: 2, 
    name: "Smartphone",
    category: "Electronics",
     price: 699.99,
     rating: 4.2,
    instock: false },

  { id: 3, 
    name: "Tablet",
    category: "Electronics",
     price: 399.99,
     rating: 4.0,
    instock: true },

    { id: 4,
     name: "Headphones",
     category: "Electronics",
     price: 500.99,
     rating: 4.8,
    instock: true }
];

//foreach method to log the names of all products in stock 
/*console.log("Products in stock:");
products.forEach(product => {
  if (product.instock) {
    console.log(`- ${product.name} ($${product.price})`);
  }
}); */

products.forEach((product, index) => {
    console.log(product.name );
});

//calculate the discount for each product using the map method and apply a discount
products.forEach((product) => {
    product.discountedPrice = product.price * 0.9; // Apply a 10% discount
});
console.log(products);


//map method to create a new array of product names
const returns = products.map((product) =>{
  const projectReturns = {
    name: product.name,
    expectedReturns: products.price * product.quantity
  };
  return projectReturns;
});
