// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const itemsDouble = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum', 'Apple']

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array to the callback
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});

// Calls the last item in the array and passes to the callback
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

// Sum of two numbers and return them in a callback
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(2, 3, (sum) => {
  console.log(sum);
});

// Product of two numbers and return in a callback
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(4, 7, (multiply) => {
  console.log(multiply);
});

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  // return list.includes(item) ? cb(true) : cb(false);
  return cb(list.includes(item));
};

let value = exists => {
  console.log(exists);
}

contains('Notebook', items, value);

// contains('Notebook', items, function(exists) {
//   console.log(exists);
// });


// /* STRETCH PROBLEM */
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
function removeDuplicates(array, cb) {
  return cb(array);
}

let dubs = removeDuplicates(itemsDouble, function(arr) {
  return [...new Set(arr)];
})

console.log(dubs);