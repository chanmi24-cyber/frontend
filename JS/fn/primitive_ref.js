const changeNum=(n)=>{
    n=20;
}

let num=10;
changeNum(num);

console.log('num:',num)

console.log('----------')
const changeBoxNum=(box)=>{ // 여기의 box는 호출하기 위함. 호출하고 나면 죽음.
    box.num=20;
}
let box={
    num:10
};

console.log('box.num:',box.num);
changeBoxNum(box); // let box의 값을 const changeBoxNum에 값 변경하기 위함.
console.log('box.num:',box.num); //변경 후 box안의 값.





