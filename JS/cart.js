let carrinho = []

function start() {

    fetch('https://fakestoreapi.com/products?limit=4')
        .then(response => response.json())
        .then(data => {
            preencherCarrinho(data)
        })
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
}

function preencherCarrinho(produtos) {
    produtos.forEach(data => {
        adicionarAoCarrinho(
            data.title,
            data.image,
            data.description,
            data.price
        )
    });

    atualizarCarrinho();
}

function adicionarAoCarrinho(nome, imgLink, descricao, preco) {
    carrinho.push({
        "nome": nome,
        "igmLink": imgLink,
        "dedscricao": descricao,
        "preco": Number.parseFloat(preco),
        "quantidade": 0,
        "total": 0.0
    })
}

function atualizarCarrinho() {
    let carrinhoHTML = document.getElementById('carrinho')

    carrinho.forEach((produto,index) => {
        `<div>
        id='produto${index}'
        class='d-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pt-2 pb-3 border-botton mobile'
        >

            <div class='d-flex flex-row aalign-items-center'>
             <div>
                <img
                    src='${produto.imgLink}
                    width='150'
                    heigth='150'
                    id='image'
                />
             </div>
            <div class='d-flex flex-column pl-md-4 pl-1>
                <div><h6>${produto.nome}</h6></div>
         </div>
        </div>
        <div class='pl-md2 pl-1'><b> R$ ${produto.preco}</b></div>
        <div class='pl-md-3 pl-2'>
            <span
                class='fa fa-minus-square text-secondary'
                onclick='removeItem(${index})'
                >
                </span>
                <span class='px-md-3 px-1' id='quantidade${index}'>
                    ${produto.quantidade}
                </span>
            <span
                class='fa fa-plus-square text-secondary'
                onclick='adicionarItem(${index})'
            >
            </span>
        </div>
        <div class'pl-md-0 pl-1'>
            <b>R$ <span id='total${index}'>0</span></b>
        </div>
        <div class='close' onclick='removeProduto(${index})'</div>
        </div>`
    })
}