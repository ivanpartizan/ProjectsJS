// 8kyu
// Multiply
function multiply(a, b) {
  return a * b;
}

multiply(5, 2);

// Return Negative
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

makeNegative(0.12);

// Even or Odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd(2);

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

isDivisible(12, 3, 4);

// Reversed Strings
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("world");

// Find the smallest integer in the array
function findSmallestInt(arr) {
  let smallestInteger = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestInteger) {
      smallestInteger = arr[i];
    }
  }

  return smallestInteger;
}

findSmallestInt([78, 56, 232, 12, 18]);

// 7kyu
// Vowel Count
function getCount(str) {
  let vowelsCount = 0;

  let array = str.split("");

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] == "a" ||
      array[i] == "e" ||
      array[i] == "i" ||
      array[i] == "o" ||
      array[i] == "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

getCount("ivan milenkovic");
