// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

function twoFer(name:string):string{
    return `One for ${name}, one for me`;
}

console.log(twoFer("Elton"))
console.log(twoFer("Tywin"))

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

function isLeapYear(year:number):boolean{
    if((year % 400 === 0) ||( year % 4 === 0 && year % 100 !== 0)){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2012))
console.log(isLeapYear(2013))
console.log(isLeapYear(2016))
console.log(isLeapYear(2021)) 
console.log(isLeapYear(2022)) 

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

/*


🔹 Easy Problems (Basics of Functions)

Square a Number
Write a function square(n: number): number that returns the square of a number.
Example: square(5) → 25.

*/

function square(n:number):number{
    return n ** 2;
}

console.log(square(4))
console.log(square(7))
console.log(square(12))

/*

Greet User
Write a function greet(name: string): string that returns "Hello, <name>!".
Example: greet("Alice") → "Hello, Alice!".

*/
function greet(name:string):string{

    return `Hello, ${name!}`

}

console.log(greet("Alice"))
console.log(greet("Farshin"))
console.log(greet("Naim"))

/*

Find Maximum of Two Numbers
Write a function max(a: number, b: number): number that returns the larger of the two numbers.
Example: max(10, 7) → 10.

*/
function max(a:number, b:number):number | string{
    if(a>b){
        return a;
    }else if(a<b){
        return b;
    }else{
        return "Both are equal"
    }
}

console.log(max(10,30))
console.log(max(20,20))
console.log(max(11,7))
console.log(max(99,130))


/*


🔹 Medium Problems (Logic and Loops in Functions)

Check Prime Number
Write a function isPrime(n: number): boolean that returns true if the number is prime, otherwise false.
Example: isPrime(7) → true.

*/ 

function isPrime(num: number):boolean{
    if(num<=1) return false;
    if(num === 2) return true


    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;


}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(4));   // false
console.log(isPrime(17));  // true
console.log(isPrime(18));  // false
console.log(isPrime(19));  // true



/*
Reverse a String
Write a function reverseString(str: string): string that returns the reverse of a given string.
Example: reverseString("hello") → "olleh".

*/

function reverseString(str:string):string{
    let reversed:string = ""
    for(let i = str.length - 1 ; i >= 0; i--){
        reversed += str[i]
    }    

    return reversed;
}

console.log(reverseString("hello"));  // "olleh"
console.log(reverseString("TypeScript"));  // "tpircSpeyT"
console.log(reverseString("a"));  // "a"
console.log(reverseString(""));   // ""


/*


Factorial
Write a function factorial(n: number): number that returns the factorial of a number.
Example: factorial(5) → 120.

*/

function factorial(num:number):number{
    let factorial:number = 1
    for(let i = num; i>0; i--){
        factorial *= i
    }

    return factorial
}

console.log(factorial(5))
console.log(factorial(10))

/*

🔹 Hard Problems (Nested Logic & Multiple Functions)

Palindrome Checker
Write a function isPalindrome(str: string): boolean that checks whether a given string is a palindrome (ignores spaces & capitalization).
Example: isPalindrome("Racecar") → true.

*/

function isPalindrome(str:string):boolean{
    let reversed = ""
    for(let i = str.length - 1; i>= 0; i--){
        reversed += str[i]
    }
    if (str.toLowerCase() === reversed.toLowerCase()){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome("Racecar"))
console.log(isPalindrome("Rebecca"))
console.log(isPalindrome("Amma"))

/*
Fibonacci Sequence
Write a function fibonacci(n: number): number[] that returns the first n Fibonacci numbers.
Example: fibonacci(6) → [0, 1, 1, 2, 3, 5].

*/

function fibonacci(num:number):number[]{
    let head = 1, tail = 0, next = 0, numberArray:number [] = [0,1]
    for(let i = 2; i< num; i++){
        next = head + tail;
        tail = head
        head = next
        numberArray.push(head)
    }

    return numberArray
}

console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]

/*

Word Frequency Counter
Write a function wordFrequency(text: string): Record<string, number> that counts how many times each word appears in a given text.
Example:
Input: "hello world hello"
Output: { hello: 2, world: 1 }.

*/ 

function wordFrequency(str: string): Record<string, number> {
    const freq: Record<string, number> = {};
    const words = str.toLowerCase().split(/\s+/);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}


function wordFreq(str:string): Record <string,number>{
    let freq: Record <string, number> = {}
    let words = str.toLowerCase().split(" ")

    for(let i = 0; i<words.length; i++){
        const word = words[i] 
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq
}

console.log(wordFrequency("hello world hello"));
// { hello: 2, world: 1 }

console.log(wordFrequency("One fish two fish red fish blue fish"));
// { one: 1, fish: 4, two: 1, red: 1, blue: 1 }
