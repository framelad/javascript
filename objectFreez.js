const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
};

Object.freeze(smartphone);

smartphone.price = 100; // Errore: cannot assign to read only property 'price'

console.log(smartphone);
