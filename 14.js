
const lomake = document.getElementById('lomake');
const nimi = document.getElementById('nimi');
const ika = document.getElementById('ika');
const viesti = document.getElementById('viesti');

lomake.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nimi.value === '' || ika.value === '') {
        viesti.textContent = 'Täytä kaikki kentät!';
    } else {
        viesti.textContent = 'Tiedot kunnossa!';
    }
});
