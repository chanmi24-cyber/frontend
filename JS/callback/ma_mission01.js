//ma_mission01.js
const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    '6':77,
    'length': 6,
    'forEach': function (fn) { //외부에서 전달받는 함수,여기 안에서 바깥fn이랑 같을 필요없음
        for(let i=0; i<this.length; i++){
            fn(this[i],i)

        }
    }
}
const fn=(item, idx)=> {
    console.log(`arr[${idx}]: ${item}`);
};

myArr.forEach((item,idx)=>{
    console.log(`arr[${idx}]: ${item}`);
});
myArr.forEach(fn);//호출, fn이 매개변수로 전달, for문 시작
/* 즉,
fn(3, 0)
fn(88, 1)
fn(76, 2)
fn(9, 3)
fn(34, 4)
fn(65, 5) */