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
        delivered: false
    },
    {
        customerName: "Valentina",
        total: 240, 
        delivered: true
    }
]; 
console.log("original", orders);
const res = orders.map (item => item.total); 
console.log("res", res);

// const res2 = orders.map (item => {
//     item.tax = .19;
//     return item; 
// }); 

// console.log("res2", res2);

const res3 = orders.map (item => {
    return{
        ...item,
        tax: .19
    }; 
}); 

console.log("res3", res3);
console.log("original", orders);