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



