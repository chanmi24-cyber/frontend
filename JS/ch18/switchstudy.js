const score=parseInt(Math.random()*5.0)+1;
console.log(score);

let result='모'

if(score==1){
    result='도'
} else if(score==2){
    result='개'
} else if(score==3){
    result='걸'
} else if(score==4){
    result='윷'
}
console.log(result)

switch(result){
 case'도':
 console.log('한칸전진')
}
