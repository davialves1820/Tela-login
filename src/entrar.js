import { contas } from './contas.js';

const username = document.getElementById("username");
const password = document.getElementById("password");

// Função que verifica se usuario e senha são válidos
export function entrar(event) {
    event.preventDefault();

    // Verifica se foi escrito login e senha
    if (username.value === "" || password.value === "") {
        alert("Preencha todos os campos");
        return;
    }

    // Verifica se existe alguma conta com login e senha escritos pelo usuário
    const login_valido = contas.some(conta => conta.usuario === username.value && conta.senha === password.value);

    if (login_valido) {
        alert("Seja bem vindo");
    } else {
        alert("Usuário ou senha inválidos");
    }

    // Inicia os valores dos input vazio
    username.value = "";
    password.value = "";
}