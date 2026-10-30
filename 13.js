let laskuri = 0;

document.getElementById('painike')
.addEventListener('click', function() {
    laskuri++;
    document.getElementById('tulos').textContent =
    'Painettu: ' + laskuri;
})