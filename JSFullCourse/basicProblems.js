// 8kyu
// Multiply
function multiply(a, b) {
  return a * b;
}

multiply(5, 2);

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}

hero(10, 5);

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

// Beginner - Lost Without a Map
function maps(nums) {
  return nums.map((num) => num * 2);
}

maps([1, 2, 3]);

// Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

isDivisible(12, 3, 4);

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

// Grasshopper - Summation
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

summation(8);

// Get the mean of an array
function getAverage(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let average = Math.floor(sum / marks.length);
  return average;
}

getAverage([1, 2, 3, 4, 5]);

// Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (let number of arr) {
    if (number > 0) sum += number;
  }
  return sum;
}

positiveSum([1, -2, 3, 4, 5]);

// Array plus array
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}

arrayPlusArray([1, 2, 3], [4, 5, 6]);

// Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

stringToArray("I love arrays they are my favorite");

// Reversed Strings
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("world");

// Remove First and Last Character
function removeChar(str) {
  let newWord = "";

  for (let i = 1; i < str.length - 1; i++) {
    newWord += str[i];
  }

  return newWord;
}

removeChar("country");

// Remove String Spaces
function noSpace(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") newString += str[i];
  }

  return newString;
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");

// String repeat
function repeatStr(num, str) {
  let repeatedStr = "";

  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

repeatStr(5, "#");

// Rock Paper Scissors!
function rps(p1, p2) {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

rps("paper", "rock");

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}

basicOp("*", 5, 5);

// Century From Year
function century(year) {
  return Math.ceil(year / 100);
}

century(1705);

// Cat years, Dog years
function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  catYears = 15 + 9 + (humanYears - 2) * 4;
  dogYears = 15 + 9 + (humanYears - 2) * 5;
  return [humanYears, catYears, dogYears];
}

humanYearsCatYearsDogYears(10);

// Total amount of points
function points(games) {
  let totalPoints = 0;

  for (let game of games) {
    let homeGoals = game.split(":")[0];
    let awayGoals = game.split(":")[1];
    if (homeGoals > awayGoals) totalPoints += 3;
    else if (homeGoals == awayGoals) totalPoints += 1;
  }

  return totalPoints;
}

points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]);

// Printing Array elements with Comma delimiters
function printArray(array) {
  let string = "";

  for (let char of array) {
    string += char;
  }

  return string.split("").join(",");
}

printArray(["h", "o", "l", "a"]);

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
