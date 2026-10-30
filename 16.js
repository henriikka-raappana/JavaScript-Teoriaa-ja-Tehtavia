
let toinenKuva = false;
const kuva = document.getElementById('kuva');

document.getElementById('vaihda').addEventListener('click', function() {
    if (toinenKuva) {
        kuva.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZuhxbOf1yiu0XlSfTrDF1mHyZBj8do83TlJh3ZUGVyQ&s=10";
        toinenKuva = false;
    }
    else {
        kuva.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTnzQgvRLm9WnJwnDFgu6kIM7DqpPtAhyYdnD4yzIKQ&s";
        toinenKuva = true;
    }
});
