const countValue = document.querySelector('#counter');

const increment = () => {

    // get value from UI
    let value = parseInt(countValue.innerText); 
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value ;

};


const decrement = () => {

     // get value from UI
    let value = parseInt(countValue.innerText); 
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value ;

};


