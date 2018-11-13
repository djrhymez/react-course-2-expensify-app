//
// Object destructuring
//

// const person = {
//   name: 'Daniel',
//   age: 21,
//   location: {
//     city: 'Winnipeg',
//     temp: 3
//   }
// };

// const {name = 'Stranger', age} = person;
// console.log(`${name} is ${age}.`);

// const {city: cityName, temp: temperature} = person.location;
// if (cityName && temperature) { 
//   console.log(`It's ${temperature} degrees in ${cityName}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '134436'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
