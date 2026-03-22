// 1. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}


// 2. Check palindrome
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// 3. Find max number in array
function findMax(arr) {
  return Math.max(...arr);
}


// 4. Sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}


// 5. Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// 6. Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


// 7. Fibonacci
function fibonacci(n) {
  let a = 0, b = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}


// 9. Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// 11. Find even numbers
function getEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}


// 12. Find odd numbers
function getOdds(arr) {
  return arr.filter(num => num % 2 !== 0);
}



// 13. Count occurrences
function countOccurrences(arr, val) {
  return arr.filter(x => x === val).length;
}



// 14. Find longest word
function longestWord(str) {
  return str.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}



// 15. Sort array ascending
function sortAsc(arr) {
  return arr.sort((a, b) => a - b);
}



// 16. Sort array descending
function sortDesc(arr) {
  return arr.sort((a, b) => b - a);
}


// 17. Check prime number
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}



// 18. Find duplicates
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}



// 19. Shuffle array
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}


// 20. Merge arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Logs the result
/*******  28c91d0b-7283-473e-968d-6ac945d028f5  *******/
function addNumber(a,b){
    console.log(a+b);
}
addNumber(5,6);