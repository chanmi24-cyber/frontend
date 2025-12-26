const arr=[3,88,76,9,34,65];

const result=arr.reduce((prev,current)=>{
    return prev+current;
})
console.log(result)

const result2=arr.reduce((prev,current)=>{
    return prev+current;
},0);
console.log(result2)