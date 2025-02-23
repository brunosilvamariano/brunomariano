const texto = "Bruno Mariano";
let i = 0;
let apagando = false;

function digitar() {
    let elemento = document.getElementById("typed");
    
    if (!apagando && i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 150); // Velocidade de digitação
    } else if (apagando && i > 0) {
        elemento.textContent = texto.substring(0, i - 1);
        i--;
        setTimeout(digitar, 100); // Velocidade de apagamento
    } else {
        apagando = !apagando; // Alterna entre digitar e apagar
        setTimeout(digitar, 1000); // Pausa antes de recomeçar
    }
}

document.addEventListener("DOMContentLoaded", digitar);
