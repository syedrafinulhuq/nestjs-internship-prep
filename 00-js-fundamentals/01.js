// JS Fundamentals Day 1 & 2

// Variables

let counter = 0
counter = 1
console.log(counter)

const pi = 3.14
// pi = 3.1416
console.log(pi)

let name = "rafi"
name = "rafinul"
console.log(name)

const studentNameArr = ['Rafi', 'Shafi', 'Nazrul', 'Jamil']
studentNameArr[0] = 'Safayet'
console.log(studentNameArr)

// Variable with Loop

const studentName = ['Rafi', 'Shafi', 'Nazrul', 'Jamil']

for(i=0; i<studentName.length; i++){
    studentName[i] = "Rafinul" + i
}
console.log("After Loop", studentName)



/*

❤️ What I learned?

1. Let and Const are different declaration type. 
2. let can be reassigned✅
3. const cannot be reassinged❌
4. both let and const can be modified✅


*/



// Arrow Function 

let sumName = (firstName,lastName) => firstName + lastName; 
const sumNumber = (a,b) => a + b;

console.log(sumName("Rafi", "Nul"))
console.log(sumName("Sham", "sul"))
console.log(sumNumber(10,5))
console.log(sumNumber(12.6, 17))


const numbers = [1,2,3,4,5]

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const even = numbers.filter(num => num % 2 === 0)
console.log(even);

const square = numbers.map(num => num ** 2)
console.log(square)

const nameArr = ['Amy', 'John', 'Elizabeth', 'Harmony', 'Tom']
const findGreaterName = nameArr.filter(name => name.length > 4);
console.log(findGreaterName);

const lowercaseName = ['hello', 'world', 'how r u ?', 'my name is Amy']
const uppercaseName = lowercaseName.map(name => name.toUpperCase())
console.log(uppercaseName);