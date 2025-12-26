const arr=[3,88,76,9,34,65];



const arr2=arr.map(item=>{
    if(item%2===1){
        return item;
    }
    return item +2;
})
console.log(arr2)

const arr3=arr.map(item=>item%2? item:item+2);
console.log(arr3)

const arr4 = arr
  .filter(item => item % 2 === 0)  // 짝수만 남김
    .map(item => item + 2);   