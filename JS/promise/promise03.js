//async, await 사용법, 무조건 함수가 필요
//then,catch사용 하지 않음

const increaseAndPrint = (n, cb) => {
    setTimeout( () => {
        const increased = n + 1;
        console.log('increased:', increased);
        if(cb) {
            cb(increased);
        }
    }, 1000 );
}

const callFunction = async (n) => {
    const result = await increaseAndPrintPromise(n);
    //await(async함수에서만 사용가능)는 우측값이 넘어올때까지 기다려
    //이때 await우측은 무조건 promise객체 주소값이 있어야함.
    console.log('result:', result);
}
callFunction(10);
