document.getElementById('painike').addEventListener('click', function() {
    const teksti = document.getElementById('teksti');
        if (teksti.style.display === 'none') {
            teksti.style.display = 'block';
        }
        else {
            teksti.style.display = 'none'
        }
});