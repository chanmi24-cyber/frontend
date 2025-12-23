const changeBoxNum=(box)=>{
    box={ 
        num:30 
    } 
    box.num=20; 
    return box; //이 객체를 아래 box객체로 돌려줌
}
let box = { num: 10 };
let newBox=changeBoxNum(box);//함수가 반환한 객체를 저장
changeBoxNum(box);//함수호출

console.log(box.num); // 출력
console.log(newBox.num)