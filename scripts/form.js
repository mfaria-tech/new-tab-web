/*
 * TITLE:   form.js
 * AUTOR:   mfaria-tech
 * DATE:    11.11.2022
 * 
 * DESCRIPTION:
 *      roles and actions to Form
 */


let inputs = [];

function ObserveInputs() {
    if(POPUP.hasAttribute("open")) {
        let validinputs = true;
        let valueinput = "";

        for(let i in inputs) {
            valueinput = inputs[i].value.trim();

            if(valueinput === "") {
                validinputs = false
            }
        }

        if(validinputs) {
            // Enable button "Adicionar"
            BTN_ADD.removeAttribute("disabled");
        } else {
            if(!BTN_ADD.hasAttribute("disabled"))
                BTN_ADD.setAttribute("disabled", "");
        }
    }
}


// Add observer event
// Check if inputs have value
if(POPUP && INPUTS) {
    for(let i in INPUTS) {
        if(parseInt(i) >= 0) {
            INPUTS[i].addEventListener("keyup", ObserveInputs);

            // populate inputs variable with valid INPUTS elements
            inputs.push(INPUTS[i]);
        }
    }

    
}
