// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


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


function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length)
});

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(2, 3, (sum) => {
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(4, 7, (multiply) => {
  console.log(multiply);
});

<<<<<<< HEAD
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  items.filter(item, list => {
    console.log(list);
  });
}

/* STRETCH PROBLEM */
=======
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  list.includes(item) ? cb(true) : cb(false);
};
>>>>>>> a1dc302a67daa964a9daf195f5b9d04d7ada49cf

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
// function removeDuplicates(array, cb) {
//   array.filter(duplicate => duplicate === cb.items);
// }

// console.log(removeDuplicates(items, duplicate));