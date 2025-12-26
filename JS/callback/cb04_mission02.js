const arr=[3,88,76,9,34,65]

const arr2=arr.filter(item => item % 2 === 0)//return 함수
                .map(item => item /2  )//체인닝

console.log(arr2)


const arr3=arr.filter(item=>!(item%2));
console.log(arr3);
const arr4=arr3. map(item=>item/2);
console.log(arr4);