//01

var usdCurrency = 26.050;
var eurCurrency = 28.860;
var rurCurrency = 0.370;
var result;

var to = prompt('What currency do you need to transfer? Type USD, EUR or RUR');

function exchange(from, to) {
    if (to === 'USD') {
        result = Math.round((from/usdCurrency)*100)/100;
    } else if (to === 'EUR') {
        result = Math.round((from/eurCurrency)*100)/100;
    } else if (to === 'RUR') {
        result = Math.round((from/rurCurrency)*100)/100;
    } 

    return result;
}

if (to === 'USD' || to === 'EUR' || to === 'RUR') {
    var from = +prompt('Enter a number');
    alert(from + ' UAH it\'s ' + exchange(from, to) + ' ' + to);
} else {
    alert('Sorry, I don\'t know that currency.');
}


// 02

var sum = +prompt('Enter the sum');
var years = +prompt('How many years do you want to open a deposit?');
var percent = Math.round(sum / 100 * 15);
var result;

function deposite(sum, percent, years) {
    result = Math.round(sum + (percent * years));

    return result;
}

alert('After ' + years + ' years your sum ' + sum + ' will turn to ' + deposite(sum, percent, years));


