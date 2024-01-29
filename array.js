const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

console.log(names.join(' - '))

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

for (const student of students) {
    console.log(student);
}

// Rimuoviamo lo studente "Giovanni"
students.pop()
// students.splice(2, 1);

// Aggiungiamo lo studente "Francesco"
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });

console.log(students);
