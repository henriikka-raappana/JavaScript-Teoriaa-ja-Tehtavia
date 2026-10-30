const etunimet = ['Aino', 'Matti', 'Sara', 'Joni', 'Emma', 'Leo'];
const sukunimet = ['Korhonen', 'Virtanen', 'Nieminen', 'Koskinen'];

document.getElementById('arvo').addEventListener('click', function() {
    const e = etunimet[Math.floor(Math.random() * etunimet.length)];
    const s = sukunimet[Math.floor(Math.random() * sukunimet.length)];
    document.getElementById('tulos').textContent = e + ' ' + s;
});