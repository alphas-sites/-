// =================================
// CLIENTE FÁCIL - DASHBOARD
// =================================


function atualizarDashboard(){


    let clientes = JSON.parse(
        localStorage.getItem("clientes")
    ) || [];



    let produtos = JSON.parse(
        localStorage.getItem("produtos")
    ) || [];



    let vendas = JSON.parse(
        localStorage.getItem("vendas")
    ) || [];





    document.getElementById("totalClientes")
    .innerHTML = clientes.length;




    document.getElementById("totalProdutos")
    .innerHTML = produtos.length;




    document.getElementById("totalVendas")
    .innerHTML = vendas.length;





    let faturamento = 0;



    vendas.forEach(function(venda){


        faturamento += Number(
            venda.valor.replace(",", ".")
        );


    });





    document.getElementById("totalFaturamento")
    .innerHTML = 

    "R$ " + faturamento.toFixed(2);



}


atualizarDashboard();

function mostrarData(){

    let hoje = new Date();

    document.getElementById("dataHoje").innerHTML =
        hoje.toLocaleDateString("pt-BR");

}

mostrarData();
