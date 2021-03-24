// Type Aliases
type Combinable = number | string;
type ConversionDesc = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConv: ConversionDesc
) {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConv === 'as-number'
    )
        result = +input1 + +input2;
    else result = input1.toString() + input2.toString();

    // if (resultConv === 'as-number') return +result;
    // else return result.toString();
    return result;
}

const combinedAges = combine('30', '25', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Pen', 'Island', 'as-text');
console.log(combinedNames);
