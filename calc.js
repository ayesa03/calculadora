let numero1 = 8
let numero2 = 10


let adicao = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let operador = "+" 


console.log("Adição:" + adicao)
console.log("Subtraçao:" + subtracao) 
console.log("Multiplicação:" + multiplicacao)
console.log("Divisão:" + divisao)



if (numero2 == 0){
    console.log("Não é possível dividir por 0")
}   else {
    divisao = numero1 / numero2}
    switch(operador){
        case "+":
           resultado  = numero1 + numero2
           break
        case "-":
           resultado = numero1 - numero2
           break
        case "*":
            resultado = numero1 * numero2
            break
       case "/":
           resultado = numero1 / numero2
           default:
           resultado = "Operador invalido" 
  

}
