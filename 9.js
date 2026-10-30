let koko = 200;
document.getElementById('suurenna').addEventListener('click', function() {
    koko = koko + 20;
    document.getElementById('kuva').style.width = koko + 'px';
});