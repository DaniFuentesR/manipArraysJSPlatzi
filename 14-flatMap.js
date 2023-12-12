const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const res1 = users.map(user => user.attributes).flat(); 
//console.log(res1);
// => [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const res2 = users.flatMap(user => user.attributes); // => flatMap() me ayuda a en un solo metodo aplanar un array y poder hacerle cambios o traerme algun atributo en un nuevo array. OJO, Con flatMap no se puede aplanar por niveles. 
//console.log(res2);


const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rta3 = Object.values(calendars).flat(2).map(item => item.startDate); // Object.values => me ayuda a convertir un objeto en un array. 
  console.log(rta3);

