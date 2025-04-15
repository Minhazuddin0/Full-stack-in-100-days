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

// function interest(p,r=6,y=10){
//     return p*r*y/100;
// }

// GETTER SETTER

// getter => access properties
// setter => change or mutate properties 

// console.log(interest(1000,8));

// let person = {
//      fName :'minhaz',
//      lName :'uddin',
//      get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if (typeof value !== String){
//             throw new Error ("you have not sent a string");
//         }
//          let parts = value.split(' ');
//          this.fName = parts[0];
//          this.lName = parts[1];
//     }
    
// }; 




// console.log(person);


// console.log(person.fullName);
// try{
//     person.fullName = true;   
// }

// catch(e){
//     alert (e);
// }

// console.log(person.fullName); 


// {  
//      var a =5 ;

// }console.log(a);

// function walk(){
//     var a = 5;
// }

// console.log(a);

// for (var i=0; i<10; i++){

// }

// console.log(i);

// if (true){
//     var a = 5 ;
// }

// console.log(a);

// function a(){
//     const ab =5;
// }
// const ab = 5;
// function b(){
//     const ab =5;
// }