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
// console.log(newQuote);
    })
}


// // PROJECT MODAL

// // Get the modal
// const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const btn = document.getElementById("myButton");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.addEventListener('click', () => {
//     modal.style.display = "block";
// })

// // When the user clicks on <span> (x), close the modal
// span.addEventListener('click', function () {
//     modal.style.display = "none";
// })

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", function(e) {
//     if (e.target == modal) {
//         modal.style.display = "none";
//     }
// })


// PROJECT GET FETCH
function getProject() {
    fetch("http://localhost:3000/api/v1/projects")
    .then(res => res.json())
    .then(project => {
        project.data.forEach(project => {
            // debugger
            const projectInfo = `
                <div data-id=${project.id}>
                <h3>${project.attributes.name}</h3>
                <h4><li>Budget: $ ${project.attributes.budget}</li></h4>
                </div>`;

// <h4>HVAC</h4>
//           <h6>Budget: $ 8000</h6>
//           <ul>
//             <li>Company 1 - Quote: $5000</li>
//             <li>Company 2 - Quote: $6500</li>
//             <li>Company 3 - Quote: $4000</li>
//           </ul>

            document.querySelector('.accordionItemContent').innerHTML += projectInfo
        })
    })
}



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