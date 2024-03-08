const valorTotal = [0,0]
const valorProduto = [50.00,30.00]
const qtd = [0,0]

function adicionarItem(item){

    const quatidade = document.getElementById("quantidade" + item)
    const total = document.getElementById("total" + item)
    qtd[item] += 1
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
    quatidade.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2)
    valorCompra()

}

function removerItem(item){

    if (qtd[item] > 0) {
        qtd[item] -= 1
        var quantidade = document.getElementById("quantidade" + item)
        var total = document.getElementById("total" + item)
        quantidade.innerHTML = qtd[item]
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
        total.innerHTML = valorTotal[item].toFixed(2)
        valorCompra()
    }
}

function valorCompra(){

    let valorTotalCompra = document.getElementById("valorTotalCompra")
    let valor = 0

    for(let i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2)

}