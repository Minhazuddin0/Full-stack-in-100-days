// function eventlistener(){
//     console.log('i have click document');
// };

// document.addEventListener('click', eventlistener);
// document.removeEventListener('click', eventlistener);

const content = document.querySelector('#wrapper');

content.addEventListener('click' , function (event){
    console.log(event);
}) 

 let links = document.querySelectorAll('a');
 let thirdlink = links[2];

 thirdlink = addEventListener('click' , function(event){
    event.preventDefault();
    console.log('prevent event open nhi hoga')
 });