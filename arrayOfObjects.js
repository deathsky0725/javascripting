// Remember:
// Good modular function
// No Extra variable
// define function before using
// Output should be an array - should be an array
// name of the function should express the intent of the function


// Create a file named arrayOfObjects.js.
 
// In that file, define a variable named `restaurants` like this:

// Input Array of objects
var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];
var target = 1500;
function compareValue2(restaurants){
      return restaurants.cost < target; 
};
// var filterRes = restaurants.filter( 
//      function compareValue(restaurants){
//           return compareValue2(restaurants);
//     }
// );
var filterRes = restaurants.filter(compareValue2)
console.log(filterRes);


// Output - Array of objects for which the cost is less than 1500
// var restaurants = [
//   {
//     name: 'Audrey',
//     place: 'esplanade',
//     cost: 1000
//   },
//   {
//     place: 'esplanade',
//     cost: 500
//     name: 'Jone Salad',
//   },
//   {
//     name: 'Swesens',
//     place: 'esplanade',
//     cost: 1000
//   }
// ];