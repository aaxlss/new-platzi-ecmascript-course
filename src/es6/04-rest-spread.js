let fruits = ['apple', 'banana']
let [a,b] = fruits

console.log(a, b)


//object
let user = {
    name: 'Axel',
    age: 29
}
let {name, age} = user;
console.log(name, age);
console.log(user.name, user.age);

//spread operator
let person = {name: 'Axel', age:29};
let country = 'Mx';

let data = {...person, country}
console.log(data)

//rest 
const sum = (num, ...values) =>{
    console.log(values);
    console.log(num + values[0]);

    return num + values[0]
}

sum(1,2,456,89,23,86,23)