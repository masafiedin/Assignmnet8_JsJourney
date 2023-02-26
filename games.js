function mergeSort() {
  document.getElementById("mergeSortOutput").innerHTML =
    "You will be prompted to input 10 numbers. please sperate each with a comma.";
  let input = prompt("Enter 10 numbers:");

  // convert the input string into an array of numbers
  let arr = input.split(",").map(Number);

  // function to merge two sorted arrays
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  // function to perform merge sort on an array
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  // sort the input array using merge sort
  let sortedArray = mergeSort(arr);
  document.getElementById("mergeSortOutput").innerHTML = String(sortedArray);
}

function palindrome() {
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    // Compare the original string with its reverse
    return str === str.split("").reverse().join("");
  }

  // Prompt the user for a string input
  const input = prompt("Enter a word or phrase:");
  document.getElementById("palindromeOutput").innerHTML = input;
  // Check if the input is a palindrome
  if (isPalindrome(input)) {
    document.getElementById("palindromeOutput").innerHTML =
      " The provided string is a palindorme.".concat(input);
  } else {
    document.getElementById("palindromeOutput").innerHTML =
      " The provided string is not a palindorme: ".concat(input);
  }
}

function reverseString() {
  let numberArray = [];
  let indexArray = [];
  // this function will extract all numbers from a string,
  // and the indices at which these numbers were presented.
  function extractNumbersAndIndices(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!isNaN(char) && char !== " ") {
        numberArray.push(parseInt(char));
        indexArray.push(i);
      }
    }
  }

  //swapping numbers by order
  //example: string: He11oPe0pl3 s(11) . numberArray = [1,1,0,3]. indexArray = [2,3,7,10]
  let input = prompt("Enter a phrase that contains numbers").split("");
  //checking if input has numbers
  if (/\d/.test(input)) {
    extractNumbersAndIndices(input);

    let nums = numberArray.length;
    for (var i = 0; i < nums; i++) {
      var indexOfi = indexArray[i];
      input[indexOfi] = numberArray[nums - 1 - i];
      console.log("lho", input[indexOfi]);
      console.log("rho", numberArray[nums - 1 - i]);
    }
    document.getElementById("reverseStrinOutput").innerHTML =
      "This is the input, with numbers reversed :D ".concat(input.join(""));
  } else {
    var inputReverse = input.reverse().join("");
    document.getElementById("reverseStrinOutput").innerHTML =
      "You have entered a string with no numbers, might as well be reversed: ".concat(
        inputReverse
      );
  }
}
function pigLatin() {
  let userInput = prompt("Enter a word or phrase:");
  let words = userInput.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // Find the first vowel in the word
    let firstVowelIndex = word.search(/[aeiou]/i);

    // If the word starts with a vowel, just add "ay" to the end
    if (firstVowelIndex === 0) {
      words[i] = word + "ay";
    } else {
      // else, move the consonants before the first vowel to the end and add "ay"
      let consonants = word.slice(0, firstVowelIndex);
      let restOfWord = word.slice(firstVowelIndex);
      words[i] = restOfWord + consonants + "ay";
    }
  }

  let pigLatinOutput = words.join(" ");
  document.getElementById("pigLatinOutput").innerHTML = String(pigLatinOutput);
}
