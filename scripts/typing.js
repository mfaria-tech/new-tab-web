/*
 * TITLE:   typing.js
 * AUTHOR:   mfaria-tech
 * DATE:    11.11.2022
 * 
 * DESCRIPTION:
 *      Insert typing animation style in document
 */

let mytyping = document.querySelector(".popup-donut span");


let tag_style = document.createElement('style');

let count_char = mytyping.textContent.length;
let content_style = `
    .popup-donut span {
        border-right: 4px solid;
        width: ${count_char}ch;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 2s steps(${count_char}), blinking 0.5s infinite step-end alternate;
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blinking {
        50% {
            border-color: transparent;
        }
    }`;


tag_style.innerText = content_style;
document.body.appendChild(tag_style);
