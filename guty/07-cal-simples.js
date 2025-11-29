 let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");


    num1 = Number(num1);
    num2 = Number(num2);


    let operacao = prompt("Digite a operação (+, -, *, /):");

    
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Você não digitou números válidos.");
    } else {
      let resultado;

      
      switch (operacao) {
        case "+":
          resultado = num1 + num2;
          break;
        case "-":
          resultado = num1 - num2;
          break;
        case "*":
          resultado = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            console.log("Erro: divisão por zero não é permitida.");
            resultado = null;
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          console.log("Operação inválida. Use apenas +, -, * ou /.");
          resultado = null;
      }

      
      if (resultado !== null) {
        console.log("Resultado: " + resultado);
      }
    }

