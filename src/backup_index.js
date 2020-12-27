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
            const newQuote = new Quote(quote.id, quote.attributes)

            document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();
        })
    })
}



function createFormHandler(e) {
    e.preventDefault()

    const companyInput = document.querySelector('#input-company').value
    const urlInput = document.querySelector('#input-url').value
    const quoteAmountInput = document.querySelector('#input-quote-amount').value
    const projectInput = document.querySelector('#projects').value
    const projectId = parseInt(projectInput)
    postQuote(companyInput, urlInput, quoteAmountInput, projectInput) 
}

document.querySelector('#quoteForm').addEventListener('submit', (e) => createFormHandler(e))


function postQuote(company, website, quote_amount, project_id) {
    let bodyData = {company, website, quote_amount, project_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(quote => {
        const newQuote = new Quote(quote.data.id, quote.data.attributes)

            document.querySelector('#quote-squares-container').innerHTML += newQuote.renderQuoteRow();

            document.querySelector('#quoteForm').reset();
// console.log(newQuote);
    })
}
