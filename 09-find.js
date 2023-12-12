//? Find a diferencia del metodo filter, me devuleve unicamente el objeto o elemento que cumple con la condición, no me lo va a devolver en un array como si lo hace filter. 

//? Filter siempre va a devolver un solo elemnto, que es el primero que cumpla con la condición. si no encuentr nada me retorna un UNDEFINED. 

const numbers = [1, 30, 49, 29, 10, 13]; 

const res1 = numbers.find ((num) => num === 2); 
//console.log(res1);



const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const res2 = products.find ((elem) => elem.id === "🍔"); 
console.log(res2);

// FindIndex lo que hace es darme la posición en la que se encuentra ese elemento que estoy buscando. Si no encuentra el elemento me va a retornar un -1. 
const res3 = products.findIndex ((elem) => elem.id === "🍔"); 
console.log(res3);