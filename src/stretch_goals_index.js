document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
    getQuotes();
    getProject();
});


function getQuotes() {
    fetch("http://localhost:3000/api/v1/quotes")
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
    let endPoint = "http://localhost:3000/api/v1/quotes";
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
    })
}


// PROJECT GET FETCH
function getProject() {
    fetch("http://localhost:3000/api/v1/projects")
    .then(res => res.json())
    .then(project => {
        //  project.data.forEach(project => {
            
        



            // project.data[1].attributes.quotes[1].company
            // returns 'Bob, Inc'

            // for(let i = 0, l = projects.data.attributes.quotes.length; i < l; i++) 
            // project.data[i].attributes.quotes

             const lawnInfo = `    
            <li>${project.data[0].attributes.quotes[i].name}</li>`;
                
            //  const kitchenInfo = `
            //  <p>${project.data[1].relationships.quotes.data}</p>`;

            //  const contractInfo = `
            //  <p>${project.data[2].relationships.quotes}</p>`;

            //  const hvacInfo = `
            //  <p>${project.data[3].relationships.quotes}</p>`;

            

            document.querySelector('.lawnAccordionContent').innerHTML += lawnInfo;

            // document.querySelector('.kitchenAccordionContent').innerHTML += kitchenInfo;

            // document.querySelector('.contractAccordionContent').innerHTML += contractInfo;

            // document.querySelector('.hvacAccordionContent').innerHTML += hvacInfo;
        })
    }


// <h5><li>Budget: $ ${project.attributes.budget}</li></h5>

// ACCORDIAN

var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
    // function toggleIcon(e) {
    //     $(e.target)
    //         .prev('.panel-heading')
    //         .find(".more-less")
    //         .toggleClass('glyphicon-plus glyphicon-minus');
    // }