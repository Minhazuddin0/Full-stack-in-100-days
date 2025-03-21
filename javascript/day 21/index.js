console.log('shuru karte hai')

// object create

// let rectangle ={
//     length:1,
//     breadth:2,

//     draw: function()  {
//         console.log('drawing');
//     }
// };

// factory function

// function createRectangle(len, bre) {

//     return rectangle  ={
//         length:len,
//         breadth:bre,
    
//         draw()  {
//             console.log('drawing');
//         }
//     };

// }
//  let rectangleObj1 = createRectangle(5 ,4);
//  let rectangle2 = createRectangle(2 ,3);
//  let rectangle3 = createRectangle(7 ,9);

// Camelcase -> numberOfStudents
// constructor function --> pascal notation -> first letter of every word is capital -> NumberOfStudents

// constructor function -> prop/methods -> initialize/define


function Rectangle(len ,bre){
    this.length =len;
    this.breadth =bre;
    this.draw = function(){
        console.log('drawing');
    }
}


// object creation using constructor function

let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function(
    'length' , 'breadth' ,
    `this.length =length;
    this.breadth =breadth;
     this.draw = function(){
    console.log('drawing');
    }`);


    // object creation using Rectangle1

    let rect = new Rectangle1(2 ,3);
    console.log(rect);

    // let a=10;
    // let b=a;

    // a++;
    // console.log(a);
    // console.log(b);

    // let a ={value:10};
    // let b = {value:a};

    // a.value++;

    // console.log(a.value);
    // console.log(b.value);
     

    // let a =10;
    // function inc(a) {
    //     a++;
    // }

    // inc(a);

    // console.log(a);


    // let a ={value:10};
    // function inc(a){
    //     a.value++;
    // } 

    // inc(a);
    // console.log(a.value);


    let rectangle ={
        length:2,
        breadth:4
    };

//     // for in loop

for(let key in rectangle) {

    // keys are reflected through key variable
    // values are reflected through rectangle key
    console.log(key, rectangle[key]);
}



// for of loop

for (let key of Object.entries(rectangle)){
    console.log (key);
}
