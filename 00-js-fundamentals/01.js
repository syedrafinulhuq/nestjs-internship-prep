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