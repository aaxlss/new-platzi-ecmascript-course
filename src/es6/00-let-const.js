var lastName = 'Axl'
lastName = 'Silva'//reasigning variable value
console.log(lastName)

let fruit = 'apple'
fruit = 'kiwi'
console.log(fruit)

const animal = 'dog'
//animal = 'cat'//it's not possible to reasign a value when it is a const
console.log(animal)

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';//funtion scope
        let fruit2 = 'Kiwi';//block scope
        const fruit3 = 'Banana';//block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
fruits();