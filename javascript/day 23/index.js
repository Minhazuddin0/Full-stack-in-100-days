// console.log('kaise ho');

// run();

// function declaration

// function run (){
//     console.log('running');
// }

// function call or invoke



// Named function assignment
// let stand =function walk(){
//     console.log('walking');
// }

// Anonymous function assignment
// let stand2 =function(){
//     console.log('walking');
// }

// stand();

// let jump= stand;

// jump();
// stand2();

// let x =1;

// x ='a';

// console.log(x);

// function sum(){
//     let total =0 ;
//     for ( let value of arguments)
//         total =total+ value;
//     return total;
// }

// console.log(sum(1,2));

// let ans =sum(1,2,2,3);
// console.log(ans);



// function sum (...args){
//     console.log(args);
// }


// sum(1,2,3,4,5,6);


// default parameters

function interest(p,r=6,y=10){
    return p*r*y/100;
}

// console.log(interest(1000,8));

let person = {
     fName :'minhaz',
     lName :'uddin'
}; 


// console.log(person);

function fullName(){
    return `${person.fName} ${person.lName}`;
}

console.log(fullName); 