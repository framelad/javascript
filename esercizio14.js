const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

// First operation
console.log(isSunnyDay && isSummer); // true

// Second operation
console.log(isSunnyDay || isAutumn); // true

// Third operation
console.log(!itIsRaining); // true

// Fourth operation
console.log(isSunnyDay && isAutumn); // false

// Fifth operation
console.log(!isSunnyDay || itIsRaining); // false

// Sixth operation
console.log(!isSummer); // false
