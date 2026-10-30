const tervehdys = document.getElementById('tervehdys');
const nimiKentta = document.getElementById('nimi');
const viesti = document.getElementById('viesti');
const tallennettuNimi = localStorage.getItem('nimi');

if (tallennettuNimi) {
    tervehdys.textContent = 'Tervetuloa ' + tallennettuNimi + '!';
}

document.getElementById('tallenna').addEventListener('click', function() {
    const nimi = nimiKentta.value;
    localStorage.setItem('nimi', nimi);
    viesti.textContent = 'Nimi tallennettu!';
    tervehdys.textContent = 'Tervetuloa ' + nimi + '!';
});