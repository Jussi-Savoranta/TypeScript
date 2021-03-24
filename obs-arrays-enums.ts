// this is something that you CAN do but is not the preffered way
// const person: {
//     name: string;
//     age: number
// } = {
// this is same thing as above, typescript just does the work of defining every variable of the object with correct variable type
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple to the rescue!
// } = {
//   name: "Jussi",
//   age: 39,
//   hobbies: ["Cooking", "Ballet"],
//   role: [2, 'author'] // this is supposed to have only two elements: first a numeric and second string
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// when you need readable identifiers in an object, enum is a great way to create that
enum Role { ADMIN, READ_ONLY, AUTHOR }; // all caps is not "must-do" but is often the case
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 101, AUTHOR }; // you can even mix the identifiers of enum if you need

const person = {
  name: "Jussi",
  age: 39,
  hobbies: ["Cooking", "Ballet"],
  role: Role.AUTHOR
};

// javascript allows to add third element and change the second to a number
// it doesn't keep track of how many elements is allowed or what types the elements are supposed to be
// so these lines are allowed to do even though we don't intent to do so
// person.role.push('admin'); // push is an exeption, it works even though we specified that role shoould have just two elements 
// person.role[1] = 10; // this throws an error when we use tuples
// person.role = [0, 'admin', 'user']; // this doesn't work and typescript sees this way of adding third element

let favoriteBands: any[]; // any is flexible type but it takes away the advantages of using typescript
favoriteBands = ['Beatles', 5, true]; // it should be used only if you don't know what kind of data is going to be stored to that variable

let favoreiteActivities: String[];
favoreiteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
} else if (person.role === Role.AUTHOR) {
    console.log('is author')
}
