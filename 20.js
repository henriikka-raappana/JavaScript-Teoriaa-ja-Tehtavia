const vastaus = 'a';
let pisteet = 0;

document.querySelectorAll('button').forEach(function(nappi) {
    nappi.addEventListener('click', function() {
        if (this.value === vastaus) {
            pisteet++;
            document.getElementById('pisteet').textContent =
                'Pisteet: ' + pisteet;
        }
        else {
            alert('IHAN VÄÄRIN PRKL! gg vammanen.');
        }
    });
});