

//? Some lo que hace es retornar un true o false si lo que estoy buscando cumple con la condición que necesito. 
//? Some se traduce en que si al menos algun elemento cumple con la condición me da true, si no false. 
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const numbers = [1, 3, 5,7,9,10];

const res = numbers.some((elem) => elem % 2 === 0); 

//console.log(res);



// const orders = [
//     {
//         customerName: "Nicolas",
//         total: 60, 
//         delivered: true
//     },
//     {
//         customerName: "Zulema",
//         total: 120, 
//         delivered: false
//     },
//     {
//         customerName: "Santiago",
//         total: 180, 
//         delivered: false
//     },
//     {
//         customerName: "Valentina",
//         total: 240, 
//         delivered: true
//     }
// ]; 

// const res2 = orders.some(order => order.delivered)
// console.log(res2);

// const res3 = orders.some(order => order.total == 121);
// console.log(res3);



const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
  }; 

  const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}

        )
    })
  }
 console.log("isoverlap",isOverlap(newAppointment));
