// 01_1
var index = 0;
do {
    console.log(index);
} while (++index < 5);

// or

var index = 0;
while (index < 5) {
    console.log(index);
    index++;
}


// 01_2
var i = 1;
do {
    if(!(i % 2)) break;
    console.log(i);
} while (++i < 10);

// or

var i = 1;
while (i < 10) {
    if(!(i % 2)) break;
    console.log(i);
    i++;
} 


// 02
var max = 5,
    min = 0,
    rand = Math.round(Math.random() * (max - min) + min),
    answer;
while (answer !== null && rand !== answer) {
    answer = +prompt('Guess a number');
    console.log(answer, rand);
}


// 03_1
var number = +prompt('Кратное какому значению следует вывести числа? Введите число от 1 до 100');
if (Number.isNaN(number)) {
    console.log('Это не число');
} else {
    for (var i = 1; i < 100; i++) {
        if(i % number) continue;
        console.log(i);
    }
}

// 03_2
var number = +prompt('Кратное какому значению следует вывести числа?');
var quantity = +prompt('Какое колличество чисел следует вывести?');
if (Number.isNaN(number) || Number.isNaN(quantity)) {
    console.log('Это не число');
} else if (number >= quantity) {
    console.log('Так ничего не выйдет :(');
} else {
    for (var i = 1; i < quantity; i++) {
        if(i % number) continue;
        console.log(i);
    }
}