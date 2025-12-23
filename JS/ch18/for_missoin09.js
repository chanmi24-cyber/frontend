const star = parseInt(Math.random() * 5.0) + 3; //3~7랜덤값
console.log(star);

for (let s = 0; s < star; s++) {
    let st = '';
    for (let i = star; i > s; i--) {
        st = st + '*';
    }
    console.log(st);
} //예제 다른거였음..;; 나 혼자 다른거함
