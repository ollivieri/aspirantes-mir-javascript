// escribe la función maxIndex acá
function maxIndex(a , b , c ){
    var indices = [a, b, c];
    var array = ['10', '9', '8', '7', '6', '5' , '4'];
    var element = 'c';
    var idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
}
}

    
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1