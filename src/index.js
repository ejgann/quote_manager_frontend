const endPoint = "http://localhost:3000/api/v1/quotes";

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();
});

function getQuotes() {
    fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));
}