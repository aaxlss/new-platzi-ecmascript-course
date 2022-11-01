//
const newPromise = () => new Promise((resolve, reject) => {
    if(!true){
        return resolve('everything good!')
    } else {
        return reject('something wrong!')
    }
})

newPromise()
.then(response => console.log(response))
.catch(error => console.log(error))