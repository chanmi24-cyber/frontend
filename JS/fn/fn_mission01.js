function abs(n){
    if(n<0){
        console.log(-n)
    } else{
        console.log(n)
    }
}

abs(-10)

function abs(num){
    console.log(num<0? -num : num);
}

function abs2(num){
    val=num;
    if(val<0){val=-val;}
    console.log(val);
}