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

    static getQuotes() {
        fetch("http://localhost:3000/api/v1/quotes")
        .then(res => res.json())
        .then(quote => {
            quote.data.forEach(quote => {
                const newQuote = new Quote(this.id, quote.attributes)
    
                document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();
            })
        })
    }
    
    // static postQuote(company, website, quote_amount, project_id) {
    //     let bodyData = {company, website, quote_amount, project_id}
    //     fetch("http://localhost:3000/api/v1/quotes", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(bodyData)
    //     })
    //     .then(response => response.json())
    //     .then(quote => {
    //         const newQuote = new Quote(this.id, quote.attributes)
    
    //             document.querySelector('#quote_container').innerHTML += newQuote.renderQuoteRow();
    
    //             document.querySelector('#quoteForm').reset();
    //     })
    // }

}

Quote.all = [];

