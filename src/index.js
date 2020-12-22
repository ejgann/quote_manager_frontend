const endPoint = "http://localhost:3000/api/v1/quotes";
// const quoteForm = document.querySelector('#quoteForm')
// tried to replace this global by attaching it directly to eventListener below
const quoteContainer = document.getElementById('quote_container')
const quoteTable = document.querySelector('.quote-main-container')
// NEED TO REFACTOR AND GET RID OF ALL GLOBAL VARS


document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();
});


document.querySelector('#quoteForm').addEventListener('submit', (e) => createFormHandler(e))

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

function removeQuote() {
    e.preventDefault()
    let quoteId = e.target.quote.id

    fetch(endPoint+`/quotes/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(e.target.parentElement.remove())
}


function createFormHandler(e) {
    e.preventDefault()

    // define const vars that identify form inputs and links them to document query selectors....will be referenced in last line of this function as postQuote with params using the same const vars. Keys must be identical to those in db/schema.

    const companyInput = document.querySelector('#input-company').value
    const urlInput = document.querySelector('#input-url').value
    const quoteAmountInput = document.querySelector('#input-quote-amount').value
    const projectInput = document.querySelector('#projects').value
    const projectId = parseInt(projectInput)
    postQuote(companyInput, urlInput, quoteAmountInput, projectInput) 
}


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

            document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();

            document.querySelector('#quoteForm').reset();
// console.log(newQuote);
    })
}

// function iconHover() {
//     const row = document.querySelector('.hoverRow')

// }
