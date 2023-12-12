//? Every: Retorna true o false siempre y cuando todos los elementos cumplan con la condición dada.
//? Es todo lo opuesto a some. 

const numbers = [1, 30, 49, 29, 10, 13]; 

const res1 = numbers.every((num) => num < 50); 
//console.log(res1);

const team = [
    {
      name: "Nicolas",
      age: 22,
    },
    {
      name: "Andrea",
      age: 18,
    },
    {
      name: "Zulema",
      age: 25,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const res2 = team.every((elem) => elem.age >= 18); 
  console.table(res2);

