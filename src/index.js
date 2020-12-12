const endPoint = "http://localhost:3000/api/v1/quotes";

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();

    const quoteForm = document.querySelector('#quoteForm')

    quoteForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getQuotes() {
    fetch(endPoint)
    .then(res => res.json())
    .then(quote => {
        quote.data.forEach(quote => {
            const quoteMarkup = `
                <div data-id=${quote.id}>
                    <tr>
                        <th scope="row"></th>
                        <td>${quote.attributes.company} </td>
                        <td>${quote.attributes.website} </td>
                        <td>${quote.attributes.quote_amount} </td>
                    </tr>
                </div>`;

            document.querySelector('#quote_container').innerHTML += quoteMarkup
        })
    })
}



function createFormHandler(e) {
    e.preventDefault()
    // define const vars that identify form inputs and links them to document query selectors....will be referenced in last line of this function as postQuote with params using the same const vars.

    const companyInput = document.querySelector('#input-company').value
    const urlInput = document.querySelector('#input-url').value
    const quoteAmountInput = document.querySelector('#input-quote-amount').value
    const projectInput = document.querySelector('#projects').value
    const projectId = parseInt(projectInput)
    postQuote(companyInput, urlInput, quoteAmountInput, projectInput) 
}


function postQuote(company, website, quote_amount, project_id) {
    // console.log(company, website, quote_amount, project_id);
    let bodyData = {company, website, quote_amount, project_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(quote => {
        // console.log(quote);
        
        const quoteMarkup = `
                <div data-id=${quote.id}>
                    <tr>
                        <th scope="row"></th>
                        <td>${quote.attributes.company} </td>
                        <td>${quote.attributes.website} </td>
                        <td>${quote.attributes.quote_amount} </td>
                    </tr>
                </div>`; 
                document.querySelector('#quote-container').innerHTML += quoteMarkup;
    })
}
