// Strict mode (modo restrito): ativando esse modo, os erros que eram solenciosos passam a gerar exceções no JavaScript
"use strict";

function showMessage() {
  let personName = "Jackson Bruno";

  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// student.point = 10;

console.log(student.point);

// Tentando deletar uma propriedade de um objeto que não posso deletar.
// delete window.document;

// Quando passamos parâmetros duplicados
function sum(a, a, c) {
  return a + b + c;
}

const result = sum(1, 3, 2);
console.log(result);
// O resultado é oito (pegadinha) 3 + 3 = 6 + 2.
