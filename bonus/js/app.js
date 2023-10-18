
const randomNumber = getNumberForArray(1, 100, 5);
console.log(randomNumber)
// alert('ricorda questi numeri ' + randomNumber + '. Dopo aver cliccato su ok aspetta 30 secondi')

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

const rememberDomElement = document.getElementById('numbers');
console.log(rememberDomElement)

const reminderDomElement = document.getElementById('reminder');

const textDomElement = `
<h1>Ricorda i seguenti numeri</h1>
`
reminderDomElement.innerHTML = textDomElement;

for (let i = 0; i < randomNumber.length; i++) {

    const numbers = randomNumber[i]
    console.log(numbers);

    const colString = `
    <div class="col text-style">${numbers}</div>`
    rememberDomElement.innerHTML += colString;
}

setInterval(()=>{
    rememberDomElement.innerHTML = ''
    reminderDomElement.innerHTML = ''
}, 5000);


const guessDomElement = document.getElementById('numbers-two');
console.log(guessDomElement)

setTimeout(wait, 30000);

function wait() {

    // chiedere i numeri al utente

    let score = 0;

    const getNumbers = [];
    let numbersGuessed = [];

    for (let i = 0; i < 5; i++) {

        const typeNumbers = parseInt(prompt('Inserisci i numeri'));
        getNumbers.push(typeNumbers) ;

        if (randomNumber.includes(typeNumbers) &&
            !numbersGuessed.includes(typeNumbers)) {

            numbersGuessed.push(typeNumbers)
            console.log(numbersGuessed)
            score++
        }
    }

    for (let i = 0; i < numbersGuessed.length; i++) {

        const risult = numbersGuessed[i]

        const colGuessString = `
        <div class="col text-style">${risult}</div>
        `
        guessDomElement.innerHTML += colGuessString;
    }

    const scoreDomElement = document.querySelector('.score');
    scoreDomElement.innerHTML = score;
    // alert(`hai indovinato numero ${numbersGuessed} e il tuo score è ${score}`);
}







