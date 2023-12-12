//? Filter retorna un array nuevo con los elementos que cumplan con el condicional

const words = ["spray", "limit", "elite", "exuberant"]; 

const res = words.filter(word => word.length >= 7); 
// console.log(res); 


const orders = [
    {
        customerName: "Nicolas",
        total: 60, 
        delivered: true
    },
    {
        customerName: "Zulema",
        total: 120, 
        delivered: false
    },
    {
        customerName: "Santiago",
        total: 180, 
        delivered: true
    },
    {
        customerName: "Valentina",
        total: 240, 
        delivered: true
    },
    {
        customerName: "Sebastian",
        total: 2322, 
        delivered: false
    }
]; 

 const ordersFiltered = orders.filter(order => order.delivered && order.total >= 100); 
//console.log(ordersFiltered);
// console.log(orders);

const nameFiltered = orders.filter(order => order.customerName == "Nicolas")//! RECORDAR SIEMPRE QUE SEA CON DOBLE IGUAL PARA QUE TOME LA IGUALDAD Y NO MODIFIQUE EL ARRAY
// console.log(nameFiltered);
// console.log(orders);

const search = (query) => {
    return orders.filter(order => {
        return order.customerName.includes(query)
    }); 
}

console.log(search("hdbdbshjdbjs"));