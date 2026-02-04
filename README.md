# Calculadora em JavaScript - Lógica Matemática

Este projeto consiste em uma **calculadora desenvolvida em Java Script puro**, com suporte a **cliques no teclado**, focada em **lógica matemática**, controle de estado e validações.

---

## 🚀 Funcionalidades

- Operações básicas:
  - ➕ Adição
  - ➖ Subtração
  - ✖️ Multiplicação
  - ➗ Divisão
  - ➗ Porcentagem

  - Recursos Adicionais:
    - Entrada de **botões**
    - Entrada por **teclado**
    - Suporte a números decimais
    - Apagar último caractere (backspace)
    - Limpar Cálculo (AC)
    - Tratamento de Erros Matemáticos

---

## 🧠 Lógica de Funcionamento

A calculadora funciona a partir de **controle de estado**, simulando o raciocínio matemático humano.

### Estados principais

- **displayValor**  
  Representa o valor ou expressão exibida no visor.

- **operador**  
  Define qual operação matemática será executada.

- **aguardandoNovoNumero**  
  Controla quando o próximo número digitado deve substituir o valor atual após um cálculo.

### Fluxo matemático

1. O usuário digita um número.
2. Seleciona um operador matemático.
3. Digita o próximo número.
4. Pressiona `=` para realizar o cálculo.
5. O resultado é exibido e a calculadora fica pronta para uma nova operação.

---

## 🔢 Controle de Entrada Numérica

- Evita múltiplos pontos decimais no mesmo número.
- Impede expressões inválidas.
- Atualiza o display dinamicamente a cada interação.

---

## 🧮 Cálculo Matemático

Antes de calcular, o sistema:

- Substitui o operador visual `x` por `*`.
- Avalia a expressão matemática.
- Arredonda o resultado para evitar erros de ponto flutuante.

```js
resultado = Math.round(resultado * 1000000) / 1000000;
```
