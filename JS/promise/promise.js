
//new Promise(함수 주소값);



let val = 10;
const p1 = new Promise( (resolve, reject) => {
if(val % 2) { //홀수,if문 안에 값이 0일경우 false로 뜨기때문에 홀수.
resolve('홀수'); //then메소드에 전달된 콜백함수가 호출, 아규먼트값이 넘어간다.
} else { //짝수
reject('짝수');
}
}); //p1에는 promise객체 주소값 저장

p1
.then( item => console.log('then-item:', item) ) //resolve값이 false일 경우 실행. 순서중요!
.catch( item => console.log('catch-item:', item) ); //reject값.
//catch는 Promise가 rejected 상태가 되었을 때 실행된다.