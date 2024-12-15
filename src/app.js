
const botaoLogin = document.getElementById("login");

// Adiciona um evento ao botao de login
botaoLogin.addEventListener("click", entrar);

// Função que verifica se usuario e senha são válidos
function entrar(event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    // Verifica se foi escrito login e senha
    if (username.value === "" || password.value === "") {
        alert("Digite seu usuario ou senha");
        return;
    }

    // Verifica se existe alguma conta com login e senha escritos pelo usuário
    const loginValido = contas.some(conta => conta.usuario === username.value && conta.senha === password.value);

    if (loginValido) {
        alert("Seja bem vindo");
    } else {
        alert("Usuário ou senha inválidos");
    }

    // Inicia os valores dos input vazio
    username.value = "";
    password.value = "";

}