//1~25까지 랜덤숫자 나올 수 있도록 작성
const rVal=parseInt(Math.random()*25.0)+1;
console.log(rVal);
//짝수였을때만 "짝수입니다"
/*if(rVal%2==0){
    console.log('짝수입니다')
};*/


if(rVal<15){
    console.log('15보다 작습니다')
} else{
    console.log('15이상입니다.')
};