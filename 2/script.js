var amount = +prompt('Введите количество');


if (isNaN(amount)) {
    amount = 5
}while (amount == 0) {
    var amount = +prompt('Введите количество');
}


    
var symbol1 = prompt('Введите символ отступов');



var symbol2 = prompt('Введите конечный символ');


var res = symbol1
console.log(symbol2);
console.log(symbol1 + symbol2);
for (let i = 1; i < amount - 1; i++) {
    res = res + symbol1 
    console.log( res + symbol2);
}


