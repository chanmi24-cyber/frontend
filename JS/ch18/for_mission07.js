const star=parseInt(Math.random()*5.0)+3 //3~7랜덤값
console.log(star);

let s='';
for(i=0; i<star; i++){
    s=s+'*';
}
console.log(s)