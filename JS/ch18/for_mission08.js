const star=parseInt(Math.random()*5.0)+3 //3~7랜덤값
console.log(star);


for(let a=0; a<star; a++){
    let s='';
    for(i=0; i<star; i++){
        s=s+'*';
    }
    console.log(s)
}

console.log('----------------');

let str='';
for(let i=0; i<star; i++){
    str+='*';
}
for(let i=0; i<star; i++){
    console.log(str);
}

console.log('----------------');


let a = ''
for(let j=0; j<star; j++){
    for(let i=0; i<star; i++){
        a = a + '*'
    }
    a = a + '\n';
}
console.log(a);