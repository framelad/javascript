let user = {
    name: "Cosimo",
    age: 30,
};

let newUser = { ...user };

newUser.name = "Paolo";

console.log(newUser); // { name: "Paolo", age: 30 }
console.log(user); // { name: "Cosimo", age: 30 }