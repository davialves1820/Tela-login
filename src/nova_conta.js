import { contas, salvar_contas } from './contas.js';
import { tamanho_minimo } from './tamanho_minimo.js';

// Variáveis que pegam os valores contidos em seus determinados campos
const username = document.getElementById("criar-username");
const password = document.getElementById("criar-password")
const password_confirmation = document.getElementById("criar-password-confirmacao");

// Variáveis que servem para tornar visivel ou não os respectivos aviso sobre seu campo
let caixa_usuario = document.getElementById("aviso-usuario");
let aviso_usuario = caixa_usuario.querySelector(".usuario");

let caixa_password = document.getElementById("aviso-senha");
let aviso_senha = caixa_password.querySelector(".senha");

let caixa_confirmar_password = document.getElementById("aviso-senha-confirmacao");
let aviso_confirmar_senha = caixa_confirmar_password.querySelector(".confirmar-senha");

// Função para criar uma nova conta
export function adicionar_nova_conta(event) {
    event.preventDefault();

    // Torna todos os campos não visíveis após um nova chamada
    aviso_usuario.style.display = "none";
    aviso_senha.style.display = "none";
    aviso_confirmar_senha.style.display = "none";

    // Verifica se todos os campos foram preenchidos
    if (username.value === "" || password.value === "" || password_confirmation.value === "") {
        alert("Por favor preencher todos os campos");
        return;
    }

    // Verifica se a senha atingiu o tamanho minimo
    if (!tamanho_minimo(password.value)) {
        // Deixa visivel o aviso
        aviso_senha.style.display = "block";

        return;
    }

    // Compara se o conteúdo dos dois campos de senhas são iguais
    if (password.value != password_confirmation.value) {
        // Deixa visivel o aviso
        aviso_confirmar_senha.style.display = "block";

        return;
    }

    // Verifica se existe alguma conta com o nome digitado
    const loginValido = contas.some(conta => conta.usuario === username.value);

    // Caso não exista cria a conta
    if (!loginValido) {

        // Cria uma nova conta
        let nova_conta = {
            usuario: username.value,
            senha: password.value
        };

        // Atualiza o array de contas
        contas.push(nova_conta);
        salvar_contas();
        
        alert("Conta criada com sucesso!");

        // Redireciona para a pagina de login
        window.location.href = "../index.html";

    } else {
        // Deixa visivel o aviso
        aviso_usuario.style.display = "block";
        return;
    }

}