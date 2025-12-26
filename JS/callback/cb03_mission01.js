const arr=[3,88,76,9,34,65]

const newArr=arr.filter((item)=>{
    return item<=70
});
console.log(newArr);

//3,88,76,9만 살린 새로운 배열 만들기

const arr3=arr.filter((item,i)=>i<4);
console.log(arr3);
