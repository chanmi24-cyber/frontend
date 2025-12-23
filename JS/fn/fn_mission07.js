
function sumArr(arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}

const arr=[10,8,4,88,65,3,99];
const sum=sumArr(arr);//배열의 모든 값을 더한 값을 리턴하는 함수

console.log(sum)