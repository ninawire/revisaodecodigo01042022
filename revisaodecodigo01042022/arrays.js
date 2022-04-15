let numbers = [1, 2, 3, 4];
console.log(numbers);
//---------------------------------
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
//----------------------------------
numbers[0] = 5;
console.log(numbers);
numbers[0] = 1;
console.log(numbers);
//----------------------------------
console.log(numbers.length);
//----------------------------------
numbers.push(5);
console.log(numbers);
//----------------------------------
let numbersAndLetters = [[1, 2, 3], ['a', 'b', 'c']];
console.log(numbersAndLetters);
console.log(numbersAndLetters[0]);
console.log(numbersAndLetters[1]);
console.log(numbersAndLetters[0][0]);
console.log(numbersAndLetters[1][0]);