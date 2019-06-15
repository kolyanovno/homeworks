var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var quantity,
    min,
    max,
    words = [], 
    normWords = {};

quantity = +prompt('Какое количество рандомных значений нужно создать?');
min = +prompt('Какое минимальное количество символов?');
max = +prompt('Какое максимальное количество символов?');

for (var i = quantity; i > 0; i--) {
    var newWord = '';
    var lettersCount = Math.round(Math.random() * (max - min) + min);
    
    for (var letterIteration = lettersCount; letterIteration > 0; letterIteration--) {
        var letterIndex = Math.round(Math.random() * (alphabet.length - 1));
        newWord += alphabet[letterIndex];
    }
    if (!normWords[newWord.length]) {
        normWords[newWord.length] = [];
    }

    normWords[newWord.length].push(newWord);
}
    

console.log(normWords);