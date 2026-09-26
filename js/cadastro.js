

    const formCadastro = document.getElementById("formCadastro");


const mensagem = document.getElementById("mensagem");


const cpfInput = document.getElementById("cpf");




cpfInput.addEventListener("input", function() {


    let cpf = cpfInput.value;




    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, "");




    // Limita para no máximo 11 números
    cpf = cpf.substring(0, 11);




    // Adiciona o primeiro ponto
    if (cpf.length > 3) {
        cpf = cpf.replace(
            /^(\d{3})(\d)/,
            "$1.$2"
        );
    }




    // Adiciona o segundo ponto
    if (cpf.length > 6) {
        cpf = cpf.replace(
            /^(\d{3})\.(\d{3})(\d)/,
            "$1.$2.$3"
        );
    }




    // Adiciona o hífen antes dos últimos 2 números
    if (cpf.length > 9) {
        cpf = cpf.replace(
            /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
            "$1.$2.$3-$4"
        );
    }




    cpfInput.value = cpf;


});


formCadastro.addEventListener("submit", function(event) {


    event.preventDefault();




    const nome = document.getElementById("nome").value;


    const cpf = document.getElementById("cpf").value;


    const nascimento = document.getElementById("nascimento").value;


    const email = document.getElementById("email").value;


    const telefone = document.getElementById("telefone").value;


    const endereco = document.getElementById("endereco").value;


    const numero = document.getElementById("numero").value;


    const bairro = document.getElementById("bairro").value;


    const cidade = document.getElementById("cidade").value;


    const estado = document.getElementById("estado").value;


    const cep = document.getElementById("cep").value;


    const senha = document.getElementById("senha").value;


    const confirmarSenha =
        document.getElementById("confirmarSenha").value;




    // Verifica se as senhas são iguais


    if (senha !== confirmarSenha) {


        mensagem.innerText =
            "As senhas não são iguais.";


        mensagem.style.color = "red";


        return;
    }




    // Cria o cadastro do cliente


    const cliente = {


        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        email: email,
        telefone: telefone,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep


    };




    // Salva os dados


    localStorage.setItem(
        "cliente",
        JSON.stringify(cliente)
    );




    // Mensagem de sucesso


    mensagem.innerText =
        "Cadastro realizado com sucesso!";


    mensagem.style.color = "green";




    // Aguarda 1 segundo e volta para a página inicial


    setTimeout(function() {


        window.location.href = "index.html";


    }, 1000);


});




