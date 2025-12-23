
function findMax(arr){
    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }  
    return max;
}

const arr=[10,8,4,88,65,3];
const max=findMax(arr);
console.log(max)
