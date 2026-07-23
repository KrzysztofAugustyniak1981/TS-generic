"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example for cars
const cars = {
    modelS: { brand: "Tesla", color: "white", price: 79999 },
    corolla: { brand: "Toyota", color: "silver", price: 20000 },
    mustang: { brand: "Ford", color: "red", price: 45000 },
    civic: { brand: "Honda", color: "blue", price: 22000 },
    model3: { brand: "Tesla", color: "black", price: 39999 },
    beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};
// Example for students
const students = {
    alice: { age: 20, major: "Computer Science", gpa: 3.8 },
    bob: { age: 19, major: "Mathematics", gpa: 3.2 },
    charlie: { age: 21, major: "History", gpa: 3.5 },
    diana: { age: 22, major: "Biology", gpa: 3.9 },
    eric: { age: 20, major: "Psychology", gpa: 3.6 },
    fiona: { age: 19, major: "Literature", gpa: 3.4 },
};
function mapDict(dict, callback) {
    const result = {};
    for (const key in dict) {
        result[key] = callback(dict[key], key);
    }
    return result;
}
function filterDict(dict, predicate) {
    const result = {};
    for (const key in dict) {
        if (predicate(dict[key], key)) {
            result[key] = dict[key];
        }
    }
    return result;
}
function reduceDict(dict, callback, initialValue) {
    let accumulator = initialValue;
    for (const key in dict) {
        accumulator = callback(accumulator, dict[key], key);
    }
    return accumulator;
}
//testing the functions
const carBrands = mapDict(cars, (car) => car.brand);
console.log("Car Brands:", carBrands);
const expensiveCars = filterDict(cars, (car) => car.price > 40000);
console.log("Expensive Cars:", expensiveCars);
const totalCarPrice = reduceDict(cars, (total, car) => total + car.price, 0);
console.log("Total Car Price:", totalCarPrice);
//testing the functions with students without using const
console.log("Student GPAs:", mapDict(students, (student) => student.gpa));
console.log("High Age Students:", filterDict(students, (student) => student.age > 20));
console.log("Average GPA:", reduceDict(students, (total, student) => total + student.gpa, 0) / Object.keys(students).length);
