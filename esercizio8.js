// Crea una variabile e assegnale come valore true
let isTrue = true;

// Stampa il suo valore in console e il tipo di dato
console.log("Il valore della variabile isTrue è: " + isTrue);
console.log("Il tipo di dato della variabile isTrue è: " + typeof isTrue);

// Esegui il casting a number
let isTrueAsNumber = Number(isTrue);
console.log("Il valore della variabile isTrue dopo il casting a number è: " + isTrueAsNumber);
console.log("Il tipo di dato della variabile isTrue dopo il casting a number è: " + typeof isTrueAsNumber);

// Esegui il casting a string
let isTrueAsString = String(isTrue);
console.log("Il valore della variabile isTrue dopo il casting a string è: " + isTrueAsString);
console.log("Il tipo di dato della variabile isTrue dopo il casting a string è: " + typeof isTrueAsString);

// Infine esegui il casting a boolean
let isTrueAsBoolean = Boolean(isTrueAsString);
console.log("Il valore della variabile isTrue dopo il casting a boolean è: " + isTrueAsBoolean);
console.log("Il tipo di dato della variabile isTrue dopo il casting a boolean è: " + typeof isTrueAsBoolean);