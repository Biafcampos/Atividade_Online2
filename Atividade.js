let DataEvento = new Date("1/29/2022")
let Hoje = new Date()
let Participantes = ["Rafaela",  "João", "Maria", "Fabio", "Alice", "Marcos", "Brenda"]
let idade = 19

if(DataEvento > Hoje){
    console.log("Evento valido")
    if(idade >= 18){
        console.log("Idade valida")
    if(Participantes.length <= 100){
        for(let contador = 0; contador < Participantes.length; contador++){
            console.log(Participantes[contador])
          }

    } else {
        console.log("Cadastro não permitido, limite excedido")
    }
    } else{
        console.log("Cadastro não permitido pela idade")
    }
} else {
    console.log("Evento invalido")
}