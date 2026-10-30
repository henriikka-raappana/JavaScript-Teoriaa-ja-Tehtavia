document.addEventListener('keydown',
    function(event) {
        document.getElementById('tulos').textContent =
        'Painoit: ' + event.key;
    });