// =================================
// CLIENTE FÁCIL - PRODUTOS
// =================================


let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

let produtoEditando = null;



// Salvar produto

function salvarProduto(){


    let nome = document.getElementById("nomeProduto").value;

    let preco = document.getElementById("precoProduto").value;

    let estoque = document.getElementById("estoqueProduto").value;



    if(nome === ""){

        alert("Digite o nome do produto!");

        return;

    }



    let produto = {

        nome:nome,

        preco:preco,

        estoque:estoque

    };



    if(produtoEditando !== null){


        produtos[produtoEditando] = produto;

        produtoEditando = null;


    }else{


        produtos.push(produto);


    }



    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );



    mostrarProdutos();

    limparProduto();

    atualizarDashboard();


}




// Mostrar produtos

function mostrarProdutos(){


    let lista = document.getElementById("listaProdutos");


    lista.innerHTML = "";



    produtos.forEach(function(produto,index){



        let item = document.createElement("li");



        item.innerHTML = `


        <strong>${produto.nome}</strong><br>

        💰 R$ ${produto.preco}<br>

        📦 Estoque: ${produto.estoque}


        <br><br>


        <button onclick="editarProduto(${index})">

        ✏️ Editar

        </button>


        <button onclick="excluirProduto(${index})">

        🗑️ Excluir

        </button>


        `;



        lista.appendChild(item);



    });



}




// Editar produto

function editarProduto(index){


    let produto = produtos[index];


    document.getElementById("nomeProduto").value = produto.nome;

    document.getElementById("precoProduto").value = produto.preco;

    document.getElementById("estoqueProduto").value = produto.estoque;


    produtoEditando = index;


}




// Excluir produto

function excluirProduto(index){


    let confirmar = confirm(
        "Deseja excluir este produto?"
    );



    if(confirmar){


        produtos.splice(index,1);



        localStorage.setItem(
            "produtos",
            JSON.stringify(produtos)
        );



        mostrarProdutos();


        atualizarDashboard();


    }



}




// Limpar campos

function limparProduto(){


    document.getElementById("nomeProduto").value = "";

    document.getElementById("precoProduto").value = "";

    document.getElementById("estoqueProduto").value = "";


}




// Carregar produtos

mostrarProdutos();
