const announceIAmDoingSomethingVeryImportant = () => {
    console.log('I am doing something very important!')
}
announceIAmDoingSomethingVeryImportant();
const busy = announceIAmDoingSomethingVeryImportant;
busy();
console.log('--------------------------------------------------------------------------');
const timeFuncRuntime = funcParameter => {
    let tOne = Date.now();
    funcParameter();
    let tTwo = Date.now();
    return tTwo - tOne;
};

timeFuncRuntime (() => {
    for (let i = 10; i > 0; i--){
        console.log(i);
    }
})
