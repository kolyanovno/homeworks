var arr = [1, 2, 3, 4];

// every

var resultEvery = arr.every(function(value) {
    return value > 3;
})

console.log(resultEvery);

function every(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        if(!callback(arr[index], index, arr)){
            return false;
        }
    }
    return true;
}

console.log(every(arr, function(el) {
    return el > 3;
}));

// some

var resultSome = arr.some(function(value) {
    return value > 3;
});

console.log(resultSome);

function some(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        if(callback(arr[index], index, arr)) {
            return true;
        }
    }
    return false;
}

console.log(some(arr, function(el) {
    return el > 3;
}));

// reduce

var resultReduce = arr.reduce(function(previousValue, value) {
    return previousValue + value;
});

console.log(resultReduce);

function reduce(arr, callback, previousValue) {
    var result = previousValue || 0;
    for (var index = 0; index < arr.length; index++) {
        result = callback(result, arr[index], index, arr);
      }
    return result;
}

console.log(reduce(arr, function(value, previousValue) {
    return value + previousValue;
  }));