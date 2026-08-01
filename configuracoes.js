// =================================
// CLIENTE FÁCIL - CONFIGURAÇÕES
// =================================

function salvarConfiguracoes(){

    let empresa = {

        nome: document.getElementById("empresaNome").value,
        telefone: document.getElementById("empresaTelefone").value,
        email: document.getElementById("empresaEmail").value,
        endereco: document.getElementById("empresaEndereco").value

    };

    localStorage.setItem(
        "configuracoesEmpresa",
        JSON.stringify(empresa)
    );

    document.getElementById("empresaLogada").innerHTML =
        empresa.nome || "Bem-vindo";

    alert("Configurações salvas com sucesso!");

}

function carregarConfiguracoes(){

    let empresa = JSON.parse(
        localStorage.getItem("configuracoesEmpresa")
    );

    if(!empresa){
        return;
    }

    document.getElementById("empresaNome").value =
        empresa.nome || "";

    document.getElementById("empresaTelefone").value =
        empresa.telefone || "";

    document.getElementById("empresaEmail").value =
        empresa.email || "";

    document.getElementById("empresaEndereco").value =
        empresa.endereco || "";

    document.getElementById("empresaLogada").innerHTML =
        empresa.nome || "Bem-vindo";

}

carregarConfiguracoes(); 
