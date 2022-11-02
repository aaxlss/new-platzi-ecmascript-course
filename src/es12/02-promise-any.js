const promise = new Promise((resolve, reject) => reject('Reject') );
const promise1 = new Promise((resolve, reject) => resolve('resolve') );
const promise2 = new Promise((resolve, reject) => resolve('resolve2') );


Promise.any([promise, promise1, promise2])
.then(response => console.log(response));// it will show the first resolve answerd