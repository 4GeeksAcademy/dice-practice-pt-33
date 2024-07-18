
function contarHaciaAtras(numero){ // recursiva
    
    if(!numero <= 0){ // codicion critica o condicion de salida
        console.log((numero)+ ' ❗️')
        contarHaciaAtras(numero - 1) // actualizando el número
        return
    }
    console.log("Fin! 🤠")
}

//  contarHaciaAtras(5)
function fibo(numero){
    if(numero <= 0){
        return 0
    }
    if(numero == 1 || numero == 2){
        return 1
    }
    return fibo(numero - 1) + fibo(numero - 2)
}

let result = fibo(-10)

console.log(result)