const arr=[3,8,11,86,43,22,27];

let a=0;
let b=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        a=a+arr[i];
    } else if(arr[i]%2==1){
        b=b+arr[i]
    }
    }
       console.log('짝수:',a);
       console.log('홀수:',b);
