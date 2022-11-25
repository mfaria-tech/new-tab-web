/*
 * TITLE:   typing.js
 * AUTOR:   mfaria-tech
 * DATE:    25.11.2022
 * 
 * DESCRIPTION:
 *      Events to dialog of donut area
 */

// Sintaxe strict mode para todo o script
"use strict";


// Function to display POPUP_FORM
let displaydonut = function () {
    POPUP_DONUT.setAttribute("open", "");
}

// Function to close POPUP_FORM
let closedonut = function () {
    POPUP_DONUT.removeAttribute("open");
}
