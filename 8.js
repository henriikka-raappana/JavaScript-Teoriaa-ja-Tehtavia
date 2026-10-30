document.getElementById('lisaa')
.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = document.getElementById('tehtava').value;
    document.getElementById('lista').appendChild(li);
});