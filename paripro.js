const START = 0, END = 20

const numbers = Array.from({ length: END - START + 1 }, (_, i) => i + START);

console.log(
    numbers.reduce((description, number)=>
        `${description}\n ${number} è ${number % 2 === 0 ? "pari" : "dispari"}`, "")
)