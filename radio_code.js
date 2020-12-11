function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i=0, len = radios.length ; i<len; i++) {
        if (radios[i].checked ) {  
            // radio checked?
            val = radios[i].value;
            // if so, hold its value in val
            break;
            // and break out of the for loop
        }
    }
    return val;
    // return value of checked radio or undefined in none are checked
}

// get value of selected 'budget' radio button in 'budgetRadio'
var val = getRadioVal( document.getElementById)('quoteForm', 'budget' );
console.log(val);