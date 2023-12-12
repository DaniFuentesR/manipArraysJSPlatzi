const items = [1, 3, 2, 3]; 

const res = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1; 
    }else{
        obj[item] = obj[item] + 1; 
    }
    return obj
},{})

console.log(res);


//output
// {
//     1 = 1,
//     3 = 2,
//     2 = 1
// }