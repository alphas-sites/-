// =================================
// CLIENTE FÁCIL - ORÇAMENTOS
// =================================


let itensOrcamento = [];

let totalOrcamento = 0;


// Adicionar item ao orçamento

function adicionarItemOrcamento(){

    const descricao = document.getElementById("descricaoOrcamento").value;

    const valor = Number(
        document.getElementById("valorOrcamento").value
    );


    if(descricao === "" || valor <= 0){

        alert("Preencha descrição e valor!");

        return;

    }


    itensOrcamento.push({

        descricao: descricao,

        valor: valor

    });


    atualizarOrcamento();


    document.getElementById("descricaoOrcamento").value = "";

    document.getElementById("valorOrcamento").value = "";

}



// Atualizar lista e total

function atualizarOrcamento(){


    const lista = document.getElementById("listaOrcamentos");


    lista.innerHTML = "";


    totalOrcamento = 0;



    itensOrcamento.forEach(item => {


        totalOrcamento += item.valor;


        const li = document.createElement("li");


        li.innerHTML = 
        `${item.descricao} - R$ ${item.valor.toFixed(2)}`;


        lista.appendChild(li);


    });



    const total = document.createElement("h3");


    total.innerHTML =
    `Total: R$ ${totalOrcamento.toFixed(2)}`;


    lista.appendChild(total);

}



// Salvar orçamento

function salvarOrcamento(){


    const cliente =
    document.getElementById("clienteOrcamento").value;



    if(cliente === ""){

        alert("Digite o nome do cliente!");

        return;

    }


    if(itensOrcamento.length === 0){

        alert("Adicione pelo menos um item!");

        return;

    }



    const orçamento = {


        cliente: cliente,

        itens: itensOrcamento,

        total: totalOrcamento,

        data: new Date().toLocaleDateString()


    };



    let orcamentos = 
    JSON.parse(localStorage.getItem("orcamentos")) || [];



    orcamentos.push(orçamento);



    localStorage.setItem(

        "orcamentos",

        JSON.stringify(orcamentos)

    );



    alert("Orçamento criado com sucesso!");



    itensOrcamento = [];

    atualizarOrcamento();

}
