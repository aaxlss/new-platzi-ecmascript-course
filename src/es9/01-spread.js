const user = {
    name:'axl',
    age: 29,
    country:'MX'
};

const {name, ...values} = user;

console.log(name, values)