let spaceship = {

};
//--------------------------------------
spaceship = {
    fuelType: 'Diesel',
    color: 'Silver',
    'Pilot Name': 'John Doe',
    tripulation: 0,
};

let paintItGold = obj => {
    obj.color = 'Glorious Gold'
};
//---------------------------------------
console.log(spaceship.fuelType);
console.log(spaceship.color);
console.log(spaceship.pilot);
console.log(spaceship['Pilot Name']);
//---------------------------------------
console.log(spaceship.tripulation);
spaceship.tripulation = 10;
console.log(spaceship.tripulation);
delete spaceship.tripulation;
console.log(spaceship.tripulation);
paintItGold(spaceship);
console.log(spaceship.color);
//---------------------------------------
const factory = {
    makeChocolate: function(){
        console.log('One chocolate made.')
    }
};
factory.makeChocolate();
//----------------------------------------
const pens = {
    bluePen: {
        color: 'Blue',
        point: 0.5,
        capOn: true
    },
    redPen: {
        color: 'Red',
        point: 0.7,
        capOn: true
    },
    blackPen: {
        color: 'Black',
        point: 0.5,
        capOn: false
    },
};
console.log(pens.bluePen);
console.log(pens.redPen.color);
//----------------------------------------
const hospital = {
    crew: {
        medic: {
            name: 'Charles D.',
            age: 39,
            phrase() {
                console.log('It is a virus.')
            }
        },
        nurse: {
            name: 'Drake F.',
            age: 28,
            phrase() {
                console.log('You gonna be alright.')
            }
        },
        surgeon: {
            name: 'Faith G.',
            age: 35,
            phrase() {
                console.log('I have a surgery!')
            }
        }
    }
};

for (let crewMember in hospital.crew) {
    console.log(crewMember + ': ' + hospital.crew[crewMember].name);
};
//--------------------------------------------------------------------
