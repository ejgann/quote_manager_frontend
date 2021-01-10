class Quote {

    // constructor maps the values from the database to quote instances
    constructor(id, quoteAttributes) {

        this.id = id;
        this.company = quoteAttributes.company;
        this.website = quoteAttributes.website;
        this.quote_amount = quoteAttributes.quote_amount;
        this.projectId = quoteAttributes.project_id;
        this.projectName = quoteAttributes.project.name;

        Quote.all.push(this);
    }

    renderQuoteRow() {
        const quoteData = `
            <div data-id=${this.id}>
                <tr class="hoverRow">
                    <th scope="row"></th>
                    <td>${this.company} </td>
                    <td>${this.website} </td>
                    <td>${this.quote_amount} </td>
                    <td>${this.projectName}</td>
                </tr>
            </div>`;

            return quoteData;

    }

    getQuotes() {
        fetch("http://localhost:3000/api/v1/quotes")
        .then(res => res.json())
        .then(quote => {
            quote.data.forEach(quote => {
                const newQuote = new Quote(this.id, quote.attributes);

                document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();
            })

            const sorted = quote.data.sort(function(a, b){
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
console.log(sorted);
            debugger
        })
    }

}


Quote.all = [];
    
  


    
  
// LIVE CODING - SORT QUOTE AMOUNTS COLUMN
   
    // sortAmounts() {
    //     fetch("http://localhost:3000/api/v1/quotes")
    //     .then(response => response.json())
    //     .then(quote => {
    //         quote.data.sort(function(a, b) {
        //         const quoteA = a.attributes.quote_amount;
        //         const quoteB = b.attributes.quote_amount;
                
        //         if (quoteA < quoteB) {
        //             return -1;
        //         }
        //         if (quoteA > quoteB) {
        //             return 1;
        //         }
        //         return 0;
        //     })
        //         quote.data.forEach(quote => {
        //             const sortedQuote = quote.attributes.quote_amount;

        //             console.log(sortedQuote);
        //         })
        //     })
        // }