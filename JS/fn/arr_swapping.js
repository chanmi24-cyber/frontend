const arr=[10,20];
//start, 사이에는 10과 20리터럴 사용금지

const temp=arr[0];
arr[0]=arr[1];
arr[1]=temp;

//end
console.log(arr);//[20,10]나오게 하고 싶음