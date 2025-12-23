const rVal=parseInt(Math.random()*10.0)+1;
console.log(rVal);

if(rVal>=8){
    console.log(`${rVal}값은 8이상이다`);
} else if(rVal%2==1){
    console.log(`${rVal}값은 홀수이다.`);
} else{
    console.log('8미만 짝수이다');
}

if(!(rVal%2==0)){
    console.log(`${rVal}값은 홀수이다.`);
}