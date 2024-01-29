// variabile su cui lavorare
let isItRaining = true;
const TEXT_TO_PRINT = 'is of type:'

// stampo la variabile
console.log('isItRaining:'+isItRaining);
console.log(TEXT_TO_PRINT+typeof isItRaining);

// casto a numero
let castedToNumber = Number(isItRaining);
console.log('castedToNumber:'+castedToNumber);
console.log(TEXT_TO_PRINT+typeof castedToNumber);

// casto a stringa
let castedToString =String(isItRaining);
console.log('castedToString:'+castedToString);
console.log(TEXT_TO_PRINT+typeof castedToString);

// casto a boolean
let castedToBoolean = Boolean(isItRaining);
//console.log(Boolean(isItRaining)); NO
console.log('castedToBoolean:'+castedToBoolean);
console.log(TEXT_TO_PRINT+typeof castedToBoolean);
