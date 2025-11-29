let numero = prompt("Digite um número:");


    numero = Number(numero);

    if (isNaN(numero)) {
      console.log("Você não digitou um número válido.");
    } else if (numero % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }

