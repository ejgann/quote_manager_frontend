console.log("in quote.js");

class Quote {
    // constructor maps the values from the database to quote instances
    constructor(id, quoteAttributes) {
        debugger
        this.id = id;
        this.company = quoteAttributes.company;
        this.website = quoteAttributes.website;
        this.quote_amount = quoteAttributes.quote_amount;
        this.projectId = quoteAttributes.project_id;
        Quote.call.push(this);
    }
}

// company, website, quote_amount, project_id


// class Syllabus {
//     constructor(id, syllabusAttributes) {
//       this.id = id;
//       this.title = syllabusAttributes.title;
//       this.description = syllabusAttributes.description;
//       this.image_url = syllabusAttributes.image_url;
//       this.category = syllabusAttributes.category;
//       Syllabus.all.push(this);
//     }
  