for (let counter = 1; counter <= 3; counter++) {
    console.log(counter);
};
console.log('-----------------------------------------------------------------')
for (let counter = 2; counter >= 0; counter--) {
    console.log(counter);
};
console.log('-----------------------------------------------------------------')
const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
};
console.log('-----------------------------------------------------------------')
for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < 3; j++) {
        console.log([j] + '. ' + letters[j]);
    }
};
console.log('-----------------------------------------------------------------')
let counting = 1;
while (counting <= 3) {
    console.log(counting);
    counting++;
};
console.log('-----------------------------------------------------------------')
let maximum = 3;
let count = 0;
do {
    count++;
    console.log(count);
} while (count < maximum);
for (let i = 1; i < 99; i++) {
    if (i < 3) {
        break;
    } console.log('counting ' + [i]);
};
console.log('-----------------------------------------------------------------')
const alphabet = ['a', 'b', 'c'];
for (const letter of alphabet) {
    console.log(letter);
};
console.log('-----------------------------------------------------------------')
const userName = 'nina';
for (const char of userName) {
    console.log(char);
};
console.log('-----------------------------------------------------------------')
const invader = [1, 2, 3, 'a', 4, 5];

for (const alien of invader) {
    if (alien === 'a'){
        continue;
    } console.log(alien);
};
console.log('-----------------------------------------------------------------')
const fruits = ['Grapes', 'Strawberries', 'Pineapples', 'Apples', 'Pears'];

fruits.forEach(fruit => console.log('* ' + fruit));
console.log('-----------------------------------------------------------------')
const numerals = [1, 2, 3, 4, 5];

const bigNumbers = numerals.map (numeral => {
    return numeral * 10;
});

const evenBigger = bigNumbers.map (big => {
    return big * 10;
})

console.log(numerals);
console.log(bigNumbers);
console.log(evenBigger);
console.log('-----------------------------------------------------------------')
const allNumbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = allNumbers.filter(number => {
    return (number % 2 === 0);
});

console.log(allNumbers);
console.log(evenNumbers);
console.log('-----------------------------------------------------------------')