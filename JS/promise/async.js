/*자바스크립트는 싱글 스레드, 비동기처리
스레드는 하나. 스레드? 프로그램 안에서 실행단위(일하는 사람1명. 한번에 한가지 일만 처리한다.)
*/

setTimeout( ()=>{
    console.log('첫번째 setTimeout');
},1000);

setTimeout( ()=>{
    console.log('두번째 setTimeout');
},900);

setTimeout( ()=>{
    console.log('세번째 setTimeout');
},800);

console.log('------------------------');


setTimeout( ()=>{
    console.log('첫번째 setTimeout');

    setTimeout( ()=>{
    console.log('두번째 setTimeout');

        setTimeout( ()=>{
        console.log('세번째 setTimeout');
        },800);

    },900);

},1000);



