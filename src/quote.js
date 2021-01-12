class Quote {

    // constructor maps the values from the database to quote instances
    constructor(id, quoteAttributes) {
      
        this.id = id;
        this.company = quoteAttributes.company;
        this.website = quoteAttributes.website;
        this.quoteAmount = quoteAttributes.quote_amount;
        this.projectId = quoteAttributes.project_id;
        this.projectName = quoteAttributes.project.name;

        Quote.all.push();
    }

    renderQuoteRow() {
        const quoteData = `
            <div data-id=${this.id}>
                <tr class="hoverRow">
                    <th scope="row"></th>
                    <td>${this.company} </td>
                    <td>${this.website} </td>
                    <td>${this.quoteAmount} </td>
                    <td>${this.projectName}</td>
                </tr>
            </div>`;

            return quoteData;

    }

    static getQuotes() {
        fetch("http://localhost:3000/api/v1/quotes")
        .then(res => res.json())
        .then(quote => {
            
            // const sorted = 
            quote.data.sort(function(a, b) {
                const quoteA = a.attributes.quote_amount;
                const quoteB = b.attributes.quote_amount;
                
                if (quoteA < quoteB) {
                    return -1;
                }
                if (quoteA > quoteB) {
                    return 1;
                }
                return 0;
            })
            
            // console.log(sorted);
    // debugger
            quote.data.forEach(quote => {
                const newQuote = new Quote(this.id, quote.attributes);
                
                document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();

            })
        
        })
    }
    

}


Quote.all = [];
    