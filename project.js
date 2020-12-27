class Project {

    constructor(id, projectAttributes) {

        this.id = id;
        this.name = projectAttributes.name;
        this.budget = projectAttributes.budget;
        this.quoteCompany = projectAttributes.quotes.company;
        this.quoteWebsite = projectAttributes.quotes.website;
        this.quoteAmount = projectAttributes.quotes.quote_amount;
        this.quoteId = projectAttributes.quotes.quote.id;

        Project.all.push(this);
    }


}

Project.all = [];