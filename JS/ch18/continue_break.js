for(let i=1; i<11; i++){
    if(i==5){
        break;
    }
    console.log(i)
}
console.log('--끝--')

for(let i=1; i<11; i++){
    if(i==5){
        continue; //skip개념. 5만 안나옴
    }
    console.log(i)
}

//반복문에 레이블 지정, 별명 지정

outer:
for(let i=0; i<10; i++){
    for(let k=0; k<10; k++){
        if(k==5){break outer;}
        console.log(`i:${i},k:${k}`);
    }
}


