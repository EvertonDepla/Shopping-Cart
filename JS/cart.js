let carrinho = []

function start(){

    fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => response.json())
    .then(data => {
        preencherCarrinho(data)
    })
    .catch(error => {
        console.log('Ocorreu um erro', error)
    })
}

function preencherCarrinho(produtos){
    produtos.forEach(data => {
        adicionarAoCarrinho(
            data.title,
            data.image,
            data.description,
            data.price
        )
    });
}

function adicionarAoCarrinho(nome,imgLink,descricao,preco){
    carrinho.push({
        "nome" : nome,
        "igmLink": imgLink,
        "dedscricao":descricao,
        "preco": Number.parseFloat(preco),
        "quantidade":0,
        "total": 0.0
    })
}