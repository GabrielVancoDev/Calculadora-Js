let displayValor = "0";
let operadorAnterior = null;
let aguardandoNovoNumero = false;

function atualizarDisplay() {
  document.getElementById("display").textContent = displayValor;
}

function limpar() {
  displayValor = "0";
  operadorAnterior = null;
  aguardandoNovoNumero = false;
  atualizarDisplay();
}

function apagar() {
  if (displayValor.length > 1) {
    displayValor = displayValor.slice(0, -1);
  } else {
    displayValor = "0";
  }
  atualizarDisplay();
}

function adicionarCaractere(caractere) {
  // Se está aguardando novo númrero, substitui o display
  if (aguardandoNovoNumero) {
    if (caractere === ".") {
      displayValor = "0.";
    } else if (["+", "*", "/", "%"].includes(caractere)) {
      displayValor += caractere;
    } else {
      displayValor = false;
    }
    aguardandoNovoNumero = false;
  } else {
    // Se o display é '0' e não é um ponto, substitui
    if (displayValor === "0" && caractere !== ".") {
      displayValor = caractere;
    } else {
      // Não permite múltiplos pontos decimais no mesmo número
      const ultimoNumero = displayValor.split(/[\+\*\%\/]/).pop();
      if (caractere === "." && ultimoNumero.includes(".")) {
        return;
      }
      displayValor += caractere;
    }
  }
  atualizarDisplay();
}

function calcular() {
  try {
    // substitui x por * para avaliação
    let expressao = displayValor.replace(/x/g, "*");

    // Calcula o resultado
    let resultado = eval(expressao);

    // Arredonda para evitar problemas com números flutuantes
    resultado = Math.round(resultado * 1000000) / 1000000;

    displayValor = resultado.toString();
    aguardandoNovoNumero = true;
    atualizarDisplay();
  } catch (erro) {
    displayValor = "Erro";
    atualizarDisplay();
    setTimeout(() => {
      limpar();
    }, 1500);
  }
}
