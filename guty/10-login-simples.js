 let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    
    let usuarioCorreto = "guty";
    let senhaCorreta = "123";

    
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      console.log("Login bem-sucedido!");
    } else {
      console.log("Usuário ou senha incorretos.");
    }

