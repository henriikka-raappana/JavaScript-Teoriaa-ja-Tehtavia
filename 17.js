
function satunnainenVari() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

document.getElementById('vari').addEventListener('click', function() {
    document.body.style.backgroundColor = satunnainenVari();
});