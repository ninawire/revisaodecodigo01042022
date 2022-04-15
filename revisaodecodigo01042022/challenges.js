/*CODE CHALLENGES: INTERMEDIATE JAVASCRIPT

reverseArray()
Instructions
1.
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!*/

const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

console.log(reverseArray(sentence).join(' '));
console.log('---------------------------------------------------------');

/*greetAliens()
Instructions
1.
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

greetAliens(aliens);*/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log('Oh powerful ' + aliens[i] + ', we humans offer our unconditional surrender!');
    }
};

greetAliens(aliens);
console.log('---------------------------------------------------------');

/*convertToBaby()
Instructions
1.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.*/

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
    let babyAnimals = [];
    for (let i = 0; i < animals.length; i++) {
        babyAnimals.push('Baby ' + animals[i]);
    }
    console.log(babyAnimals);
}
 
convertToBaby(animals); 
console.log('---------------------------------------------------------');

//Fix the code! loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers));
console.log('---------------------------------------------------------');

/*declineEverything() and acceptEverything() Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().
You can test your function when you’re ready by passing in the veggies array or by making your own array! Now we need to get healthy! Write a function acceptEverything()*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
    arr.forEach(politelyDecline)
}

const politelyAccept = (veg) => {
    console.log('Ok, I guess I will eat some ' + veg + '.')
}

const acceptEverything = arr => {
    arr.forEach(politelyAccept)
}

declineEverything(veggies);
acceptEverything(veggies);
console.log('---------------------------------------------------------');

/*Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array. You can test your function when you’re ready by passing in the numbers array or by making your own array!*/

const nums = [1, 2, 3, 4];

const toSquare = num => num * num

const squareNums = arr => arr.map(toSquare)

console.log(squareNums(nums));
console.log('---------------------------------------------------------');

/*Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'You can use any technique you want to accomplish this task.*/

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

console.log(shoutGreetings(greetings));
console.log('---------------------------------------------------------');

/*Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = arr => arr.sort();

console.log(sortYears(years));
console.log('---------------------------------------------------------');

/*Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

console.log(justCoolStuff(myStuff, coolStuff))
console.log('---------------------------------------------------------');

/*
Write a function isTheDinnerVegan() that takes in an array of food objects and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.*/

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');
 
console.log(isTheDinnerVegan(meal));
console.log('---------------------------------------------------------');