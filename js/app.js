
const randomNumber = getNumberForArray(1, 100, 5);
console.log(randomNumber)
alert('ricorda questi numeri ' + randomNumber + '. Dopo aver cliccato su ok aspetta 3 secondi')

function getNumberForArray (randomMin, randomMax, totalNumber) {

    const arrayNumbers = [];

    while (arrayNumbers.length < totalNumber) {
        const number = getRandomInt(randomMin, randomMax);

        if (!arrayNumbers.includes(number)){
            arrayNumbers.push(number);
        }
    }
    return arrayNumbers
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


setTimeout(wait, 3000);

function wait() {

    let getNumbers = []

    for (let i = 0; i < 5; i++) {

    const typeNumbers = prompt('Inserisci i numeri');
    getNumbers.push(typeNumbers) ;

    }
    console.log(getNumbers);
}





