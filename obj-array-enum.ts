// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Bastard',
//     age: 228,
//     hobbies: ['sport', 'cooking'],
//     role: [2, 'coauthor'],
// };

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Bastard',
    age: 228,
    hobbies: ['sport', 'cooking'],
    role: Role.AUTHOR,
};

// !!! Push ignores tuple fixed size, we can push unlimited
let favActs: string[];
favActs = ['sport'];

console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}

if (person.role === Role.AUTHOR) {
    console.log('person is author');
}
