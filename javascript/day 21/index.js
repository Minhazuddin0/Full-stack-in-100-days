console.log('shuru karte hai')

// object create

let rectangle ={
    length:1,
    breadth:2,

    draw: function()  {
        console.log('drawing');
    }
};

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