//? Join: Los elementos del me permite unificarlos y/o separlos mediante alguna expresion y me lo convierte en un string
//? Split: Me permite hacer que si tengo un String, por medio de alguna expresión (espacio, guion, punto) que tenga el string, en esa expresión que yo le indique en el split, lo va a separar y me lo va a dar como un elemento independiente dentro de un array. 


const elements = ["fire", "Air", "Water"]; 

const res1 = elements.join(" - "); //=> "fire - Air - Water"
//console.log(res1);

const title = "Curso de Manipulación de arrays"

const titleSeparated = title.split(" ") // => ["Curso", "de", "Manipulación", "de", "arrays"]; 
//console.log(titleSeparated);

const url = title.split(" ").join("-").toLowerCase(); 
console.log(url);