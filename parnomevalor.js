// par nome valor
const saudacao = "opa" // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa'// contexto léxico 2
    return saudacao
}
// Objetos são grupos aninhados de pares de chaves e valores
const cliente = {
    nome : 'Luciano',
    idade: 42,
    peso: 85,
    endereco: {
        logradouro: "rua Celso Carrilho de Faria",
        numero: 443
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)