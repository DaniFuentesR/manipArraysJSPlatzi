// METODOS MUTABLES: Modifican elementos del array principal (push, splice, etc)

// METODOS INMUTABLES: No modifican el array principal, simplemente crean una copia de un nuevo array con la info (map, filter)

const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// const productIndex = products.findIndex(elem => elem.id === "🍔");
//     if(productIndex !== -1) {
//         myProducts.push(products[productIndex]); //aca quiero que al array myProducts se agregue el producto que encontré del array products con findIndex, en esa posición que busqué, que era la que tuviera el id igual a hamburguesa, por lo que me da el numero de la posición, en este caso 2

//         products.splice(productIndex, 1); //splice lo que hace es como primer parametro eliminar del array products lo que busqué en productIndex y como segundo parametro la cantidad de elementos que quiero eliminar, en este caso 1, que es hamburguesa
    //}
// products [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Hot cakes', price: 121, id: '🥞' }
// ]
// myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]

    console.log("products", products);
    console.log("myProducts", myProducts);
    console.log("-".repeat(10));


//UPDATE

const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "Delicious"
    }
}

const productIndex = productsV2.findIndex(item => item.id === update.id);
    productsV2[productIndex] = {...productsV2[productIndex], ...update.changes}; 
    console.log(productsV2);

// productsV2 = 
//     [
//         { title: 'Pizza', price: 121, id: '🍕' },
//         { title: 'Burger', price: 121, id: '🍔' },
//         {
//           title: 'Hot cakes',
//           price: 200,
//           id: '🥞',
//           description: 'Delicious'
//         }
//       ]