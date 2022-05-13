const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar  = pessoa.falar
falar()

const falarDepessoa = pessoa.falar.bind(pessoa)
falarDepessoa()