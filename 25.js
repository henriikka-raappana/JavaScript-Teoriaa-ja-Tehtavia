document.getElementById('lisaa').addEventListener('click', function() {
    let laatikko = document.createElement('div');
    laatikko.className = 'laatikko';
    laatikko.textContent = 'Uusi elementti';

    document.getElementById('alue').appendChild(laatikko);
});