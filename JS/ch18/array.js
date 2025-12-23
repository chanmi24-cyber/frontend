let num1=5, num2=10, num3=15, num4=20, num5=25;
const arr=[5,10,15,20,25];//대괄호는 배열 생성, 0~4번방까지 공간 할당&초기화 마친 상태
const arr2=new Array(2000);//배열 공간만 할당, 0~1999번방까지 방만 만들고 값은 넣지 않은 상태.잘안씀.
const arr3=[];
arr3.push(1);
arr3.push(2);
arr3.push(3);
console.log('arr.length:',arr.length);
console.log('arr2.length:',arr2.length);
console.log('arr3.length:',arr3.length);
arr[1]=11;
console.log(arr[0],arr[1],'...', arr[4]);
console.log('arr[5]:',arr[5]);