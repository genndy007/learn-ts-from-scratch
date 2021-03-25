// with unknown we should previously check its current
// type because we don't know what is it now
let userInput: unknown;

let username: string;

const loler = 5;

if (typeof userInput === 'string') username = userInput;

function generateError(msg: string, code: number): never {
    throw { msg: msg, errCode: code };
}

console.log('hilul');
generateError('server error', 500);
