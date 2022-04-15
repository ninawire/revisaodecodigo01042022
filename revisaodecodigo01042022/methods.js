const name = 'Thatiana';
console.log('-----------------------------------------------------------------')
console.log('Hello'.toUpperCase());
console.log(name.toUpperCase());
console.log('-----------------------------------------------------------------')
console.log('Hello'.startsWith('H'));
console.log(name.startsWith('Z'));
console.log('-----------------------------------------------------------------')
console.log('        Remove Whitespace!              '.trim());
console.log('-----------------------------------------------------------------')
const jumbleNumbers = [123, 25, 5, 78, 9];

const lessThanTen = jumbleNumbers.findIndex(num => {
    return num < 10;
});

console.log(lessThanTen);
console.log('-----------------------------------------------------------------')
const values = [1, 2, 3, 4, 5];

const sumValues = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(sumValues);

const sumValuesWithInitial = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100);
console.log(sumValuesWithInitial);
console.log('-----------------------------------------------------------------')