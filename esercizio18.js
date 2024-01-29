// Dichiarazione variabili
const isSunnyDay = true;
let isHomeworkCompleted = true;

// Stampa messaggio
console.log(isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play" : "Jesse stays at home");

isHomeworkCompleted = false;
console.log(isSunnyDay && isHomeworkCompleted ? "Jesse can go out to play" : "Jesse stays at home");
