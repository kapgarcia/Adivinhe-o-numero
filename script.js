// Gera um número aleatório entre 1 e 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

document.getElementById("guessButton").addEventListener("click", function() {
    const palpite = parseInt(document.getElementById("guessInput").value);
    tentativas++;

    const feedback = document.getElementById("feedback");
    const attempts = document.getElementById("attempts");

    if (palpite === numeroAleatorio) {
        feedback.textContent = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
        feedback.style.color = "green";
    } else if (palpite < numeroAleatorio) {
        feedback.textContent = "Tente um número maior!";
        feedback.style.color = "orange";
    } else if (palpite > numeroAleatorio) {
        feedback.textContent = "Tente um número menor!";
        feedback.style.color = "orange";
    }

    attempts.textContent = `Tentativas: ${tentativas}`;
});

