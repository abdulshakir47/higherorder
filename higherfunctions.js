// Higher Order Fuctions in javascript



// Transform the value of array is called as map

var array = [2,4,6,8];
var newa = array.map((e)=> (e * 2))

console.log(newa);


// Filter is just filter the numbers

var newArray = [1,2,3,4,5,6,7];
var newOne = newArray.filter((e)=>(e % 2 !== 0))
console.log(newOne);

// Reduce in Javascript

//Reduce is maily used to find sum,maximum value in an array

var sum = [2,3,4,5,7,8,9];
var newOneArray = sum.reduce((acc,cur)=>(acc+=cur),0)

console.log(newOneArray);



var newOneArr = sum.reduce((max,cur)=>{
    if(cur > max){
        max = cur;
    }
   return max;
},0)

console.log(newOneArr);



//Use Cases

const user = [
    {firstName:'Abdul',lastName:"Shakir",age:22},
    {firstName:'Charan',lastName:"Manvit",age:22},
    {firstName:'sam',lastName:"Shetty",age:19},
    {firstName:'Vijesh',lastName:"N K",age:21},
];

// Find the fullName of users
 
const output = user.map((e)=>(e.firstName+' '+e.lastName))

console.log(output);

const out = user.filter((e)=>(e.age))
console.log(out);


// acc:{19:1, 21:1, 22: 2}

const reducefun = user.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age] += 1
    }
    else{
        acc[cur.age] = 1
    }
    return acc
},{})


console.log(reducefun);

// firstName of the users whose age is less than 19

const first = user.filter((e)=>{
    if(e.age < 22){
        console.log(e.firstName);
    }
})


const firsts = user.filter((e)=>(e.age < 22)).map((x)=>(x.firstName))
console.log(firsts);

// TODO:Using reduce: Home work
//output : ['sam','vijesh']


const nest= user.reduce((acc,cur)=>{
    if(cur.age < 22){
        acc.push(cur.firstName)
    }
    return acc
},[])
console.log(nest);