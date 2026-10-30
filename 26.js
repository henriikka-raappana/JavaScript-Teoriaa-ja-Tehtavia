fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => {
    document.getElementById('otsikko').textContent = data.title;
})
.catch(error => {
    console.error(error);
    document.getElementById('otsikko').textContent = 'Tietoa ei voitu ladata. ';
});