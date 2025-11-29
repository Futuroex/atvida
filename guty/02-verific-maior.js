let idade = prompt("Digite sua idade:");


    idade = Number(idade);

    if (isNaN(idade)) {
      console.log("Você não digitou uma idade válida.");
    } else if (idade >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
      }
