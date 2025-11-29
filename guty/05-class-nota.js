let nota = prompt("Digite uma nota de 0 a 10:");


    nota = Number(nota);


    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Você não digitou uma nota válida.");
    } else if (nota >= 0 && nota <= 4) {
      console.log("Nota baixa");
    } else if (nota >= 5 && nota <= 7) {
      console.log("Nota média");
    } else {
      console.log("Nota alta");
    }

