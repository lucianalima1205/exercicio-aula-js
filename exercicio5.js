var arr = [10, 20, 30];
var soma = arr.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma);