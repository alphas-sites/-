// =================================
// CLIENTE FÁCIL - LOGIN
// =================================


// Abrir tela de cadastro

function abrirCadastro(){

    document.getElementById("login").classList.add("escondido");

    document.getElementById("cadastro").classList.remove("escondido");

}




// Voltar para login

function voltarLogin(){

    document.getElementById("cadastro").classList.add("escondido");

    document.getElementById("login").classList.remove("escondido");

}





// Criar conta

function criarConta(){

    let empresa = document.getElementById("nomeEmpresa").value;

    let usuario = document.getElementById("novoUsuario").value;

    let senha = document.getElementById("novaSenha").value;



    if(
        empresa === "" ||
        usuario === "" ||
        senha === ""
    ){

        alert("Preencha todos os campos!");

        return;

    }



    localStorage.setItem("empresa", empresa);

    localStorage.setItem("usuario", usuario);

    localStorage.setItem("senha", senha);



    alert("Empresa cadastrada com sucesso!");



    voltarLogin();


}





// Fazer login

function login(){


    let usuario = document.getElementById("usuario").value;

    let senha = document.getElementById("senha").value;



    let usuarioSalvo = localStorage.getItem("usuario");

    let senhaSalva = localStorage.getItem("senha");



    if(
        usuario === usuarioSalvo &&
        senha === senhaSalva
    ){


        document.getElementById("login").classList.add("escondido");


        document.getElementById("sistema").classList.remove("escondido");



        document.getElementById("empresaLogada").innerHTML =
        "Empresa: " + localStorage.getItem("empresa");



    }else{


        alert("Usuário ou senha incorretos!");


    }


}





// Sair do sistema

function sair(){


    document.getElementById("sistema").classList.add("escondido");


    document.getElementById("login").classList.remove("escondido");


}
