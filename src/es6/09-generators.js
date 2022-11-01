function* iterate(array){
    for (const value of array) {
        yield value
    }
}

const it = iterate(['axl', 'axl1', 'axl2', 'axl3'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)