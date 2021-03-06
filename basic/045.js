// Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
//
//     Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//
//     Add the number to the end of the array, then remove the first element of the array.
//
//     The nextInLine function should then return the element that was removed.


function nextInLine(arr, item) {
// Your code here

    arr.push(item);

    var temp = arr.shift();

    return temp; // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));