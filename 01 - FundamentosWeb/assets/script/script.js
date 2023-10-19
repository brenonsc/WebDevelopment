let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let mapa = document.querySelector("#mapa");

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

nome.style.width = "100%";
email.style.width = "100%";


function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
        nomeOk = false;
    }
    else {
        nomeOk = true;
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
    else {
        emailOk = true;
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green";
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem");
    if (mensagem.value.length > 100) {
        mensagemOk = false;
        txtMensagem.innerHTML = "Mensagem inválida, ultrapassou o limite de 100 caracteres";
        txtMensagem.style.color = "red";
        txtMensagem.style.display = "block";
    }
    else {
        mensagemOk = true;
        txtMensagem.style.display = "none";
    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!");
    }
    else {
        alert("Preencha o formulário corretamente antes de enviar!");
    }
}

function mapaZoom() {
    mapa.style.width = "900px";
    mapa.style.height = "700px";
}

function mapaNormal() {
    mapa.style.width = "640px";
    mapa.style.height = "480px";
}