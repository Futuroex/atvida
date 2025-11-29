let peso = prompt("Digite seu peso em kg:");
    let altura = prompt("Digite sua altura em metros (ex: 1.75):");

    
    peso = Number(peso);
    altura = Number(altura);

    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Você não digitou valores válidos.");
    } else {
      let imc = peso / (altura * altura);

      console.log("Seu IMC é: " + imc.toFixed(2));

      if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Classificação: Peso normal");
      } else {
        console.log("Classificação: Acima do peso");
      }
    }

