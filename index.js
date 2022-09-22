console.log("----- CHALLENGE 1: REVERSE A STRING -----");
// ### CHALLENGE 1: REVERSE A STRING
// // Return a string in reverse
// //  ex:

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// -----------other way-----------
// reverseString('hello') === 'olleh';
// const string1 = "hello";
// let reverseString = "";
// for (let i = string1.length - 1; i >= 0; i--) {
//   reverseString += string1[i];
// }
// console.log(reverseString);

console.log("----- CHALLENGE 2: VALIDATE A PALINDROME -----");
// #### CHALLENGE 2: VALIDATE A PALINDROME
// // Return true if palindrome and false if not
// // ex:
// isPalindrome('racecar') === true;
// isPalindrome('hello') == false;

function isPalindrome(str) {
  //  if (reverseString(str))
  if (reverseString(str) === str) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome("racecar"); // true
isPalindrome("hello"); // false

console.log("----- CHALLENGE 3: REVERSE AN INTEGER -----");

// ### CHALLENGE 3: REVERSE AN INTEGER
// // Return an integer in reverse
// // ex:
// reverseInt(521) === 125;

function reverseInt(num) {
  num = num + "";
  console.log(num.split("").reverse().join(""));
}

reverseInt(521); // 125;

console.log("----- CHALLENGE 4: CAPITALIZE LETTERS -----");

// ### CHALLENGE 4: CAPITALIZE LETTERS
// // Return a string with the first letter of every word capitalized
// //  ex:
// capitalizeLetters('i love javascript') === 'I Love Javascript';

function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeLetters("i love javascript")); // "I Love Javascript"

console.log("----- CHALLENGE 5: MAX CHARACTER -----");

// ### CHALLENGE 5: MAX CHARACTER
// // Return the character that is most common in a string
// // ex:
// maxCharacter('javascript') == 'a';

const maxCharacter = (str) => {
  let max = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    if (str.split(char).length > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  return maxChar;
  //   return `The max letter is :${maxChar} and the max number of times it is seen is:${max} times`;
};

console.log(maxCharacter("javascript")); // 'a'

console.log("----- CHALLENGE 6: FIZZBUZZ -----");

// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

console.log("----- CHALLENGE 7: LONGEST WORD -----");

// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';
function longestWord(str) {
  let array1 = str.split(" ");
  let maxLength = 0;
  let maxWord = "";
  //   console.log(array1);
  for (const item of array1) {
    if (item.length > maxLength) {
      maxLength = item.length;
      maxWord = item;
    }
    // console.log(array1);
  }
  console.log(maxWord.toLowerCase());
  //   console.log(maxLength);
}

longestWord("Hi there, my name is Brad"); // 'there,';
longestWord("My name is Brad"); // ['name', 'brad'];
longestWord("Brad"); // 'brad';

console.log("----- CHALLENGE 8: ARRAY CHUNKING -----");

// ### CHALLENGE 8: ARRAY CHUNKING
// // Split an array into chunked arrays of a specific length
// // ex:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]];
function chunkArray(arr, idx) {
  let chunky = [];
  while (arr.length > 0) {
    const newChunk = arr.splice(0, idx);
    chunky.push(newChunk);
    // console.log(arr);
  }
  console.log(chunky);
}

chunkArray([1, 2, 3, 4, 5, 6, 7], 3); // [[1, 2, 3], [4, 5, 6], [7]];
chunkArray([1, 2, 3, 4, 5, 6, 7], 2); // [[1, 2], [3, 4], [5, 6], [7]];

console.log("----- CHALLENGE 9: FLATTEN ARRAY -----");

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const nested = [[1, 2], [3, 4], [5, 6], [7]];
let flatArray = [].concat(...nested);
console.log(flatArray);
// ------------other way-------------
// console.log(nestedArray.flat());

console.log("----- CHALLENGE 10: ANAGRAM -----");

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false
function isAnagram(str1, str2) {
  let strSplit1 = str1.split("");
  let strSorted1 = strSplit1.sort((a, b) => (a > b ? 1 : -1));
  let newStr1 = strSorted1.join("");

  let strSplit2 = str2.split("");
  let strSorted2 = strSplit2.sort((a, b) => (a > b ? 1 : -1));
  let newStr2 = strSorted2.join("");

  if (str1 === str2) {
    console.log(false);
  } else if (newStr1.toLowerCase() === newStr2.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isAnagram("elbow", "below"); // true
isAnagram("Dormitory", "dirty room##"); // false

console.log("----- CHALLENGE 11: ADD ALL NUMBERS -----");

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;
function addAll(...numbers) {
  const reduce = numbers.reduce((total, current) => total + current, 0);
  console.log(reduce);
}

addAll(2, 5, 6, 7); // 20;

console.log("----- CHALLENGE 12: SUM ALL PRIMES -----");

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

function sumAllPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++)
    if (num % i == 0) {
      total += i;
    }
  console.log(total);
}

sumAllPrimes(10); // 17;
// (2 3 5 7) = 17

console.log("----- CHALENGE 13: SEEK AND DESTROY -----");

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

console.log("----- CHALLENGE 14: EVEN & ODD SUMS -----");

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
