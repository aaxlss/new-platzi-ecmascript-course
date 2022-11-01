//flat array
const array = [1,2,3,3,4,5,5, [1,2,3,4,345,54, [3,34,4545,6,56,7,67,34,2]]]
console.log(array.flat(4))


//flat map
const array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value,value * 2]))