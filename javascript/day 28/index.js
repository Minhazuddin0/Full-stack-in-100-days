const countValue = document.querySelector('#counter');

const increment = () => {
    // get value from UI
    let value = parseInt(countValue.innertext); 
    // update the value
    value = value+1;
    // set the value onto UI
    countValue.innertext =value ;

};


const decrement = () => {

};