document.addEventListener('DOMContentLoaded', () => {
    
    Quote.getQuotes();
    getProject();
});


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
        project.data.forEach(project => {
            // debugger
            
            // for(let i = 0, l = projects.length; i < l; i++) 
               
            //  var lawnInfo = `    
            //     <h3>${project.data[0].attributes.quotes}</h3>`;
                // 
                // Since each element is an object (in our example),
                // we can now access the objects properties with `obj.id` and `obj.name`. 
                // We could also use `data.items[i].id`.
            

            const projectInfo = `
                <div data-id=${project.id}>
                <h4>${project.attributes.name}</h4>
                <h5>Budget: $${project.attributes.budget}</h5>
                <hr>
                </div>`;

            document.querySelector('.accordionItemContent').innerHTML += projectInfo
        })
    })
}


// ACCORDIAN

    let accItem = document.getElementsByClassName('accordionItem');
    let accHD = document.getElementsByClassName('accordionItemHeading');
    
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }

    function toggleItem() {
        let itemClass = this.parentNode.className;
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