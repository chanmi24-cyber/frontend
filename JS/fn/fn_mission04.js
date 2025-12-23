function random(num1,num2){
    let num3=num2-num1
    return parseInt((Math.random()*num3)+num1)
}
const randomValue=random(3,9)
console.log(randomValue)
const randomValue2=random(10,15)
console.log(randomValue2)