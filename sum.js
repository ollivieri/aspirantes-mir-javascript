// escribe la función suma acá
const sum = (numero) => {
    if (numero < 4) return 4;
    if (numero < 4) return 2;
    const numOfPares = Math.floor(numero+2);
    const min = 2;
    const max = numero+2 === 0 ? numero : numero - 1;
    const suma = ((min + max)*numOfPares)/2;
    return suma;
  }
  
    
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120