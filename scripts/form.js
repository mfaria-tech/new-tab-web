/*
 * TITLE:   form.js
 * AUTHOR:   mfaria-tech
 * DATE:    11.11.2022
 * 
 * DESCRIPTION:
 *      roles and actions to Form
 */


let inputs = [];


// Clear inputs form
function ClearForm() {
    for(let i in INPUTS) {
        if(parseInt(i) >= 0) {
            INPUTS[i].value = "";
        }
    }  
}


function ObserveInputs() {
    if(POPUP_FORM.hasAttribute("open")) {
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


// Function to create new shortcut button
function CreateShortcut() {

}


// Function to update shortcuts and close Popup
function UpdateShortcuts() {

}


// Close Form
function ClosePopup() {
    ClearForm();

    POPUP_FORM.removeAttribute("open");
}


// Add observer event
// Check if inputs have value
if(POPUP_FORM && INPUTS) {
    for(let i in INPUTS) {
        if(parseInt(i) >= 0) {
            INPUTS[i].addEventListener("keyup", ObserveInputs);

            // populate inputs variable with valid INPUTS elements
            inputs.push(INPUTS[i]);
        }
    }   
}


if(POPUP_FORM && BTN_CANCEL)
    BTN_CANCEL.addEventListener("click", ClosePopup);

