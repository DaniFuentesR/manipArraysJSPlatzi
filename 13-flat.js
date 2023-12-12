const matriz = [
    [1,2,3],
    [4,5,6,[1,2,[1,2]]],
    [7,8,9]
];

const res1 = matriz.flat(3); // Flat me ayuda a aplanar un array, dentro del parentesis lo que debo colocar es la cantidad de niveles de arrays que quiero que aplane. En este caso 3 niveles. 

console.log(res1); 
// => [
//     1, 2, 3, 4, 5, 6,
//     1, 2, 1, 2, 7, 8,
//     9
//   ]

