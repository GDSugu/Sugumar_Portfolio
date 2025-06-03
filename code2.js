
//problem 1

/*
Write a Javascript Function to turn the Keys as Capital Letter  / Uppercase
Input ={jack:"Three", jill: "Two",And:"one"};
Expected Output= {JACK: "Three",JILL: "Two",AND: "one"}
        
Key :Val                Key : Capital Letter  / Uppercase                     Value : Remain
*/


let obj = {jack:"Three", jill: "Two",And:"one"};

let finObj = Object.keys(obj).reduce((accum, val) => {
    accum[val.toUpperCase()] = obj[val];
    return accum;
},{}) //Pref

// let temp = Object.fromEntries(Object.entries(obj).map(val =>{ 
//     val[0] = val[0].toUpperCase()
//     return val;
// }))

console.log(finObj);

// console.log(temp);

// let output = {}
// for(let key in obj){
//     output[key.toUpperCase()] = obj[key];
// }
// console.log(output);

let expOut = {JACK: "Three",JILL: "Two",AND: "one"};


//problem 2


/* Write a Javascript Function to find the Number  of Occurrence of Each element in the Array, can use any one of the Method Map, Filter, Object Method, For, Foreach 

Input = [3,4,3,5,3,6] 

Expected Output : {3:3,4:1,5:1,6:1} 

Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 
*/


let arr = [3,4,3,5,3,6];

let count = arr.reduce((accum, val)=>{
    if(accum[val] == undefined){
        accum[val] = 0;
    }
    accum[val]+=1;
    return accum;
},{})

console.log(count)
let expeOut = {3:3,4:1,5:1,6:1}


//problem 3

/*Write a Javascript Function to find the Number of  Occurrence of Each String in the Array, 
 can use any one of the Method Map, Filter, Object Method, For, Foreach 


Input = ["jack","And","jack", "jill","jack","jill"]

Expected output: ["jack": 3, "jill": 2,’And’:1]


Output may be a  [Key : Val ]- List      or       {Key : Val }- Object 
*/
//         0       1      2       3      4     5
let arr = ["jack","And","jack", "jill","jack","jill"];

let count = arr.reduce((accum, val)=>{
    if(accum[val] == undefined){
        accum[val] = 0;
    }
    accum[val]+=1;
    return accum;
},{})

console.log(count)

function countFunc(arr, i){
    let c = 0;
    for(let val of arr){
        if(val == i) c++;
    }
    return c;
}


let filteredArr = arr.filter((val,ind) => arr.indexOf(val)==ind)

let obj = {}

for(let i of filteredArr){
    obj[i] = countFunc(arr, i);
}

console.log(obj)

console.log(filteredArr)


//problem 4




let arr = [
    {
        "id" : 5,
        "name" : "Mobile",
        "price" : 15000
    },{
        "id" : 2,
        "name" : "Camera",
        "price" : 45000
    },{
        "id" : 3,
        "name" : "Headphones - TWS",
        "price" : 5000
    },{
        "id" : 4,
        "name" : "Projector",
        "price" : 15000
    },{
        "id" : 1,
        "name" : "Mobile",
        "price" : 150000
    },{
        "id" : 6,
        "name" : "Laptop",
        "price" : 75000
    },
]


// Sort based on price desc, and id asc


// 5,6,2,1,4,3

console.log(arr.sort((a,b)=> b.price - a.price || a.id-b.id))


//problem 5



let obj = {jack:"Three", jill: "Two",And:"one"};

let out = Object.keys(obj).reduce((accum, val)=>{
    accum[obj[val]] = val;
    return accum;
},{})

console.log(out);
let expOutput = {"Three" : "jack", "Two" : "jill", "one" : "And"}



//problem 6

/*


0 <= array-values < n
// Input
n -> 4
arr -> [3,1,0,2]
temp - Int



//Process
arr[i] = arr[arr[i]]

arr[0] = arr[arr[0]] = arr[3] = 2
arr[1] = arr[arr[1]] = arr[1] = 1
arr[2] = arr[arr[2]] = arr[0] = 3
arr[3] = arr[arr[3]] = arr[2] = 0


//Output
arr -> [2,1,3,0]

O[1]

*/




let arr = [2,3,1,0]
let n = arr.length
console.log(arr);
for(let i = 0 ; i < n; i++){
    arr[i] = (arr[arr[i]]%n)*n+arr[i]
}

for(let i = 0 ; i < n ; i ++)
    arr[i] = Number.parseInt(arr[i]/n)


console.log(arr)

