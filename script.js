/**
 * Redireciona a janela do navegador para o caminho especificado.
 * @param {string} caminhoDaPagina - O caminho relativo para o arquivo HTML de destino.
 */
function redirecionarPara(caminhoDaPagina) {
  console.log('Redirecionando para:', caminhoDaPagina); // Opcional: para ver no console que a função foi chamada
  window.location.href = caminhoDaPagina;
}