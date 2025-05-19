// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am promise1');
//     },5000);
//     // resolve(123456789);
//     reject(new Error('new error aa gya hai '))
// })
// meraPromise1.then((value) => {console.log (value)});

// meraPromise1.catch((error) => {console.log('this is error')});


// // let meraPromise2 = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //         console.log('i am promise2');
// //     },3000);
// //     // resolve(2233)
// //     // reject(new Error('new error aa gya hai '))
// // })

// console.log('pehla');


// let promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('timeout1 started');
//     }, 2000);
//     resolve(true);
// })

// let output = promise1.then(() => {
//     let promise2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('timeout2 started');
//         }, 3000);
//         resolve("promise 2 resolve");
//     })

//     return promise2;
// })
// output.then((value) => console.log( value));


 async function abcd(){
    return 7;

}
