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


//  async function abcd(){
//     return ('minhaz');

// }




// async function utility(){



// let uttarPradesh = new Promise ((resolve , reject) => {
//     setTimeout (() => {
//         resolve("UP me bahut garmi hai");
//     } , 5000);
// });


// let lucknow = new Promise ((resolve , reject) => {
//     setTimeout (() => {
//         resolve("lucknow thanda hai");
//     } , 20000);
// });

// let up = uttarPradesh;
// let lko = lucknow;

// return [up , lko];

// }

async function helper(){
    let options = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};

let Content =await fetch('https://jsonplaceholder.typicode.com/posts', options);
let response = Content.json();
return response;
}


async function utility(){
    let ans = await helper();
    console.log(ans);
} 
