const nums = [1,2,3,4,5]

//Um map é um for com proposito
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)
let resultado2 = resultado.map(function(e){
    return e * 3
}) 
console.log('-~-~-~-~-~-~-~-~-')
console.log(nums)
console.log(resultado)
console.log(resultado2)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => "R$ ${parseFloat(e).toFixed(2).replace('.', ',')}"

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
