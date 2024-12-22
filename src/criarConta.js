import { adicionar_nova_conta } from "./nova_conta.js";

const botao_criar = document.getElementById("criar-conta");

// Adiciona um evento ao botão de criar conta
botao_criar.addEventListener("click", adicionar_nova_conta);