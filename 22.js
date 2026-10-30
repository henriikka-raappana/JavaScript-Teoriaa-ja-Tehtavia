const nappi = document.getElementById('variBtn');
nappi.addEventListener('click', function() {
    if (nappi.style.backgroundColor === 'tomato') {
        nappi.style.backgroundColor = 'royalblue';
    }
    else {
        nappi.style.backgroundColor = 'tomato';
    }
});