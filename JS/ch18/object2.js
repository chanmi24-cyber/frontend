const person1={
    name:'김철수',
    age:25,
    married:false
};
console.log(person1);

person1.married=true;
console.log('person1married:',person1.married);
console.log(!person1.married);

person1['age']=30;
const key='name';
person1[key]='권수영';
console.log(person1);

person1.address='대구'
person1['height']=174.3;
console.log(person1);