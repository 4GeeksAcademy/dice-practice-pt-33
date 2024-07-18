const fruits = ['Manzana', 'Pera', 'Piña', 'Cambur', 'Tomate'];

function tieneCuatroLetras(word){ // son reutilizables
    if(word.length == 4){
        return true
    }else{
        return false
    }
}

//const result = fruits.filter(tieneCuatroLetras)

const result = fruits.filter((word) => word.length == 4); // funciones flecha son desechables y no tienen nombre son anonimas

console.log(result);