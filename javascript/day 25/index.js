// function eventlistener(){
//     console.log('i have click document');
// };

// document.addEventListener('click', eventlistener);
// document.removeEventListener('click', eventlistener);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click' , function (event){
//     console.log(event);
// }) 

//  let links = document.querySelectorAll('a');
//  let thirdlink = links[2];

//  thirdlink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('prevent event open nhi hoga')
//  });

// let myDiv = document.createElement('div');

// function parastatus (event){
//     console.log('para' + event.target.textContent);
// }

// myDiv.addEventListener('click', parastatus );
// for (let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

    
//     myDiv.appendChild(newElement);

// }

// document.body.appendChild(myDiv);  

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
    console.log('span per click hua ' + event.target.textContent);
    }
    
});