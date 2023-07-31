"use strict";

function validaFormulario(event) {
    var form = document.querySelector(".needs-validation");
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add("was-validated");
        return false
    }
    return true
}

function getWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function getHeigth() {
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}



