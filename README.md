# Calculadora-Js

Este projeto consiste em uma calculadora desenvolvida em JavaScript puro, com suporte a cliques e teclado, focada em lógica matemática, controle de estado e validações, sem dependências externas.

O objetivo principal do projeto é demonstrar domínio de lógica de programação, manipulação de eventos e controle de fluxo, simulando o comportamento de uma calculadora real.

🚀 Funcionalidades

Operações básicas:
➕ Adição
➖ Subtração
✖️ Multiplicação
➗ Divisão
➗ Porcentagem

Suporte a:

Entrada via botões

Entrada via teclado

Números decimais

Apagar último caractere (Backspace)

Limpar cálculo (AC)

Tratamento de erros matemáticos

🧠 Lógica de Funcionamento

A calculadora funciona a partir de controle de estado, simulando o raciocínio matemático humano:

Estados principais:

Valor exibido (displayValor): representa a expressão ou número atual.

Operador ativo: define a operação matemática.

Flag de controle (aguardandoNovoNumero): determina quando o próximo número deve substituir o display após um cálculo.

Fluxo matemático simplificado:

O usuário digita um número.

Seleciona um operador matemático.

Digita o próximo número.

Ao pressionar =, o cálculo é realizado.

O resultado é exibido e o sistema se prepara para um novo cálculo.

🔢 Controle de Entrada Numérica

Os números são tratados de forma incremental.

O sistema evita:

Múltiplos pontos decimais no mesmo número.

Expressões inválidas (ex: 5++2).

O display é atualizado dinamicamente a cada interação.

🧮 Cálculo Matemático

O cálculo final é realizado avaliando a expressão matemática construída pelo usuário.

Antes da avaliação:

O operador visual x é convertido para \*.

O resultado é arredondado para evitar problemas com números de ponto flutuante.

resultado = Math.round(resultado \* 1000000) / 1000000;

⌨️ Suporte ao Teclado

A calculadora aceita entrada direta pelo teclado:

Tecla Ação
0–9 Números
. Decimal

- - - / % Operadores
      Enter / = Calcular
      Backspace Apagar
      Esc / C Limpar
      🛡️ Tratamento de Erros

Expressões inválidas exibem "Erro" no display.

Após o erro, o sistema é resetado automaticamente.

Evita travamentos e mantém a experiência do usuário fluida.

🛠️ Tecnologias Utilizadas

JavaScript (ES6)

HTML5

CSS3

Manipulação de DOM

Eventos de teclado (keydown)

📌 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Aprimorar lógica matemática

Fortalecer fundamentos de JavaScript

Simular comportamento de sistemas reais

Servir como projeto de portfólio
