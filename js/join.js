const elements = ["Soy", "Olivander", "3d"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++){
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for' , rtaFinal);
