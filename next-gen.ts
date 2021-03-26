const userName = 'Max';
let age = 30;

// const add = (a: number, b: number = 7) => a + b;

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', (event) => console.log(event));
// }

// printOutput(add(6));

const hobbies = ['suck', 'fuck'];
hobbies.push('cock');
console.log(...hobbies);

const person = {
    name: 'lol',
    age: 27,
};

const newPerson = { ...person };
console.log(newPerson);

const add = (...numbers: [number, number, number]) => {
    return numbers.reduce((pre, cur) => (pre += cur));
};

console.log(add(10, 4, 56));
