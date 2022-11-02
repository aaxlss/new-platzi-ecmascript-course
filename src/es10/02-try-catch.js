try {
    function1();
} catch (error) {
    console.log(error);
}

//ECMAscript 10 the error in the catch block is optional
try {
    fucntion2();
} catch {
    console.log('error')
}