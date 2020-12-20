console.log("in quote.js");

class Quote {
    // constructor maps the values from the database to quote instances
    constructor(id, quoteAttributes) {

        this.id = id;
        this.company = quoteAttributes.company;
        this.website = quoteAttributes.website;
        this.quote_amount = quoteAttributes.quote_amount;
        this.projectId = quoteAttributes.project_id;
        this.projectName = quoteAttributes.project.name;
// debugger

        Quote.all.push(this);
        // debugger
    }

    renderQuoteRow() {
        // debugger
        return `
            <div data-id=${this.id}>
                <tr class="hoverRow">
                    <th scope="row"></th>
                    <td>${this.company} </td>
                    <td>${this.website} </td>
                    <td>${this.quote_amount} </td>
                    <td>${this.projectName}</td>
                    <td><button type="button" class="btn btn-light" id="deleteBtn" >Delete</button> </td>
                </tr>
            </div>`;
            // quote.attributes.company

           

            // let button = document.querySelector('#deleteBtn')
            // button.addEventListener('click', removeQuote)
    }
    
}
  

Quote.all = [];