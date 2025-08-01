function extrairPalavras() {
  const texto = document.getElementById("inputText").value;

  const palavras = texto
    .toLowerCase()
    .replace(/[.,!?;:"()\[\]{}<>…]/g, '')
    .split(/\s+/)
    .filter(p => p.trim() !== '');

  const frequencia = {};

  palavras.forEach(palavra => {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = '';

  const entradasOrdenadas = Object.entries(frequencia).sort((a, b) => b[1] - a[1]);

  entradasOrdenadas.forEach(([palavra, contagem]) => {
    const li = document.createElement('li');
    li.textContent = `${palavra} (${contagem}x)`;
    resultado.appendChild(li);
  });

  document.getElementById("contador").textContent = `Total de palavras únicas: ${entradasOrdenadas.length}`;
}
