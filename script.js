function extrairPalavras() {
  const texto = document.getElementById("inputText").value;

  // Remove pontuação, quebra em palavras, transforma em minúsculas
  const palavras = texto
    .toLowerCase()
    .replace(/[.,!?;:"()\[\]{}<>…]/g, '')
    .split(/\s+/)
    .filter(p => p.trim() !== '');

  const frequencia = {};

  palavras.forEach(palavra => {
    if (frequencia[palavra]) {
      frequencia[palavra]++;
    } else {
      frequencia[palavra] = 1;
    }
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = '';

  Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .forEach(([palavra, contagem]) => {
      const item = document.createElement('li');
      item.textContent = `${palavra} (${contagem}x)`;
      resultado.appendChild(item);
    });
}
