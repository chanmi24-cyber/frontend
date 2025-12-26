const arr=[3,88,76,9,34,65];

function proc(item){
    console.log(item);
}

arr.forEach(proc);

console.log('--')

arr.forEach(item=>{
    console.log(item+2);
});

console.log('--')

arr.forEach((item,idx)=>{
    console.log(`arr[${idx}]:${item}`);
});
