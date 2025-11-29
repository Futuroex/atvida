 let numero = prompt("Digite um número entre 1 e 7:");


    numero = Number(numero);

    
    if (isNaN(numero) || numero < 1 || numero > 7) {
      console.log("Número inválido. Digite um valor entre 1 e 7.");
    } else {
      switch (numero) {
        case 1:
          console.log("Domingo");
          break;
        case 2:
          console.log("Segunda-feira");
          break;
        case 3:
          console.log("Terça-feira");
          break;
        case 4:
          console.log("Quarta-feira");
          break;
        case 5:
          console.log("Quinta-feira");
          break;
        case 6:
          console.log("Sexta-feira");
          break;
        case 7:
          console.log("Sábado");
          break;
        default:
          console.log("Número inválido.");
      }
    }

