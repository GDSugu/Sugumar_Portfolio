// Problem 1

//Solution:1

// let s = [1,2,3,4,5,6]
    
//     let sum = s.reduce((accum,value)=>accum+value,0);
//     let cursum = 0;
//     let finalArray = []

//     for(let i=0;i<s.length;i++){
//         cursum+=s[i];
//         finalArray.push(sum-cursum)
//     }
    // console.log(finalArray)

    //Solution:2

// let n = [1,2,3,4,5,6]

// let total = 0;

// for(let i=n.length-1;i>=0;i--){
//     total+=n[i];
//     n[i] = total-n[i];

// }

// console.log(n)


// Problem 2

// Solution:1

// let m = 64;

// if(m&(m-1) == 0){
//     console.log("yes")

// }else{
//     console.log("NO")
// }

// Solution:2

// let l = 64;
// while (l%2 == 0){
//     l/=2
// }
// if(l == 1){
//     console.log("yes")
// }else{
//     console.log("NO") 
// }


//Problem 3

// Solution:1

let obj = {
    "name" : "sugumar",
    "place" : "villupuram",
    "Education" : "Engineering",
    "Job" : "MERN stack developer"
}

let s = Object.keys(obj).reduce((accum,value)=>{
    accum[value.toUpperCase()] = obj[value];

    return accum;

},{})

console.log(s)

// let s = Object.entries(obj)
// for(let [key,value] of s){
//     if(value.length %2 == 0){
//         delete obj[key]
//     }
// }

// console.log(obj)


// let arr = [2,3,1,0]
// let n = arr.length
// console.log(arr);

// for(let i = 0 ; i < n; i++){
//     arr[i] = (arr[arr[i]]%n)*n+arr[i]
// }

// for(let i = 0 ; i < n ; i ++)
//     arr[i] = Number.parseInt(arr[i]/n)


// console.log(arr)

//problem 4

// let obj = {
//     "name" : "sugumar",
//     "place" : "villupuram",
//     "Education" : "Engineering",
//     "Job" : "MERN stack developer"
// }

// let s = Object.keys(obj).reduce((accum,value)=>{
//      accum[obj[value]] = value;
//      return accum;
// },{})


// console.log(s)


//problem 5

let arr = [
    {
        "id" : 5,
        "name" : "Mobile",
        "price" : 15000
    },
    {
        "id" : 2,
        "name" : "Camera",
        "price" : 45000
    },
    {
        "id" : 3,
        "name" : "Headphones - TWS",
        "price" : 5000
    },
    {
        "id" : 4,
        "name" : "Projector",
        "price" : 15000
    },
    {
        "id" : 1,
        "name" : "Mobile",
        "price" : 150000
    },
    {
        "id" : 6,
        "name" : "Laptop",
        "price" : 75000
    },
]


// let s = arr.sort((a,b)=> a.id-b.id)

// console.log(s)

// let arr = ["jack","And","jack", "jill","jack","jill"];

// let count = arr.reduce((accum,value)=>{

//     if(accum[value] == undefined){
//         accum[value] = 0;
//     }
//     accum[value]+=1;
//     return accum;

// },{})

// console.log(count)

// let obj = {jack:"Three", jill: "Two",And:"one"};

// let s = Object.keys(obj).reduce((accum,value)=>{

//     accum[obj[value]] = value;
//     return accum;

// },{})

// console.log(s)

// Input = [3,4,3,5,3,6] 

// let s = Input.reduce((accum,value)=>{
//     if(accum[value] == undefined){
//         accum[value] = 0
//     }

//     accum[value]+=1;
//     return accum
// },{})

// console.log(s)

// let obj = {jack:"Three", jill: "Two",And:"one"};

// let s = Object.keys(obj).reduce((accum,value)=>{
//     accum[value.toUpperCase()] = obj[value]
//     return accum;

// },{})

// console.log(s)

let n = [1,2,3,4,5,6]

let total = 0;

for(let i=n.length-1;i>=0;i--){
    total+=n[i];
    n[i] = total-n[i];

}

console.log(n)