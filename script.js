let contador = 0;

function adicionarAcao() {
    contador++;
    document.getElementById("numero").textContent = contador;

    if (contador === 10) {
        alert("Parabéns! Você alcançou 10 ações sustentáveis!");
    }
}
