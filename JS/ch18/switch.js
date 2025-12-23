const mon=parseInt(Math.random()*12.0)+1;
console.log(mon);

switch(mon){
    case 2:
        console.log('입춘있다');
    case 1:
    case 12:
        console.log('겨울');
        break;
    case 3:
    case 4:
    case 5:
        console.log('봄');
        break;
    case 6:
    case 7:
    case 8:
        console.log('여름');
        break;
    case 9:
    case 10:
    case 11:
        console.log('가을');
        break;
    default:
        console.log('해당월이 없습니다.');
        break;
}