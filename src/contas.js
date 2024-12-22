
// Contém todas as contas existentes
export const contas = JSON.parse(localStorage.getItem("contas")) || [];

// Função para salvar contas no localStorage
export function salvar_contas() {
    localStorage.setItem("contas", JSON.stringify(contas));
}