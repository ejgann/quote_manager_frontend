console.log("in quote.js");

class Quote {
    // constructor maps the values from the database to quote instances
    constructor(quote, quoteAttributes) {

        this.id = quote.id;
        this.company = quoteAttributes.company;
        this.website = quoteAttributes.website;
        this.quote_amount = quoteAttributes.quote_amount;
        this.projectId = quoteAttributes.project_id;
        Quote.all.push(this);
        // debugger
    }

    
}
  

Quote.all = [];