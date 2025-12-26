const increaseAndPrint = (n, cb) => {
    setTimeout( () => {
        const increased = n + 1;
        console.log('increased:', increased);
        if(cb) {
            cb(increased);
        }
    }, 1000 );
}

//increaseAndPrint(0, n1 => {
//    increaseAndPrint(n1, n2 => {
//        increaseAndPrint(n2);
//    });
//});


/*1초 후에 호출한다.
그리고 increased:1 찍어낸 후, if(cb)에 뭐가 있니? 주소값이 있으니 true!
cb(increased)는 1이었으니, n값에 1이 들어가면서 다시 실행되고 2가 됨.
*/

const increaseAndPrintPromise = (n) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const increased = n + 1;
            console.log('increased:', increased);
            resolve(increased);//위에 increased찍고 resolve로 넘어옴.
        }, 1000 )
    });
}

increaseAndPrintPromise(10)//promise 객체주소값이 return.
.then(item=> increaseAndPrintPromise(item))
.then(item=> increaseAndPrintPromise(item))
.then(item=> increaseAndPrintPromise(item))
.then(item=> increaseAndPrintPromise(item))
.then(item=> increaseAndPrintPromise(item))
.then(item=> increaseAndPrintPromise(item))
.then(item=>console.log('--끝--'));//여기서 item은 마지막 increased 찍은 값.