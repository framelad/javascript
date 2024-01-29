function sayHelloName(name) {
    const hello = "Hello ";
    return hello + name;
}

function callSayHello() {
    sayHelloName('Francesco')
}

function printName() {
    console.log("Il mio nome è Fra");
}

function sayHelloAndCall(callback) {
    console.log("Hello");
    callback();
}

function castHelloName() {
    sayHelloAndCall(printName)
}

setTimeout(() => {
    castHelloName()
}, 1000);