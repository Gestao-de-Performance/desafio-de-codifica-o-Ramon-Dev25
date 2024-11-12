
// INÍCIO: CALCULADORA EXERCÍCIO 1
document.getElementById('calculatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let number1 = parseFloat(document.getElementById('number1').value)
    let number2 = parseFloat(document.getElementById('number2').value)
    let symbol = document.getElementById('symbol').value

    let result

    if (symbol === "+") {
        result = number1 + number2
    } else if (symbol === "-") {
        result = number1 - number2
    } else if (symbol === "*") {
        result = number1 * number2
    } else if (symbol === "/") {
        if (number2 !== 0) {
            result = number1 / number2
        } else {
            alert("Erro: Não é possível dividir por Zero!")
            window.location.reload()
            return
        }
    }

    document.getElementById('result').value = result
})
// FIM: CALCULADORA EXERCÍCIO 1

// INÍCIO: VETOR EXERCÍCIO 2
const numbers = [];

let resultVector = document.getElementById('resultVector')

document.getElementById('vectorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberVector = parseFloat(document.getElementById('vectorNumber').value)

    if (!isNaN(numberVector)) {
        numbers.push(numberVector);
        vectorNumber.value = "";

        resultVector.textContent = numbers.join(" / ")
    } 
})

function toCheckVector () {
    
    const sumNumber = numbers.reduce((acc, num) => acc + num, 0)

    const qtdNumber = numbers.length

    const mediaVector = sumNumber / qtdNumber

    window.alert(`A soma dos Elementos do Array é ${sumNumber}, são ${qtdNumber} elementos diferentes e a média do Array é ${mediaVector.toFixed(2)}`)

    console.log(`A soma dos Elementos do Array é ${sumNumber}, são ${qtdNumber} elementos diferentes e a média do Array é ${mediaVector.toFixed(2)}`)

}
//FIM: VETOR EXERCÍCIO 2

// INÍCIO: NÚMEROS PRIMOS EXERCÍCIO 3
function verificationPrimeNumbers(number) { 
    if (number <=1) return false;
    for (let i =2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function savePrimeNumbers(numbers) {
    return numbers.filter(verificationPrimeNumbers)
}

function primeNumbers () {
    const primeNum = savePrimeNumbers(numbers)
    window.alert(`Esse são os números primos entre os números do Array: ${primeNum}`)
}
// FIM: NÚMEROS PRIMOS EXERCÍCIO 3

// INÍCIO: JOGO PAR OU IMPAR
document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const evenOrOdd = document.getElementById('evenOrOdd').value

    const userNumber = parseInt(document.getElementById('userNumber').value);

    const maxNumberRandom = 10;

    const cpuNumber = Math.floor(Math.random() * (maxNumberRandom + 1)) ;

    document.getElementById('cpuNumber').value = cpuNumber

    const sumUserCPUNumber = userNumber + cpuNumber;

    const resultGame = document.getElementById('resultGame')

    let verificationNumber

    if (evenOrOdd === 'par' && sumUserCPUNumber % 2 === 0) {
        verificationNumber = `Você Ganhou!`;

    } else if (evenOrOdd === 'par' && sumUserCPUNumber % 2 != 0) {
        verificationNumber = `Você Perdeu!`;

    } else if (evenOrOdd === 'impar' && sumUserCPUNumber % 2 != 0) {
        verificationNumber = `Você Ganhou!`;

    } else if (evenOrOdd === 'impar' && sumUserCPUNumber % 2 === 0) {
        verificationNumber = `Você Perdeu!`;
    }
    
    resultGame.textContent = verificationNumber;
})
// FIM: JOGO PAR OU IMPAR

