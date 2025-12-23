//화살표 함수 arrow function

function sum(n1, n2){
    console.log('sum:', n1+n2);
}

sum(40,50)

const sum2=function(n1,n2){
    console.log('arrowSum:',n1+n2);
}
sum2(40,50);

const arrowSum=(n1,n2)=>{
    console.log('arrowSum:',n1+n2);
}
//호출방법은 똑같다.
arrowSum(40,50);

function pow(num){
    console.log('pow:',num*num);
}
pow(10);

const pow2=num=>console.log('pow2:',num*num)
pow2(10);

console.log('-A,B,C-')
function returnPow(num){
    return num*num;
}
const returnPow2=num=>num*num; // return함수
const returnPow3=num=>{num*num}; //void함수
const returnPow4=num=>{return num*num}; //return함수

console.log('returnPow(20):',returnPow(20));
console.log('returnPow2(20):',returnPow2(20));
console.log('returnPow3(20):',returnPow3(20));
console.log('returnPow4(20):',returnPow4(20));
