// Crea le variabili booleane
let itIsRaining = (Math.random() > 0.5);
let itIsSunny = (Math.random() > 0.5);
let itIsCloudy = (Math.random() > 0.5);
let itIsCold = (Math.random() > 0.5);
let itIsHot = (Math.random() > 0.5);

// Stampa le variabili
console.log('Today...')
console.log("itIsRaining: " + itIsRaining);
console.log("itIsSunny: " + itIsSunny);
console.log("itIsCloudy: " + itIsCloudy);
console.log("itIsCold: " + itIsCold);
console.log("itIsHot: " + itIsHot);

// Crea un array di 5 campi booleani
const weatherConditions = [
    "itIsRaining",
    "itIsSunny",
    "itIsCloudy",
    "itIsCold",
    "itIsHot",
];

console.log('Tomorrow...')

let weatherNow = [];
// Assegna valori casuali ai campi
for (let i = 0; i < weatherConditions.length; i++) {
    weatherNow[i] = (Math.random() > 0.5)
    console.log (weatherConditions[i], weatherNow[i])
}
