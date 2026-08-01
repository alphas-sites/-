// =====================================
// CLIENTE FÁCIL - LOGIN
// =====================================


// Abrir tela de cadastro

function abrirCadastro(){

    document.getElementById("login")
    .classList.add("escondido");


    document.getElementById("cadastro")
    .classList.remove("escondido");

}



// Voltar para login

function voltarLogin(){

    document.getElementById("cadastro")
    .classList.add("escondido");


    document.getElementById("login")
    .classList.remove("escondido");

}



// Criar conta da empresa

function criarConta(){


    const empresa =
    document.getElementById("nomeEmpresa").value;


    const usuario =
    document.getElementById("novoUsuario").value;


    const senha =
    document.getElementById("novaSenha").value;



    if(
        empresa === "" ||
        usuario === "" ||
        senha === ""
    ){

        alert("Preencha todos os campos!");

        return;

    }



    const dados = {

        empresa: empresa,

        usuario: usuario,

        senha: senha

    };



    localStorage.setItem(

        "clienteFacilUsuario",

        JSON.stringify(dados)

    );



    alert("Conta criada com sucesso!");



    voltarLogin();


}




// Fazer login

function login(){


    const usuario =
    document.getElementById("usuario").value;


    const senha =
    document.getElementById("senha").value;



    const dados =
    JSON.parse(
        localStorage.getItem("clienteFacilUsuario")
    );



    if(!dados){

        alert("Nenhuma conta cadastrada!");

        return;

    }



    if(
        usuario === dados.usuario &&
        senha === dados.senha
    ){


        document.getElementById("login")
        .classList.add("escondido");


        document.getElementById("sistema")
        .classList.remove("escondido");



        document.getElementById("empresaLogada")
        .innerHTML =
        "Empresa: " + dados.empresa;



        abrirPagina("dashboard");



    }else{


        alert("Usuário ou senha incorretos!");

    }


}



// Sair do sistema

function sair(){


    document.getElementById("sistema")
    .classList.add("escondido");


    document.getElementById("login")
    .classList.remove("escondido");



    document.getElementById("usuario").value="";

    document.getElementById("senha").value="";


}
