# 📌 Backend Engineering Roadmap  

(JavaScript + Node.js Core + Express.js + Databases + NestJS)

This is a **complete checklist + reference** of everything you must know to become a **backend engineer**.  
Use this as your **study + practice roadmap**.

---

## ✅ Part 1: JavaScript Fundamentals for Backend

## 1. Variables & Data Types

- `let`, `const`, `var` (scope differences)  
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`  
- Reference types: `object`, `array`, `function`  
- Type checking:  

  ```js
  typeof "hello"; // "string"
  Array.isArray([1,2,3]); // true
  obj instanceof Object; // true



## 2. Operators

- Arithmetic: `+ - * / % **`
- Assignment: `=, +=, -=, *=`
- Comparison: `== vs ===`, `!= vs !==`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`
- Nullish coalescing: `??`
- Optional chaining: `?.`
- Ternary operator:

  ```js
  const msg = isLoggedIn ? "Welcome!" : "Please log in";
  ```

---

## 3. Control Flow

- `if`, `else if`, `else`
- `switch`
- Loops:

  - `for`, `while`, `do...while`
  - `for...of` (arrays, iterables)
  - `for...in` (objects)
- `break` and `continue`

---

## 4. Functions

- Function declaration vs expression
- Arrow functions `()=>`
- Parameters: default values, rest (`...args`)
- Return values
- Scope (block, function, global)
- Closures (function inside function remembering outer scope)

---

## 5. Objects

- Object literals `{ key: value }`
- Access:

  ```js
  user.name; // dot
  user["age"]; // bracket
  ```

- Shorthand properties `{name}` instead of `{name: name}`
- Methods inside objects
- Destructuring:

  ```js
  const {name, age} = user;
  ```

- `Object.keys()`, `Object.values()`, `Object.entries()`
- Spread operator `{...obj}`
- `this` keyword basics

---

## 6. Arrays

- Creation: `[]`, `new Array()`

### Common methods

- `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.map()`, `.filter()`, `.reduce()`, `.forEach()`
- `.find()`, `.some()`, `.every()`
- `.includes()`, `.indexOf()`
- `.sort()`, `.reverse()`

### Spread/rest

```js
const arr2 = [...arr1, 5];
```

### Destructuring

```js
const [first, second] = arr;
```

---

## 7. Advanced Functions & Objects

- Higher-order functions (functions as arguments/returns)
- Callbacks
- `this` binding & arrow functions
- Prototype & inheritance basics (`Object.create`)
- ES6 Classes:

  ```js
  class Car extends Vehicle {
    constructor(brand) {
      super();
      this.brand = brand;
    }
  }
  ```

---

## 8. Error Handling

- `try...catch`
- Throwing errors:

  ```js
  throw new Error("Something went wrong");
  ```

- `finally` block

---

## 9. Asynchronous JavaScript

- Event loop basics (call stack, task queue, microtasks)
- `setTimeout`, `setInterval`
- Promises (`then`, `catch`, `finally`)
- `async/await`
- `Promise.all`, `Promise.race`, `Promise.allSettled`

---

## 10. ES Modules & Imports

- `export default` vs named exports
- Importing:

  ```js
  import {x} from './file.js';
  ```

- CommonJS (Node.js):

  ```js
  const module = require('./file');
  ```

- ESM:

  ```js
  import module from './file.js';
  ```

---

## ✅ Part 2: Node.js Core Concepts

## 1. Node.js Basics

- What is Node.js? (event-driven, non-blocking, single-threaded)
- REPL (read–eval–print loop)
- npm basics (`npm init`, `npm install`, scripts)
- Package.json

---

## 2. Node.js Modules

- CommonJS: `require` and `module.exports`
- ES Modules: `import` / `export`
- Built-in modules overview (`fs`, `path`, `os`, `events`, `http`)

---

## 3. File System (fs)

- Reading files: `fs.readFile`, `fs.readFileSync`
- Writing files: `fs.writeFile`, `fs.appendFile`
- Deleting files: `fs.unlink`
- Creating directories: `fs.mkdir`
- Streams with `fs.createReadStream` / `fs.createWriteStream`

---

## 4. Path Module (path)

- `path.join`
- `path.resolve`
- `__dirname`, `__filename`

---

## 5. Events (EventEmitter)

- Importing:

  ```js
  const EventEmitter = require("events");
  const emitter = new EventEmitter();
  ```

- `.on()` vs `.emit()`
- Custom events example

---

## 6. Streams

- Readable streams
- Writable streams
- Duplex & Transform streams
- Piping streams (`readStream.pipe(writeStream)`)

---

## 7. Process & OS

- `process.argv` (CLI arguments)
- `process.env` (environment variables)
- `process.exit()`
- OS module:

  - `os.platform()`, `os.arch()`
  - `os.cpus()`, `os.freemem()`, `os.totalmem()`

---

## 8. HTTP Module

- Creating a server:

  ```js
  const http = require("http");
  const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
  });
  server.listen(3000);
  ```

- Handling routes manually (`req.url`, `req.method`)
- Sending JSON responses
- Serving HTML files

---

## ✅ Part 3: Express.js

### 1. Express Basics

- Installing & setting up:

  ```js
  const express = require("express");
  const app = express();
  app.listen(3000, () => console.log("Server running"));
  ```

- Basic routes: `app.get`, `app.post`, `app.put`, `app.delete`
- Sending JSON responses: `res.json()`
- Static files: `express.static()`

---

### 2. Middleware

- Built-in middleware (`express.json()`, `express.urlencoded()`)
- Custom middleware (logging, auth)
- Order of middleware execution
- Third-party middleware (morgan, cors, helmet)

---

### 3. Routing

- Route parameters (`req.params`)
- Query parameters (`req.query`)
- Request body (`req.body`)
- Express Router for modular routes

---

### 4. Error Handling

- Default error handler
- Custom error middleware (`(err, req, res, next)`)
- 404 handling

---

### 5. REST API Best Practices

- CRUD operations (Create, Read, Update, Delete)
- Status codes (200, 201, 400, 401, 404, 500)
- Route naming conventions (`/api/v1/...`)

---

### 6. Authentication (Basic)

- Password hashing with **bcrypt**
- JWT authentication with **jsonwebtoken**
- Protecting routes with middleware

---

### 7. Advanced Express

- Environment variables with `dotenv`
- CORS setup
- Logging requests (morgan/winston)
- Rate limiting (express-rate-limit)
- Security with helmet

---

## ✅ Part 4: Databases

### 1. MongoDB (NoSQL)

- Installing & connecting (`mongoose.connect()`)
- Schemas & Models
- CRUD operations:

  - `Model.create()`
  - `Model.find()`, `Model.findOne()`
  - `Model.updateOne()` / `findByIdAndUpdate()`
  - `Model.deleteOne()` / `findByIdAndDelete()`
- Query filters (`$gt`, `$lt`, `$in`, `$or`)
- Population (`ref`, `populate`)
- Validation in schemas

---

### 2. PostgreSQL (SQL)

- Basic SQL commands:

  - `CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`
  - Joins: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`
