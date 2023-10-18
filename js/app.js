
const randomNumber = getNumberForArray(1, 100, 5);
console.log(randomNumber)
alert('ricorda questi numeri ' + randomNumber + '. Dopo aver cliccato su ok aspetta 30 secondi')

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


setTimeout(wait, 30000);

function wait() {

    // chiedere i numeri al utente

    let score = 0;

    const getNumbers = [];
    const numbersGuessed = [];

    for (let i = 0; i < 5; i++) {

    const typeNumbers = parseInt(prompt('Inserisci i numeri'));
    getNumbers.push(typeNumbers) ;

    if (randomNumber.includes(typeNumbers) &&
        !numbersGuessed.includes(typeNumbers)) {

        numbersGuessed.push(typeNumbers)
        score++
    }

    }
    console.log(getNumbers, numbersGuessed);

    alert(`hai indovinato numero ${numbersGuessed} e il tuo score è ${score}`);
}







