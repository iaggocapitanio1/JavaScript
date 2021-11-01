const sum = function(x, y){
    return x + y;
}
const printResult = function (a, b, operation = sum){
    console.log(`the result is: ${operation(a, b)}`)
}
printResult(3, 4)
printResult(3, 4, function (x, y){ return x/y});
