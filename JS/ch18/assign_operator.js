let n1=10;
n1=n1+5
console.log('n1:',n1);
//1)n1=10+5;
//1)n1=15;
console.log('n1:',n1);

let n3=50;
n3++;//증가연산자
++n3;//증가연산자
console.log('n3:',n3);

n3--;//감소연산자
--n3;//감소연산자
console.log('n3:',n3);

n3--;//감소연산자
--n3;//감소연산자
--n3;//감소연산자
console.log('n3:',n3);

let n4=10;
let result4=n4++;//읽기 다음 쓰기

let n5=10;
let result5=++n5;//쓰기 > 읽기

console.log('result4:', result4);//10
console.log('result5:', result5);//11
console.log('n4:', n4); //11
console.log('n5:', n5); //11

console.log('-----------------------')
let n6=10;
n6++; // 쓰기작업
console.log('n6:',n6); //읽기

let n7=10;
console.log('n7++:',n7++); //10
console.log('n7:',n7++); //11

let n8=10;
console.log('++n8:',++n8); //11
console.log('n8:',++n8); //12


let num1=2;
let num2=3;

let num3=num1-- * --num2;

console.log('num1:',num1);
console.log('num2:',num2);
console.log('num3:',num3);