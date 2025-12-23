const person1={
    name:'김철수',
    age:25,
    married:false
}
const person2=person1;

console.log('person1.name:',person1.name);
console.log('person2.name:',person2.name);

person1.name='홍길동';
person2.age=30;
console.log('person1.name:',person1.name);
console.log('person2.name:',person2.name);
console.log('person1.age:',person1.age);
console.log('person2.age:',person2.age);
