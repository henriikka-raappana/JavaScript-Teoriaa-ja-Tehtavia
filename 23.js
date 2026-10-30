const ilmoitus = document.getElementById('ilmoitus');
document.getElementById('naytaBtn').addEventListener(
    'click', function() {
        ilmoitus.classList.add('nayta');
        setTimeout(() => {
            ilmoitus.classList.remove('nayta');
        }, 3000);
    });