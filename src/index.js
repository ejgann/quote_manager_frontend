const endPoint = "http://localhost:3000/api/v1/quotes";

document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();

    let quoteForm = document.querySelector('#quoteForm')

    quoteForm.addEventListener('submit', (e) => createFormHandler(e))
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

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i=0, len = radios.length ; i<len; i++) {
        if (radios[i].checked ) {  
            // radio checked?
            val = radios[i].value;
            // if so, hold its value in val
            break;
            // and break out of the for loop
        }
    }
    return val;
    // return value of checked radio or undefined in none are checked
}

// get value of selected 'budget' radio button in 'budgetRadio'
var val = getRadioVal( document.getElementById)('quoteForm', 'budget' );
console.log(val);

function createFormHander(e) {
    e.preventDefault()
    // define const vars that identify form inputs and links them to document query selectors....will be referenced in last line of this function as postQuote with params using the same const vars.

    const companyInput = document.querySelector('#input-company') 
    "input-company".value
    const urlInput = document.querySelector('#input-url').value

    // const inBudget = document.querySelector('#budgetRadio').value

    const quoteAmountInput = document.querySelector('#input-quote-amount').value
    const projectInput = document.querySelector('#projects').value
    const projectId = parseInt(projectInput)
    
    postQuote(companyInput, urlInput, inBudget, quoteAmountInput, projectInput) 
}

function postQuote(company, website, in_budget, quote_amount, project_id) {
    console.log(company, website, in_budget, quote_amount, project_id);
}
