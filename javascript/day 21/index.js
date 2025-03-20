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

function createRectangle() {

    return rectangle ={
        length:1,
        breadth:2,
    
        draw()  {
            console.log('drawing');
        }
    };

}
 let rectangleObj1 = creatrectangle();
