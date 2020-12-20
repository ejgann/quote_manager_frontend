const activeQuotes = document.querySelector('.activeQuotes')
const endPoint = "http://localhost:3000/api/v1/quotes";
const quoteForm = document.querySelector('#quoteForm')
let addQuote = false
const quoteContainer = document.getElementById('quote_container')
const quoteTable = document.querySelector('.quote-main-container')
// NEED TO REFACTOR AND GET RID OF ALL GLOBAL VARS


document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();
});


quoteForm.addEventListener('submit', (e) => createFormHandler(e))

function getQuotes() {
    fetch(endPoint)
    .then(res => res.json())
    .then(quote => {
        quote.data.forEach(quote => {
    // debugger
            const newQuote = new Quote(quote.id, quote.attributes)
            // creating new instance of Quote class
            

            // const quoteMarkup = `
            //     <div data-id=${quote.id}>
            //         <tr class="hoverRow">
            //             <th scope="row"></th>
            //             <td>${quote.attributes.company} </td>
            //             <td>${quote.attributes.website} </td>
            //             <td>${quote.attributes.quote_amount} </td>
            //             <td>${quote.attributes.project.name}</td>
            //             <td><button type="button" class="btn btn-light" id="deleteBtn" >Delete</button> </td>
            //         </tr>
            //     </div>`;

            document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();
// debugger
            // let button = document.querySelector('#deleteBtn')
            // button.addEventListener('click', removeQuote)

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
    //  console.log(company, website, quote_amount, project_id);
    let bodyData = {company, website, quote_amount, project_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(quote => {
        console.log(quote);
        const quoteData = quote.data.attributes

        const quoteMarkup = `
                <div data-id=${quote.data.id}>
                    <tr>
                        <th scope="row"></th>
                             <td>${quoteData.company} </td>
                             <td>${quoteData.website} </td>
                             <td>${quoteData.quote_amount} </td>
                             <td>${quoteData.project.name}</td>
                             <td><button type="button" class="btn btn-light" id="deleteBtn" >Delete</button> </td>
                    </tr>
                </div>`;

            document.querySelector('#quote_container').innerHTML += quoteMarkup;

            document.querySelector('#quoteForm').reset();

    })
}