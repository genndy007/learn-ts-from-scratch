function newAdd(n1: number, n2: number) {
    return n1 + n2;
}

function printAddResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printAddResult(newAdd(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = newAdd;
//combineValues = 5;

addAndHandle(10, 375, (result) => {
    console.log(result);
});
