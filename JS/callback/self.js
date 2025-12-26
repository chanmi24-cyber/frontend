const arr=[3,88,76,9,34,65]
//짝수만 골라내고 나누기 2한 배열
const arr2=arr.filter(item=>item%2===0)
.map(item=>item/2)
console.log(arr2)

//아이템 모두 +2 처리한 새로운 배열 생성
const arr3=arr.map(item=>item+2);
console.log(arr3)

//arr 배열에서 짝수만 +2한 새로운 배열
const arr4=arr.map(item=>{
    if(item%2==1){return item;}
    return item+2;
})
console.log(arr4)

//70이하 값들만 있는 새로운 배열
const arr5=arr.filter(item=>{
    return item<=70;
})
console.log(arr5)

//3,88,76,9만 살린 새로운 배열 만들기
const arr6=arr.filter((item,i)=>i<4)
console.log(arr6)

//arr[i]:item으로 나오기(forEach는 읽는것이 목적)
arr.forEach((item,idx)=>{
    console.log(`arr[${idx}]:${item}`);
});

console.log('------------------')

const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    'length': 6,
    'forEach': function (fn) {
        for(let i=0; i<this.length; i++){
            fn(this[i],i)//함수호출

        }
    }
}

myArr.forEach((item, idx)=>{
    console.log(`arr[${idx}]: ${item}`);
});