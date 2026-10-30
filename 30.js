async function haeSaa() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=60.17&longitude=24.94&current=temperature_2m'
    );
    const data = await response.json();
    document.getElementById('lampotila').textContent =
        data.current.temperature_2m + ' °C';
}
haeSaa();