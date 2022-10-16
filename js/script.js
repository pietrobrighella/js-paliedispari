// verifica parola palindroma
const parolaUtente = document.getElementById('parolaUtente');
const btnVerificaParola = document.getElementById('btnVerificaParola');

function palindroma(parola){
    let x = String(parola);
    let y = x.split('').reverse().join('');
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

btnVerificaParola.addEventListener('click',function(){
    let parolaInserita = parolaUtente.value;
    const alert = document.getElementById('alert');
    if(palindroma(parolaInserita)){
        alert.classList.remove('alert-primary', 'alert-warning');
        alert.classList.add('alert-success');
        alert.innerText = 'Complimenti, questa parola è palindroma';
    } else {
        alert.classList.remove('alert-primary', 'alert-success');
        alert.classList.add('alert-warning');
        alert.innerText = 'Spiacente, questa parola non è palindroma';
    }
});

// pari e dispari
const pariRadio = document.getElementById('pariRadio');
const dispariRadio = document.getElementById('dispariRadio');
const numeroUtente = document.getElementById('numeroUtente');
const btnVerificaNumero = document.getElementById('btnVerificaNumero');

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroRandom = randomNumber(1, 5);

function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

btnVerificaNumero.addEventListener('click', function(){
    let sommaNumeri = parseInt(numeroUtente.value) + parseInt(numeroRandom);
    const alert2 = document.getElementById('alert2');
    if(isEven(sommaNumeri) && pariRadio.checked){
        alert2.classList.remove('alert-primary', 'alert-warning');
        alert2.classList.add('alert-success');
        alert2.innerText = `Tu hai giocato il numero ${numeroUtente.value} e hai scelto ${pariRadio.value} il computer ha giocato il numero ${numeroRandom}, la somma è ${sommaNumeri} (pari) e quindi HAI VINTO!`;
    } else if(!isEven(sommaNumeri) && dispariRadio.checked){
        alert2.classList.remove('alert-primary', 'alert-warning');
        alert2.classList.add('alert-success');
        alert2.innerText = `Tu hai giocato il numero ${numeroUtente.value} e hai scelto ${dispariRadio.value} il computer ha giocato il numero ${numeroRandom}, la somma è ${sommaNumeri} (dispari) e quindi HAI VINTO!`;
    } else if((isEven(sommaNumeri) && dispariRadio.checked)){
        alert2.classList.remove('alert-primary', 'alert-success');
        alert2.classList.add('alert-warning');
        alert2.innerText = `Tu hai giocato ${numeroUtente.value} e hai scelto ${dispariRadio.value} il computer ha giocato ${numeroRandom}, la somma è ${sommaNumeri} (pari) e quindi HAI PERSO!`;
    } else {
        alert2.classList.remove('alert-primary', 'alert-warning');
        alert2.classList.add('alert-success');
        alert2.innerText = `Tu hai giocato ${numeroUtente.value} e hai scelto ${pariRadio.value} il computer ha giocato ${numeroRandom}, la somma è ${sommaNumeri} (dispari) e quindi HAI PERSO!`;
    }
})