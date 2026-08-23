// Arquivo de apoio. O foco pedagógico deste exercício é a tabela semântica.
document.querySelectorAll('tbody tr').forEach((linha) => {
  linha.addEventListener('click', () => linha.focus());
});
console.info('Exercício 03 carregado.');
