/*

*/
let bool1=true;
let bool2=false;

console.log('bool1:',bool1);
console.log('bool1:',bool2);

console.log('typeof bool1:', typeof bool1);
console.log('typeof bool1:', typeof (bool1));

let n1=1,n2=20;
bool1=n1>n2
console.log('n1>n2:', bool1);
console.log('-------------------');
console.log('n2<=20:',n2<=20);
console.log('n2<20:',n2<20);
console.log('-------------------');
console.log('n1==n2:',n1==n2);
console.log('n1!=n2:',n1!=n2);
//!는 not의미. ==은 양쪽이 같아야 true. !=은 달라야 true.

console.log('----------------논리연산자!(NOT)');
console.log('!(n1==n2):', !(n1==n2));//!가 있어서 결과값의 반대.
console.log('!(n1==n2):', !(n1!=n2));

console.log('----------------논리연산자&&(AND)');
console.log('true && true:',true&& true);
console.log('true && true&&false:',true&& true&&false);

console.log('----------------논리연산자||(OR)');
console.log('false||false:',false || false);
console.log('false||true||false:',false ||true|| false);