document.getElementById('tallenna').addEventListener
('click', function() {
    const nimi = document.getElementById('nimi').value;
    localStorage.setItem('nimi', nimi);
    document.getElementById('viesti').textContent =
    'Nimi tallennettu!';
});