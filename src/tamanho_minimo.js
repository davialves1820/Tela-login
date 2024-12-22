// Função que indica o tamanho minimo da senha
export function tamanho_minimo(texto) {

    if (texto.length < 8) {
        return false;
    } 
    return true;
}