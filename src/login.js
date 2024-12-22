import { entrar } from "./entrar.js";

const botaoLogin = document.getElementById("login");

// Adiciona um evento ao botao de login
botaoLogin.addEventListener("click", entrar);