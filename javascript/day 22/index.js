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

 
// let numbers = [1,4,5,7 ];
//  console.log(numbers);

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
// let courses = [
//     {no:1, naam:'minhaz'},
//     {no:2, naam:'mini'}
// ]

// console.log(courses);

// console.log(courses.includes({no:1, naam:'minhaz'}));

// let course = courses.find(course => course.naam === 'mini');


// console.log(course);

// let numbers =[1,2,3,4,5,6,7];

// // remove end
// numbers.pop();

// // remove beginning
// numbers.shift();

// // remove middle
// numbers.splice(2,1);

// console.log(numbers);


// let numbers =[1,2,3,4,5];
// let numbers2 = numbers; 

// numbers=[];
// numbers.length= 0;
// numbers.splice(0,numbers.length);



// console.log(numbers);
 
// console.log(numbers2);

// let first = [1,2,3];

// let second =[4,5,6];

// let combined =(first.concat(second));

// console.log(first);
// console.log(second);
// console.log(combined);


// let marks =[10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2);

// console.log(sliced);


// let first = [1,2,3];
// let second =[4,5,6];

// let combined =[...first,'a', ...second , 'b'];

// console.log(combined);

// array copy kaise kare

// let another = [...combined];

// console.log(another);

// let arr =[10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }


// arr.forEach(number => console.log(number) );


// let numbers =[10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined);


// let message = 'this is my first message';

// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('+');
// console.log(joined);

// let numbers = [50,30,40,10,20];

// numbers.sort(); 

// console.log(numbers);

// console.log(numbers);

// numbers.reverse();


// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(value=> value >= 0);    

// console.log(filtered);


// let numbers = [7,8,9,10];

// console.log(numbers);

// let items =  numbers.map(value => 'student_no' + value);


let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);
