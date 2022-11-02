class User {
    
    constructor(name, age){
        console.log('creating new user')
        this.name = name;
        this.age = age;
    }
    //methods
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    #speak(){//private method
        return 'Hello'
    }

    get #uAge(){
        return this.age
    }

    set #uAge(n){
        this.age = n
    }

}
// const newUser = new User();//creating instance 

const gndx = new User('Axl', 29);

console.log(gndx.greeting())
console.log(gndx.uAge)
console.log(gndx.uAge = 30)

// const bbolper = new User('axl');
// console.log(bbolper.greeting())