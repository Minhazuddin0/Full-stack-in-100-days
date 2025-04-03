// console.log('hello world');

// let lastName= 'minhaz';

// let firstName = new String ('minni');

// let message= 
// `this ${lastName},
// is my first 
// message`;

// console.log(message);

// // let words = message.split('  ');

// // console.log(words);


// let date =new Date();

// let date2 =new Date('January 21 1998 07:15 ');

// let date3 =new Date(2002, 5, 21, 7)

// console.log(date3);

 
let numbers = [1,4,5,7 ];
 console.log(numbers);

//  end --> push
// begin --> unshift
// middle --> splice



// searching

// console.log(numbers);
// console.log(numbers.indexOf(7));

// we want to check if a number exits in an array

// if(numbers.indexOf() != -1);

// console.log("present");

// console.log(numbers.includes(5));

// console.log(numbers.indexOf(4, 1));
let courses = [
    {no:1, naam:'minhaz'},
    {no:2, naam:'mini'}
]

console.log(courses);

// console.log(courses.includes({no:1, naam:'minhaz'}));

let course = courses.find(course => course.naam === 'minhaz');


console.log(course);