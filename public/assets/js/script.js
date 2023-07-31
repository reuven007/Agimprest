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

var user = window.localStorage.getItem('user.email')
var senha = window.localStorage.getItem('user.senha')
if(user !== 'administrador' || senha !== '123456'){
    window.location.href = 'login.html'
}else if(window.location.href.includes('login.html')) {
    window.location.href = 'index.html'
}

