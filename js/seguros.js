// Obtém todas as perguntas (dt) e respostas (dd) dentro do elemento <article>
var perguntas = document.getElementsByTagName("dt");
var respostas = document.getElementsByTagName("dd");

// Adiciona eventos de passar o mouse em cada pergunta
for (var i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener("mouseover", exibirResposta);
  perguntas[i].addEventListener("mouseout", ocultarResposta);
}

// Função para exibir a resposta ao passar o mouse sobre a pergunta
function exibirResposta() {
  var resposta = this.nextElementSibling; // Obtém o próximo elemento (dd)
  resposta.style.display = "block"; // Exibe a resposta
}

// Função para ocultar a resposta ao retirar o mouse da pergunta
function ocultarResposta() {
  var resposta = this.nextElementSibling; // Obtém o próximo elemento (dd)
  resposta.style.display = "none"; // Oculta a resposta
}
