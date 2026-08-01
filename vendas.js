// =================================
// CLIENTE FÁCIL - VENDAS
// =================================


let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

let vendaEditando = null;




// Salvar venda

function salvarVenda(){


    let cliente = document.getElementById("clienteVenda").value;

    let produto = document.getElementById("produtoVenda").value;

    let valor = document.getElementById("valorVenda").value;



    if(cliente === "" || produto === "" || valor === ""){

        alert("Preencha todos os campos!");

        return;

    }



    let venda = {

        cliente: cliente,

        produto: produto,

        valor: valor,

        data: new Date().toLocaleDateString()

    };



    if(vendaEditando !== null){


        vendas[vendaEditando] = venda;

        vendaEditando = null;


    }else{


        vendas.push(venda);


    }



    localStorage.setItem(
        "vendas",
        JSON.stringify(vendas)
    );



    mostrarVendas();

    limparVenda();

    atualizarDashboard();


}





// Mostrar vendas

function mostrarVendas(){


    let lista = document.getElementById("listaVendas");


    lista.innerHTML = "";



    vendas.forEach(function(venda,index){



        let item = document.createElement("li");



        item.innerHTML = `


        <strong>${venda.cliente}</strong><br>

        📦 Produto: ${venda.produto}<br>

        💰 Valor: R$ ${venda.valor}<br>

        📅 Data: ${venda.data}


        <br><br>


        <button onclick="editarVenda(${index})">

        ✏️ Editar

        </button>


        <button onclick="excluirVenda(${index})">

        🗑️ Excluir

        </button>


        `;



        lista.appendChild(item);



    });



}





// Editar venda

function editarVenda(index){


    let venda = vendas[index];



    document.getElementById("clienteVenda").value = venda.cliente;


    document.getElementById("produtoVenda").value = venda.produto;


    document.getElementById("valorVenda").value = venda.valor;



    vendaEditando = index;


}





// Excluir venda

function excluirVenda(index){


    let confirmar = confirm(
        "Deseja excluir esta venda?"
    );



    if(confirmar){


        vendas.splice(index,1);



        localStorage.setItem(
            "vendas",
            JSON.stringify(vendas)
        );



        mostrarVendas();


        atualizarDashboard();


    }


}





// Limpar campos

function limparVenda(){


    document.getElementById("clienteVenda").value = "";

    document.getElementById("produtoVenda").value = "";

    document.getElementById("valorVenda").value = "";


}




// Carregar vendas

mostrarVendas();
