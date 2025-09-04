# 📅 7-Day Plan to Master Asynchronous JavaScript

## Day 1: Sync vs Async Basics

📖 Read: What “blocking” means, and why async is needed.

📝 Code:

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

👉 Predict and explain the output.

Mini-Challenge: Write a delayedLog(message, ms) function that prints a message after ms milliseconds.

## Day 2: Callbacks

📖 Read: How callback functions are used.

📝 Code:

function greetLater(name, callback) {
  setTimeout(() => callback(`Hello, ${name}!`), 1000);
}
greetLater("Alice", msg => console.log(msg));

Mini-Challenge: Build a calculateLater(a, b, callback) that adds a+b after 2s and gives the result to the callback.

## Day 3: Promises

📖 Read: Promise states → pending, fulfilled, rejected.

📝 Code:

const getNumber = new Promise((resolve, reject) => {
  const num = Math.random();
  setTimeout(() => num > 0.5 ? resolve(num) : reject("Too small!"), 1000);
});

getNumber.then(console.log).catch(console.error);

Mini-Challenge: Make a promise that fetches a random number and always resolves with num * 10.

## Day 4: Async/Await

📖 Read: async makes a function return a promise, await pauses inside it.

📝 Code:

async function rollDice() {
  function dice() {
    return new Promise(resolve => setTimeout(() => resolve(Math.ceil(Math.random()*6)), 1000));
  }
  const result = await dice();
  console.log("Rolled:", result);
}
rollDice();

Mini-Challenge: Roll two dice and print their sum using await.

## Day 5: Fetch API

📖 Read: fetch(url) returns a promise → use .json() to parse.

📝 Code:

async function getTodo() {
  const res = await fetch("<https://jsonplaceholder.typicode.com/todos/1>");
  const todo = await res.json();
  console.log(todo.title);
}
getTodo();

Mini-Challenge: Fetch two todos and log both titles in order.

## Day 6: Event Loop & Task Queues

📖 Read: Event loop → call stack, Web APIs, callback queue, microtask queue.

📝 Code:

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

👉 Predict the order before running.

Mini-Challenge: Explain why Promises run before setTimeout.

## Day 7: Putting It All Together

📖 Review: callbacks → promises → async/await → fetch → event loop.

📝 Project: Build a Mini To-Do Fetcher

Fetch 5 todos from the API.

Print them one by one with a delay between each (use async/await + setTimeout).

If the fetch fails, handle the error gracefully.

✅ By the end of this week, you’ll be confident in async JS and ready for advanced topics like Promise.all, concurrency patterns, and real-world API handling.
