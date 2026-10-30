function naytaAika() {
    const nyt = new Date();
    const tunnit = String(nyt.getHours()).padStart(2, '0');
    const minuutit = String(nyt.getMinutes()).padStart(2, '0');
    const sekunnit = String(nyt.getSeconds()).padStart(2, '0');

    document.getElementById('kello').textContent =
        tunnit + ':' + minuutit + ':' + sekunnit;
}
setInterval(naytaAika, 1000);