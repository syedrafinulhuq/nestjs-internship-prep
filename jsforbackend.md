# 📌 JavaScript Fundamentals for Backend Engineering

## 1. Variables & Data Types

let, const, var (scope differences)

Primitive types: string, number, boolean, null, undefined, symbol, bigint

Reference types: object, array, function

Type checking: typeof, Array.isArray(), instanceof

## 2. Operators

Arithmetic: + - * / % **

Assignment: =, +=, -=, *=

Comparison: == vs ===, != vs !==, <, >, <=, >=

Logical: &&, ||, !

Nullish coalescing: ??

Optional chaining: ?.

Ternary operator: condition ? trueVal : falseVal

## 3. Control Flow

if, else if, else

switch

Loops:

for, while, do...while

for...of (arrays, iterables)

for...in (objects)

break and continue

## 4. Functions

Function declaration vs expression

Arrow functions (()=>)

Parameters: default values, rest (...args)

Return values

Scope (block, function, global)

Closures (function inside function remembering outer scope)

## 5. Objects

Object literals { key: value }

Access: dot obj.key vs bracket obj["key"]

Shorthand properties ({name} instead of {name: name})

Methods inside objects

Destructuring:

const {name, age} = user;

Object.keys(), Object.values(), Object.entries()

Spread operator {...obj}

this keyword basics

## 6. Arrays

Creation: [], new Array()

## Common methods:

.push(), .pop(), .shift(), .unshift()

.map(), .filter(), .reduce(), .forEach()

.find(), .some(), .every()

.includes(), .indexOf()

.sort(), .reverse()

Spread/rest:

const arr2 = [...arr1, 5];

Destructuring:

const [first, second] = arr;

## 7. Advanced Functions & Objects

Higher-order functions (functions as arguments/returns)

Callbacks

this binding & arrow functions

Prototype & inheritance basics (Object.create)

ES6 Classes (class, constructor, extends, super)

## 8. Error Handling

try...catch

Throwing errors: throw new Error("msg")

finally block

## 9. Asynchronous JavaScript

Event loop basics (call stack, task queue, microtasks)

setTimeout, setInterval

Promises (then, catch, finally)

async/await

Promise.all, Promise.race, Promise.allSettled

## 10. ES Modules & Imports

export default vs named exports

import {x} from './file.js'

require() (Node.js CommonJS) vs import (ESM)