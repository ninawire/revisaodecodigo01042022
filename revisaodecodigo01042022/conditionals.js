let sale = true;

if(sale) {
    console.log('It`s sale, time to buy!')
};
//----------------------------------------------
sale = false;

if(sale) {
    console.log('It`s sale, time to buy!');
} else {
    console.log('Isn`t time to buy! Let`s wait for a sale!');
};
//-----------------------------------------------
let stopSign = 'Red';
if(stopSign === 'Red') {
    console.log('Stop!');
} else if (stopSign === 'Yellow') {
    console.log('Caution');
} else {
    console.log('Go');
};
stopSign = 'Yellow';
if(stopSign === 'Red') {
    console.log('Stop!');
} else if (stopSign === 'Yellow') {
    console.log('Caution');
} else {
    console.log('Go');
};
stopSign = 'Green';
if(stopSign === 'Red') {
    console.log('Stop!');
} else if (stopSign === 'Yellow') {
    console.log('Slow Down');
} else {
    console.log('Go!');
};
//---------------------------------------------
let place = 1;
switch (place) {
    case 1 :
        console.log('First Place! Gold Medal!');
    break;
    case 2 :
        console.log('Second Place! Silver Medal!');
    break;
    case 3 :
        console.log('Third Place! Bronze Medal!');
    break;
    default:
        console.log('No medal this time, sorry!')
    break;
};
place = 2;
switch (place) {
    case 1 :
        console.log('First Place! Gold Medal!');
    break;
    case 2 :
        console.log('Second Place! Silver Medal!');
    break;
    case 3 :
        console.log('Third Place! Bronze Medal!');
    break;
    default:
        console.log('No medal this time, sorry!')
    break;
};
place = 3;
switch (place) {
    case 1 :
        console.log('First Place! Gold Medal!');
    break;
    case 2 :
        console.log('Second Place! Silver Medal!');
    break;
    case 3 :
        console.log('Third Place! Bronze Medal!');
    break;
    default:
        console.log('No medal this time, sorry!')
    break;
};
place = 4;
switch (place) {
    case 1 :
        console.log('First Place! Gold Medal!');
    break;
    case 2 :
        console.log('Second Place! Silver Medal!');
    break;
    case 3 :
        console.log('Third Place! Bronze Medal!');
    break;
    default:
        console.log('No medal this time, sorry!')
    break;
};