- Relations:

  - One-to-One
  - One-to-Many
  - Many-to-Many
- Using an ORM (Prisma or TypeORM):

  - Defining models/entities
  - Migrations (`npx prisma migrate dev`)
  - Queries with ORM methods
  - Handling relations (e.g., `include`, `relations`)

---

## ✅ Part 5: NestJS (Enterprise Framework)

### 1. NestJS Basics

- Project structure (Modules, Controllers, Services)
- Controllers (`@Controller`, `@Get`, `@Post`)
- Services (`@Injectable`)
- Dependency Injection basics

---

### 2. DTOs & Validation

- Data Transfer Objects (DTOs)
- Validation with `class-validator` & `class-transformer`
- Using Pipes for validation (`@Body`, `@Param`, `@Query`)

---

### 3. Middleware & Providers

- Creating custom middleware
- Providers & Dependency Injection
- Lifecycle hooks (`onModuleInit`, `onModuleDestroy`)

---

### 4. Advanced NestJS

- Guards (`@UseGuards`) for authentication/authorization
- Interceptors (logging, response transformation)
- Exception Filters (error handling)
- Async Providers

---

### 5. Databases with NestJS

- Connecting Prisma or TypeORM
- Creating entities/models
- Repository pattern
- Relations (One-to-One, One-to-Many, Many-to-Many)

---

### 6. Authentication & Authorization

- JWT authentication (`PassportModule`, `JwtModule`)
- Role-based access control (RBAC) with Guards
- Session vs token-based auth

---

### 7. Documentation & Testing

- Swagger API docs (`@nestjs/swagger`)
- Unit testing with **Jest**
- E2E testing with **Supertest**

---

### 8. Deployment & Scaling

- ConfigModule for `.env` management
- Dockerizing a NestJS app
- Deployment to Render, Railway, AWS, or Vercel
- CI/CD basics (GitHub Actions)
- Scaling with Fastify adapter (instead of Express)

---

## 🎯 Final Step: Capstone Projects

Build **1–2 real-world projects** to showcase in your portfolio:

- **🛒 E-commerce API** (users, products, orders, payments, admin panel)
- **💬 Social Media Backend** (users, posts, comments, likes, follows)
- **📚 Learning Platform** (courses, lessons, enrollments, progress tracking)

✅ With this roadmap completed, you will be **job-ready as a backend engineer**.
