const countValue = document.querySelector('#counter');

const increment = () => {
    // get value from ui
    let value = parseInt(countValue.innertext); 
    // update the value
    value = value+1;
    countValue.innertext =value ;

};


const decrement = () => {

};