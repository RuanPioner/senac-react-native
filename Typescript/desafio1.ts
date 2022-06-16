interface Carrinho {
    id:number
    descricao:string
    preco:number
    qtde:number
}

var produtos: Carrinho = {id:0,descricao:'',preco:0,qtde:0}

produtos.id = 1
produtos.descricao = 'Mouse HyperX'
produtos.preco = 347
produtos.qtde = 2

console.log(produtos)
