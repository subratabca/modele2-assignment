//Exercise 1 Answer:

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [value1, , value2] = arr;

  return { name, age, value1, value2 };
}

const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40];

const result = destructureExample(obj, arr);
console.log(result);


//.......Exercise 2 Answer:..............................

function sumNumbers(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5));


//.......Exercise 3 Answer:..............................

function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

console.log(createGreeting("Alice")); 


//.......Exercise 4 Answer:.............................

function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(7)); 


//.......Exercise 5 Answer:..............................

const multiply = (a, b) => a * b;
console.log(multiply(2, 5));


//.......Exercise 6 Answer:..............................

function getLargestNumber(a, b) {
  return a >= b ? a : b;
}

console.log(getLargestNumber(10, 5));


//.......Exercise 7 Answer:..............................

function getAddressCity(address) {
  return address?.city || "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address));


//.......Exercise 8 Answer:..............................

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));


//.......Exercise 9 Answer:..............................

function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));

//.......Exercise 10 Answer:..............................

function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


//.......Exercise 11 Answer:..............................

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 4];
console.log(sortNumbers(numbers)); 

