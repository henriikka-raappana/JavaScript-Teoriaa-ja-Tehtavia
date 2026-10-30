let tykkaykset = 0;

document.getElementById('tykkaa')
.addEventListener('click', function() {
    tykkaykset++;
    document.getElementById('maara').textContent =
    tykkaykset;
});