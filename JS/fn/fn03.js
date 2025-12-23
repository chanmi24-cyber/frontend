function add(n1,n2){return n1+n2}

function pow(num){return num*num}

function addAndPow(n1,n2){
    const result=add(n1,n2);
    return pow(result);
}
const r1=addAndPow(3,4);
console.log(r1);