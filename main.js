// Your code here.

// getFirstName

function getFirstName(person){
  return person.firstName;
}

let person1 = {
  firstName: "Enzo",
  lastName: "Morales",
}

console.log(getFirstName(person1));

// getLastName

function getLastName(person){
  return person.lastName;
}

console.log(getLastName(person1));

// getFullName

function getFullName(person){
  return (`${person.firstName} ${person.lastName}`);
}

console.log(getFullName(person1));

// setFirstName

function setFirstName(person, newName){
  person.firstName = newName;
 
}

setFirstName(person1,"Marco")

console.log(person1);

// setAge

function setAge(person, newAge){
  person.age = newAge;
  
}

let person2 = {
  firstName: "Enzo",
  lastName: "Morales",
  age: 35,
}
setAge(person2,27)
console.log(person2);

// giveBirthday

function giveBirthday(person){
  if (typeof person.age === "number"){
    person.age += 1;
    
  } else {
    person.age = 1;
    
  }
}
giveBirthday(person2)
console.log(person2);

// marry

function marry(person1, person2){
  person1.married = true;
  person2.married = true; 
  // now both are married
  person1.spouseName = `${person2.firstName} ${person2.lastName}` ;
  person2.spouseName = `${person1.firstName} ${person1.lastName}`;
  // now both are registered as each one spouses
}

let person3 = {
  firstName: "Tom",
  lastName: "Thompson",
  married: false,
}

let person4 = {
  firstName: "Dani",
  lastName: "Davidson",
  married: false,
}

marry(person3, person4)

console.log(person3);
console.log(person4);

// divorce
function divorce(person1, person2){
  person1.married = false;
  person2.married = false;
  //now both are divorced!
  delete person1.spouseName;
  delete person2.spouseName;
  //now the new status is even more legal?!
}

let person5 = {
  firstName: "Camila",
  lastName: "Ramirez",
  married: true,
  spouseName: "Diego Chavez"
}

let person6 = {
  firstName: "Diego",
  lastName: "Chavez",
  married: true,
  spouseName: "Camila Ramirez"
}

divorce(person5, person6);
console.log (person5);
console.log (person6);

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
