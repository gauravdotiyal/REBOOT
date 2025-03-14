function greet(firstName:string) {
  console.log("hello", firstName);
}
// type inference of the function
function sum(s: number, b: number): number {
  return s + b;
} 
function isLegal(age: number): boolean {
  if (age > 18) return true;
  else return false;
}

// function that takes another function as input
// function runAfter(greet: () => void) {
//   setTimeout(greet, 2000);
// }
// runAfter(() => greet("asim"));
// console.log(sum(1, 3));
// console.log(isLegal(19));
// console.log(greet("Raj"));


// interface to pass object inside the function   
interface User{
  firstName:string;
  lastName:string;
  age:number;
  city:string;
}

const user1={
  firstName:"gaurav",
  lastName:"dotiyal",
  age:10,
  city:"Dehradun"
}

function isLegaled(user:User){
  if(user.age>18) return true;
  else return false;
}

console.log(isLegaled(user1))

// generics 
function generics<T> (arr:T[]){
  return arr[0];
}

let output1=generics<string>(["Gaurav"]) ;
let output2=generics<number>([1,2,3]);

console.log(output1.toUpperCase());

// Importing modules
// always import modules by import syntax not require ES6 modules


