// // adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("Load time first " + (t2 - t1) + "ms")

// // optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element= document.createElement('p');
//     element.textContent = 'this is para'+ i ;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();

// console.log("Load time second " + (t4 - t3) + "ms")

//  let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);


// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is single';
//     document.body.appendChild(para);
// }  


// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'second para';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

