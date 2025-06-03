
// let arr = [
//     {
//         "id" : 5,
//         "name" : "Mobile",
//         "price" : 15000
//     },{
//         "id" : 2,
//         "name" : "Camera",
//         "price" : 45000
//     },{
//         "id" : 3,
//         "name" : "Headphones - TWS",
//         "price" : 5000
//     },{
//         "id" : 4,
//         "name" : "Projector",
//         "price" : 15000
//     },{
//         "id" : 1,
//         "name" : "Mobile",
//         "price" : 150000
//     },{
//         "id" : 6,
//         "name" : "Laptop",
//         "price" : 75000
//     },
// ]


// let s = arr.sort((a,b)=>a.id-b.id);

// console.log(s)


let arr = {jack:"Three", jill: "Two",And:"one"};
let out = Object.keys(arr).reduce((accum,value)=>{
    accum[value.toUpperCase()] = arr[value];
    return accum
},{})

console.log(out)
