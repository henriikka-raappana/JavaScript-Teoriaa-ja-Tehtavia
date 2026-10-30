document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    document.getElementById('tulos').textContent =
    'x: ' + x + '  y: ' + y;
});