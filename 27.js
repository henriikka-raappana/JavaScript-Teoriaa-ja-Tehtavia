fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    const user = data.results[0];

    document.getElementById('nimi').textContent =
        `${user.name.first} ${user.name.last}`;

    document.getElementById('email').textContent =
        user.email;

    document.getElementById('kuva').src =
        user.picture.large;
})
.catch(error => console.error('Virhe', error));