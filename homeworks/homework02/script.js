// 01_1
var first_number,
    second_number;
first_number = +prompt('Type the first number');
second_number = +prompt('Type the second number');
var result = (first_number + second_number) / 2;
alert('The average is ' + Math.round(result*1000)/1000);
//01_2
var num = prompt('Enter your numbers using \",\"')
num = num.split(',');
var sum = 0;
for(var i = 0; i < num.length; i++) sum += Number(num[i]);
var average = sum / num.length;
alert('The average is: ' + Math.round(average*1000)/1000);
//02
var custom_number=+prompt('USD currency now is 26.455 UAH. Type a number');
var currency = 26.455;
var currency_result = custom_number/currency;
alert(custom_number + ' UAH is ' + Math.round(currency_result*100)/100 + ' USD');
//03
var first_value,
    second_value;
first_value = prompt('Let\'s compare some values. Type the first value');
second_value = prompt('Type the second value');
if (first_value === second_value) {
    alert('Yup, these are the same values');
} else {
    alert('Nope, these values are not the same');
}
// 04
var max = 10,
    min = 0,
    rand = Math.round(Math.random() * (max - min) + min),
    rounded = Math.round(rand);
var answer = +prompt('Guess a number between 0 and 10')
console.log(rounded); //стало любопытно, какое же число сгенерилось
alert(rounded === answer);