function voidadd(n1,n2){
    let sum=n1+n2;
    console.log('voidadd-sum:',sum)
    return; //생략가능
}

function returnadd(n1,n2){
    let sum= n1+n2;
    return sum;//값과 함께 돌아가겠다. 명시를 해야되기 때문에 생략불가능 
}

const voidval= voidadd(10,20);
voidadd(10,20);//void함수는 외롭게 있어야한다.

const returnval=returnadd(10,20);//return함수는 리턴값을 보통저장한다.

console.log('voidval:',voidval);
console.log('returnval:',returnval);