/*
 * TITLE:   shortcuts.js
 * AUTHOR:   mfaria-tech
 * DATE:    11.11.2022
 * 
 * DESCRIPTION:
 *      roles and actions to shortcut buttons
 */


// Sintaxe strict mode para todo o script
"use strict";


// Function to display POPUP_FORM
function DisplayPopup() {
    POPUP_FORM.setAttribute("open", "");
}


// Add event on click to button plus
BTN_PLUS.addEventListener("click", DisplayPopup);
