 let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");

    
    num1 = Number(num1);
    num2 = Number(num2);

    
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Você não digitou números válidos.");
    } else if (num2 === 0) {
      console.log("Não é possível verificar múltiplos com divisor igual a zero.");
    } else {
      
      if (num1 % num2 === 0) {
        console.log(num1 + " é múltiplo de " + num2);
      } else {
        console.log(num1 + " não é múltiplo de " + num2);
      }
    }

