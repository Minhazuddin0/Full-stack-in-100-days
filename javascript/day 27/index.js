let meraPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('i am promise1');
    },5000);
    // resolve(123456789);
    reject(new Error('new error aa gya hai '))
})
meraPromise1.then((value) => {console.log (value)});

meraPromise1.catch((error) => {console.log('this is error')});


// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am promise2');
//     },3000);
//     // resolve(2233)
//     // reject(new Error('new error aa gya hai '))
// })

console.log('pehla');