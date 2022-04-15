const goat = {
    dietType: 'Herbivore',
    makeSound () {
        console.log('BAAAAAAH');
    },
    diet() {
        console.log(this.dietType);
    }
};
goat.makeSound();
goat.diet();
console.log('--------------------------------------------------------------------------');
const dog = {
    _name: 'Toto',
    _race: 'Pooddle',
    get nameAndRace () {
        if (this._name && this._race) {
            return ('It is a ' + this._race + ' named ' + this._name + '.');
        } else {
            return 'Missing name or race, impossible to return';
        }
    },
    set name (newName) {
        if(typeof newName === 'string') {
            this._name = newName;
            console.log('Name reassigned to ' + this._name + '.');
        } else {
            console.log('You must assign a string to name');
        }
    }
};

console.log(dog.nameAndRace);
dog.name = 8;
console.log(dog.nameAndRace);
dog.name = 'Cookie';
console.log('--------------------------------------------------------------------------');
const monsterFactory = (name, age, vulnerability, energySource, phrase) => {
    return {
        name,
        age,
        vulnerability,
        energySource,
        scare() {
            console.log(phrase);
        }
    }
};

const vampire = monsterFactory('Lestat', 587, 'Holly Water', 'Blood', 'I will suck your blood!');
console.log(vampire);
vampire.scare();
const {name} = vampire;
console.log(name);
console.log('--------------------------------------------------------------------------');

console.log(vampire.hasOwnProperty('age'));
const vampire2 = Object.assign(vampire);
console.log(vampire2);
console.log(Object.keys(vampire));