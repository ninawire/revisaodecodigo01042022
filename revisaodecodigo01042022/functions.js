function sayThanks(name) {
    console.log(`Thank you ${name}.`)
};

sayThanks('Thatiana');
console.log('-----------------------------------------------------------------')
function sayThanksStranger(name = 'Stranger') {
    console.log(`Thank you ${name}.`)
};

sayThanksStranger();
sayThanksStranger('Thatiana');
console.log('-----------------------------------------------------------------')
function rectangleArea(width, height) {
    let area = width * height;
    return area;
}

console.log(rectangleArea(2, 3));
console.log('-----------------------------------------------------------------')
let sumTwo = function(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
};

console.log(sumTwo(2, 3));
console.log('-----------------------------------------------------------------')
const divide = (first, second) => {
    let division = first / second;
    return division;
};

console.log(divide(16, 2));
console.log('-----------------------------------------------------------------')
let squareNum = num => num * num;
console.log(squareNum(5));

const isSaturday = day => day === 'Saturday' ? true : false;
console.log(isSaturday('Saturday'));
console.log(isSaturday('Monday'));
console.log('-----------------------------------------------------------------')
