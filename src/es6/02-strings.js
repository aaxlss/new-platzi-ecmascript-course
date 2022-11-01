//Template literals File
let hello = 'Hello';
let world = 'world';

let epicPhrase = hello + ' ' + world;//usual version to concatenate a string
console.log(epicPhrase)


let epicPhrase2 = `${hello} ${world}`//template literal version to concatenated strings
console.log(epicPhrase2)

//milti-line
let lorem = 'this is a string \n' + 'second line'
console.log(lorem)

let lorem2 = `this is a string 
second line`
console.log(lorem2)