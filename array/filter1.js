const produto = [
    {nome: 'Notebook', preco: 2499, fragil:true},
    {nome:"ipad pro", preco: 4199, fragil: true},
    {nome:'Copo de vidro',preco:12.49, fragil:true},
    {nome:'Copo de plástico', preco:18.99, fragil:false}
]

console.log(produto.filter(function(p){
    return p.preco > 2400 & p.fragil 
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))