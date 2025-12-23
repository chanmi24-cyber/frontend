function sum(n1,n2){
    console.log('sum:',n1+n2); //
}

const con1=sum;
console.log(typeof con1); // function
con1(20,30);//50

console.log('1:',sum);//1: [Function: sum]
sum(10,20);//30
sum='abc';//sum을 변경함.
console.log('2:',sum)//abc


