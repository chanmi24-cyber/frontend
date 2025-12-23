const person1={
    name:'김철수',
    age:25,
    married:false
};
for(const key in person1){
    console.log('key:',key);
}

for(const key in person1){
    console.log(person1[key])
}