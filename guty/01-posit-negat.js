let numero = prompt("Digite um número:");

    numero = Number(numero);

    if (isNaN(numero)) {
      console.log("Você não digitou um número válido.");
    } else if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é igual a zero.");
    }