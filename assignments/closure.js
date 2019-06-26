// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {

  let hello = 'hi';
  return function() {
    return hello;
  }
};

const newGreeting = closure();
console.log(newGreeting());
console.log(newGreeting());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  
  let count = 0;
  return function() {
    return ++count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {

  let counter = 0;

  const increment = () => {
  
    return function() {
      return ++counter;
    }
  };

  const decrement = () => {
  
    return function() {
      return --counter;
    }
  };

  const addCounter = increment();
  const minusCounter = decrement();

  const answer = [addCounter(), addCounter(), minusCounter()];
  return answer;
};

console.log(counterFactory());