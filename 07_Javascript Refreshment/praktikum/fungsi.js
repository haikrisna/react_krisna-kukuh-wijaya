let name = "krisna"

function greetUser(name) {
    return `Hello, ${name}! Welcome!`;
}

const greetUserArrow = (name) => `Hello, ${name}! Welcome!`;

terimaGreet = greetUser; 

console.log(terimaGreet(name));