function sum(n1,n2){
    return n1+n2;
}

function calc(fn, n1, n2){//fn에는sum의 주소값이 담겨있음
    return fn(n1,n2);
}

const result=calc(sum, 10, 20);
console.log('result:',result)