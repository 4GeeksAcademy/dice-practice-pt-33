
let contador = 15; // iteración

do{ 

    // bloque de codigo
    console.log('Aca existio el Do While :( ')

    contador++; // condicion incremental

}while(contador <= 10); // condición critica o de salida



let vector = [1, 0, 1]

let count = 9

while(count <= 7){
    console.log(count + ' while')
    count = count + 2
}


for(let i = 100; i >= 50; i = i - 5){ // variable , condicion de salida , condicion incremental
    //  console.log(i)
    for(let j = 0; j <= 5; j++){
        if(j == 2){
            continue;
        }
        console.log(i,j)
    }
}

