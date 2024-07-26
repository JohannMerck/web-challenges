// Find the longest Word

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function longestWord(array) {
  let currentLongestWord = "";
  array.forEach((word) => {
    if (word.length > currentLongestWord.length) {
      currentLongestWord = word;
    }
  });
  return currentLongestWord;
}

console.log(longestWord(words));

// Find the maximum of two Numbers:

function maxOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
}

maxOfTwoNumbers(3, 5);

console.log(maxOfTwoNumbers(3, 5));

// Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  return numbers.reduce((addIt, currentValue) => addIt + currentValue, 0);
}

sumNumbers(numbers);

console.log(sumNumbers(numbers));

// Calculate the average length of the words

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  const joinedWords = words.join("");
  const charAverage = joinedWords.length / words.length;
  return charAverage;
}

console.log(averageWordLength(words2));

// Unique arrays - return an array without duplicates

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  let newArray = [];
  words.forEach((word) => {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  });
  return newArray;
}

console.log(uniquifyArray(words3));

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  return haystack.includes(needle);
}

console.log(doesWordExist(wordsFind, "machines"));

// Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  let count = 0;
  haystack.forEach((word) => {
    if (word === needle) {
      count++;
    }
  });
  return count;
}

console.log(howManyTimes(wordsCount, "matter"));

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  let count = 0;
  array.forEach((item) => {
    if (typeof item === "string") {
      count += item.length;
    } else if (typeof item === "boolean") {
      item ? count++ : null;
    } else {
      count += item;
    }
  });
  return count;
}

console.log(sum(mixedArray));
