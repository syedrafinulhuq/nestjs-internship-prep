# JS Fundamentals Note

* Explanation of `let` vs `const`
* Examples with code
* Mental model (variables, references, and values)
* ASCII diagram
* Image diagram link (you can embed it if you want)
* Immutability with `Object.freeze`



---

````md
# JavaScript Notes: `let` vs `const`

Understanding the difference between `let` and `const` is crucial when working with variables in JavaScript.  

---

## 🔑 Key Differences

- **`let`** → reassignable (the variable can point to a new value in memory).  
- **`const`** → not reassignable (the variable must always point to the same memory reference).  
- ❗ But: `const` does **not** make the value itself immutable — if it’s an object/array, its contents can still change.

---

## 📖 Examples

```js
// let → reassignable
let x = 10;
x = 20;   // ✅ allowed

// const → not reassignable
const y = 10;
y = 20;   // ❌ Error: Assignment to constant variable
````

---

## Arrays and Objects with `const`

```js
const arr = [1, 2, 3];

arr[0] = 99;   // ✅ allowed (mutating array contents)
arr.push(4);   // ✅ allowed (mutating array contents)

arr = [5, 6];  // ❌ Error (trying to reassign the variable reference)
```

---

## 📦 Mental Model: Variables, References, and Values

Variables are like **arrows (references)** that point to values stored in memory.

```js
let a = [1, 2, 3];
const b = [4, 5, 6];
```

```
   a  ──▶  [1, 2, 3]
   b  ──▶  [4, 5, 6]
```

* The **variable** is the arrow.
* The **value** (array/object/primitive) lives inside a memory box.
* `let` → the arrow can be redirected to another box.
* `const` → the arrow is locked to one box, but the box contents can still be modified.

---

## 🖼 Visual Diagram

![let vs const diagram](/refpointer.png)

*(This diagram shows how `let` and `const` work with memory references.)*

---

## Making an Object/Array Truly Immutable

If you want to prevent mutations too, use **`Object.freeze()`**:

```js
const frozenArr = Object.freeze([1, 2, 3]);

frozenArr[0] = 99;   // ❌ ignored (or error in strict mode)
frozenArr.push(4);   // ❌ error
```

---

## ✅ Summary

* `let` → reassignable variable reference.
* `const` → fixed reference, but contents may still change.
* To prevent changes inside objects/arrays, use `Object.freeze()`.

```

---

