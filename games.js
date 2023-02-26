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
