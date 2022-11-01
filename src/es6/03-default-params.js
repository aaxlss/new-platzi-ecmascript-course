function newUser (name, age, country) {
        var name = name || 'Axl'
        var age = age || 30
        var country = country || 'Mx'
        console.log(name, age, country)
}
newUser();
newUser('axel', 29)

//new version
const newUser2 = (name = 'Axel', age = 30, country = 'Mx') => {
    console.log(name, age, country)
}
newUser2()
newUser2('axel', 29)