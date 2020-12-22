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
        const quoteData = `
            <div data-id=${this.id}>
                <tr class="hoverRow">
                    <th scope="row"></th>
                    <td>${this.company} </td>
                    <td>${this.website} </td>
                    <td>${this.quote_amount} </td>
                    <td>${this.projectName}</td>
                    <td><button onclick="deleteRow()" id="deleteBtn" value = "Delete"</button></td>
                </tr>
            </div>`;
            return quoteData;
    
    }

}



Quote.all = [];



function deleteRow() {
    var row = document.querySelector('tr');
    row.remove();
}
