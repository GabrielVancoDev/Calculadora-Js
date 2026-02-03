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

// Apaga o ultimo caractere
function apagar() {
  if (displayValor.length > 1) {
    displayValor = displayValor.slice(0, -1);
  } else {
    displayValor = "0";
  }
  atualizarDisplay();
}

function adicionarCaractere(caractere) {
  const ehOperador = ["+", "-", "*", "/", "%"].includes(caractere);
  const ultimoCaractere = displayValor[displayValor.length - 1];
  const ultimoEhOperador = ["+", "-", "*", "/", "%"].includes(ultimoCaractere);

  // Impede operador no inicio (exceto se display for '0' e for operador de subtração)
  if (displayValor === "0" && ehOperador && caractere === "-") {
    return;
  }

  // Permite '-' no inicio para números negativos
  if (displayValor === "0" && caractere === "-") {
    displayValor = "-";
    aguardandoNovoNumero = false;
    atualizarDisplay();
    return;
  }

  // Impede dois operadores consecutivos (exceto '-' após outro operador para números negativos)
  if (ehOperador && ultimoEhOperador) {
    if( caractere === '-' && ultimoCaractere === '-'){
      // Permite '-' após outro operador para números negativos 
      displayValor += caractere;
      atualizarDisplay();
      return;
    } else {
      // Substitui o ultimo operador pelo novo
      displayValor = displayValor.slice(0, -1) + caractere;
      atualizarDisplay();
      return;
    }
  }
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

// Suporte para teclado
document.addEventListener("keydown", function (evento) {
  const tecla = evento.key;

  if ((tecla >= "0" && tecla <= "9") || tecla === ".") {
    adicionarCaractere(tecla);
  } else if (
    tecla === "+" ||
    tecla === "-" ||
    tecla === "*" ||
    tecla === "/" ||
    tecla === "%"
  ) {
    adicionarCaractere(tecla);
  } else if (tecla === "Enter" || tecla === "=") {
    calcular();
  } else if (tecla === "Backspace") {
    apagar();
  } else if (tecla === "Escape" || tecla === "c" || tecla === "C") {
    limpar();
  }
});
