const arr=[3,88,76,9,34,65]
const oddArr=arr.filter(item=>item%2===1);
console.log(oddArr);
console.log(arr);

const oddArr=arr.filter( (item) =>{
    return item %2 ===1;
});