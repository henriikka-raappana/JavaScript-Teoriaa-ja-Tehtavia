document.getElementById('nayta').addEventListener('click', function() {
    const nimi = document.getElementById('nimi').value;
    document.getElementById('tulos').textContent = 'Hei ' + nimi + '!';
});