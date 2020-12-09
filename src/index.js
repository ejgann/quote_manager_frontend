const endPoint = "http://localhost:3000/api/v1/quotes";

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();
});

function getQuotes() {
    fetch(endPoint)
    .then(res => res.json())
    .then(quote => {
        quote.data.forEach(quote => {
            const quoteMarkup = `
                <tr data-id=${quote.id}>
                    <th scope="row"></th>
                    <td>${quote.attributes.company} </td>
                    <td>${quote.attributes.website} </td>
                    <td>${quote.attributes.in_budget} </td>
                    <td>${quote.attributes.quote_amount} </td>
                  </tr>`;

            document.querySelector('#quote_container').innerHTML += quoteMarkup
        })
    })
}
