"use strict";
// 1
let names = "Jhon Doe";
let age = 30;
let isStudent = true;
let hobbies = ["Reading", "Gaming", "Coding"];
function greet(person) {
    return `Hello ${person}`;
}
function calculateSum(a, b) {
    return a + b;
}
function isAdult(personAge) {
    return personAge >= 18;
}
// 2
function countPositiveNumbers(arr) {
    return arr.filter((num) => num > 0).length;
}
console.log(countPositiveNumbers([1, 2, 4, -11, -3, 0]));
// 3
function fizzBuzz(n) {
    for (let inx = 1; inx <= n; inx++) {
        if (inx % 3 === 0 && inx % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (inx % 3 === 0) {
            console.log("Fizz");
        }
        else if (inx % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(inx);
        }
    }
}
console.log(fizzBuzz(15));
// 4
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
// 5
function countWords(str) {
    return str.trim().split(/\s+/).filter(Boolean).length;
}
// 6
function findMax(arr) {
    return Math.max(...arr);
}
// 7
function findMix(arr) {
    return Math.min(...arr);
}
// 8
function containsElement(arr, target) {
    return arr.includes(target);
}
// 9
function reverseArray(arr) {
    return arr.slice().reverse();
}
// 10
function capitalizeWords(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
// 11
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
// 12
function findDuplicates(arr) {
    const duplicates = [];
    const seen = {};
    for (let item of arr) {
        const key = String(item);
        if (seen[key]) {
            if (seen[key] === 1) {
                duplicates.push(item);
            }
            seen[key]++;
        }
        else {
            seen[key] = 1;
        }
    }
    return duplicates;
}
