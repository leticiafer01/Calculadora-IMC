function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (!peso || !altura) {
        resultado.textContent = "⚠️ Preencha todos os campos!";
        resultado.style.color = "#fff";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";
    let emoji = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        cor = "#3498db"; 
        emoji = "❄️";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        cor = "#2ecc71"; 
        emoji = "✅";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        cor = "#e67e22"; 
        emoji = "⚠️";
    } else {
        classificacao = "Obesidade";
        cor = "#e74c3c"; 
        emoji = "🔥";
    }

    resultado.textContent = `${emoji} Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    resultado.style.color = cor;
    resultado.style.transform = "scale(1.2)";

    setTimeout(() => {
        resultado.style.transform = "scale(1)";
    }, 300);
}
