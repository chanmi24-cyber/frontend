/* condition_exp.js
조건식(삼항식)
식? true일때 :기준으로 false일때
*/
const result=10%2==0 ?'짝수':'홀수';
console.log('result:',result);

let val=11;
const result1= val %2 == 0 ? '짝수':'홀수';
console.log('result1:',result1);

let val1=11;
const result2= val %2 == 1 ? '홀수':'짝수';
console.log('result2:',result2);