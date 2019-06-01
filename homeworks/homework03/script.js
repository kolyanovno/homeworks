// Import stylesheets
import './style.css';

//01_1
var answer = +prompt('How old are you?');

if (answer >= 18) {
    alert('Welcome!');
} else if (answer <= 12) {
    alert('Try another service');
} else if (Number.isNaN(answer)) {
    alert('This is not a nomber');
} else {
    alert('Go away!');
}

//01_2
var answer = +prompt('How old are you?');

alert(isNaN(answer) || answer <= 0 ? 'Enter your age' : 
    answer >= 18 ? 'Welcome' : 
        answer <= 12 ? 'Try anorher servise' : 
            'Go away!');

//02
var age = +prompt('Answer a few questions. How old are you?');
var education = prompt('Do you have an education in this specialty? Type "yes" or "no"');
var experience = +prompt('How many years have you worked in this field?');
var cutie = prompt('Do you get along with people? Type "yes" or "no"');
var catLover = prompt('Do you get along with cats? Type "yes" or "no"');
var batman = prompt('Is Christian Bale the greatest Batman? Type "yes" or "no"');

if (age >= 30 && 
    education, cutie, catLover, batman === 'yes' && 
    experience >= 3) {
        alert ('Great, you are accepted!');
} else {
    alert ('Sorry, you should find something else!');
}

//03
var choose_currency = prompt('What currency do you need to transfer? Type USD, EUR or RUR');
if (choose_currency === 'USD' || choose_currency === 'EUR' || choose_currency === 'RUR') {
    var number=+prompt('Enter a number');
} else {
    alert('Sorry, I don\'t know that currency.')
}

var usdCurrency = 26.050;
var eurCurrency = 28.860;
var rurCurrency = 0.370;
var result;

switch (choose_currency) {
    case ('USD'):
        alert(number + ' UAH is ' + (result = Math.round((number/usdCurrency)*100)/100) + ' USD');
        break;
    case ('EUR'):
        alert(number + ' UAH is ' + (result = Math.round((number/eurCurrency)*100)/100) + ' EUR');
        break;
    case ('RUR'):
        alert(number + ' UAH is ' + (result = Math.round((number/rurCurrency)*100)/100) + ' RUR');
        break;
    }