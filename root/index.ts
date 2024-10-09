// 1
let names: string = "Jhon Doe";

let age: number = 30;

let isStudent: boolean = true;

let hobbies: string[] = ["Reading", "Gaming", "Coding"];

function greet(person: string): string {
    return `Hello ${person}`;
}

function calculateSum(a: number, b: number): number {
    return a + b;
}

function isAdult(personAge: number): boolean {
    return personAge >= 18;
}

// 2
function countPositiveNumbers(arr: number[]): number {
    return arr.filter((num) => num > 0).length;
}

console.log(countPositiveNumbers([1, 2, 4, -11, -3, 0]));

// 3
function fizzBuzz(n: number): void {
    for (let inx = 1; inx <= n; inx++) {
        if (inx % 3 === 0 && inx % 5 === 0) {
            console.log("FizzBuzz");
        } else if (inx % 3 === 0) {
            console.log("Fizz");
        } else if (inx % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(inx);
        }
    }
}
console.log(fizzBuzz(15));

// 4
function sumArray(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}

// 5
function countWords(str: string): number {
    return str.trim().split(/\s+/).filter(Boolean).length;
}

// 6
function findMax(arr: number[]): number {
    return Math.max(...arr);
}

// 7
function findMix(arr: number[]): number {
    return Math.min(...arr);
}

// 8
function containsElement(arr: number[], target: number): boolean {
    return arr.includes(target);
}

// 9
function reverseArray(arr: number[]): number[] {
    return arr.slice().reverse();
}

// 10
function capitalizeWords(str: string): string {
    return str
        .split(" ")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
}

// 11
function average(arr: number[]): number {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// 12
function findDuplicates(
    arr: (number | string | boolean)[]
): (number | string | boolean)[] {
    const duplicates: (number | string | boolean)[] = [];
    const seen: { [key: string]: number } = {};

    for (let item of arr) {
        const key = String(item);

        if (seen[key]) {
            if (seen[key] === 1) {
                duplicates.push(item);
            }
            seen[key]++;
        } else {
            seen[key] = 1;
        }
    }

    return duplicates;
}
