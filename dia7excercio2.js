let saldo = 500
let valor = Number
let deposito = Number
let saque = Number(saldo - valor)
let operacao = String

do{
    nome = prompt("Qual o seu nome? ")
    cpf = prompt("Qual o seu CPF?")
    operacao = String(prompt("Você deseja sacar ou depositar? "))
    valor = Number(prompt("Qual valor deseja? "))

    if(operacao === "depositar") {
       if ((saldo + valor)){

       }
      }

    if(operacao === "sacar"){
        if((saldo - valor)){

        }
    }   
          maiorValor = deposito > saque && saque > deposito
            mediaValores = deposito + saque / 2 

}while (saldo = 0 && saldo <= 1500)

console.log ("Seu saldo total é " + saldo)
console.log ("O maior valor de hoje foi " + maiorValor)
console.log ("A média dos valores é" + mediaValores)