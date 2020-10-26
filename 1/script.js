var number = +prompt('Введите число');
var power = +prompt('Введите степень');
var res = number;

if ( isNaN(power) || power == 0 ) {
    alert(number * number);
}else if( isNaN(number) || number == 0) {
    alert('Что-то пошло не так');
}else if (!isNaN(power)) {
    for (let i = 1; i < power; i++) {
        res = res * number;
    }alert(res);
}

