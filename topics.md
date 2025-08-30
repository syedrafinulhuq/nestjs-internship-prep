# All JS Essentials

---

## ✅ **JavaScript ES6+ Essentials**

These are modern features of JavaScript (from ES6 onwards) that you’ll use constantly:

* **`let` and `const`**

  * `let`: reassignable variables
  * `const`: variables that cannot be reassigned
  * Example:

    ```js
    let counter = 1;
    counter = 2;  // ✅ allowed

    const PI = 3.14;
    PI = 3.1415;  // ❌ error
    ```

* **Arrow functions (`=>`)**

  * A shorter way to write functions, with lexical `this` binding.

    ```js
    const add = (a, b) => a + b;
    console.log(add(2, 3)); // 5
    ```

* **Template literals**

  * Use backticks (\`\`) for string interpolation and multi-line strings.

    ```js
    const name = "Rafinul";
    console.log(`Hello, ${name}!`);  // Hello, Rafinul!
    ```

* **Destructuring**

  * Extract values from arrays or objects easily.

    ```js
    const user = { name: "Rafinul", age: 25 };
    const { name, age } = user;
    console.log(name, age); // Rafinul 25
    ```

---

## ✅ **Async Concepts**

Node.js is **asynchronous** and event-driven, so mastering async is crucial.

* **Callbacks**
  Functions passed into other functions to run later.

  ```js
  setTimeout(() => {
    console.log("This runs later");
  }, 1000);
  ```

* **Promises**
  A cleaner way to handle async operations.

  ```js
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
  };

  fetchData().then(data => console.log(data));
  ```

* **`async/await`**
  Syntactic sugar on top of promises; makes async code look synchronous.

  ```js
  const load = async () => {
    const data = await fetchData();
    console.log(data);
  };
  load();
  ```

---

## ✅ **TypeScript Basics (for NestJS)**

NestJS is **TypeScript-first**, so you’ll benefit from knowing these:

* **Interfaces & Types**
  Define the “shape” of data.

  ```ts
  interface User {
    name: string;
    age: number;
  }

  const user: User = { name: "Rafinul", age: 25 };
  ```

* **Classes**
  Used everywhere in NestJS (controllers, services).

  ```ts
  class Car {
    constructor(public brand: string) {}
    drive() {
      console.log(`${this.brand} is driving`);
    }
  }

  const car = new Car("Tesla");
  car.drive(); // Tesla is driving
  ```

* **Decorators**
  Special annotations (functions) that add metadata — heavily used in NestJS.

  ```ts
  function Log(target: any, key: string) {
    console.log(`${key} was called`);
  }

  class Example {
    @Log
    sayHello() {
      console.log("Hello");
    }
  }
  ```

---

✅ **In summary**:
Before Node.js, make sure you’re comfortable writing **modern JavaScript**, handling **async code**, and understanding **TypeScript syntax** — especially classes and decorators, since NestJS is built around them.

---

