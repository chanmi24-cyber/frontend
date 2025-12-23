function printStarLine(num){
    let str='';
    for(let i=0; i<num; i++){
        str+='*';
    }
    console.log(str)
}

printStarLine(5)

console.log('---------')

function printStarsquare(num2){

    let str='';
    for(let k=0; k<num2; k++){
        str+='*';
        } 
    for(let i=0; i<num2; i++){
        console.log(str)
    }
    }
printStarsquare(5);

console.log('------------')

    function printStarSquare(num){
        for(let k=0; k<num; k++){
            printStarLine(k)
        }
    }
printStarsquare(5);

console.log('------------')

function printStarTriangle(num3){
    let st='';
    for(let i=0; i<num3; i++){
        st+='*';
    }
    console.log(st)
}

printStarTriangle(3);

console.log('------------')

function printStarTriangle(num4){
    for(let i=0; i<=num4; i++){
        printStarLine(i)
    }
}


printStarTriangle(3);
