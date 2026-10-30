const lomake =document.getElementById('emailForm');
lomake.addEventListener('submit', function(e) {
e.preventDefault();

const email = document.getElementById('email').value;

if (email.includes('e') && email.includes('.')) {
    document.getElementById('viesti').textContent =
    'Sähköpostiosoite näyttää oikealta!';
    document.getElementById('viesti').style.color = 'green';
}
else {
    document.getElementById('viesti').textContent =
    'Anna sähköposti muodossa nimi@esimerkki.fi';
    document.getElementById('viesti').style.color = 'red';
}
});