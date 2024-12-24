// Strict mode (modo restrito): ativando esse modo, os erros que eram solenciosos passam a gerar exceções no JavaScript

function showMessage() {
  "use strict";
  personName = "Jackson Bruno";

  console.log("Olá", personName);
}

showMessage();
