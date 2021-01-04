"use strict";

// Parâmetro Significado
//  elem - Valor do elemento
// index - Índice em cada iteração, da esquerda para a direita
// array - Array original invocando o método
// Map()
var lista = [2, 3, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
var dobraNumeros = lista.map(function (elem) {
  return elem * 2;
}); // FORMA MODERNA
// arrow function

var dobraNumero = lista.map(function (num) {
  return num * 2;
});
console.log(dobraNumero);
var fahrenheit = [0, 32, 45, 50, 75, 80, 120];
var celsius = fahrenheit.map(function (elem) {
  return Math.round((elem - 32) * 5 / 9);
}); // FORMA MODERNA
// arrow function

var celsiu = fahrenheit.map(function (elem) {
  return Math.round((elem - 32) * 5 / 9);
});
console.log(celsiu); // Filter()
// remover elementos duplicados de um array.
// arrow function

var arrays = [2, 3, 4, 5, 4, 3, 2, 4, 5, 4, 6, 7, 8, 20, 32];
var removeRepetidos = arrays.filter(function (elem, index, arr) {
  return arr.indexOf(elem) === index;
});
console.log(removeRepetidos);
var listaArr = [2, 3, 4, 5, 4, 3, 2, 4, 5, 4, 6, 7, 8, 20, 32];
var uniqueArray = listaArr.filter(function (elem, index, array) {
  return array.indexOf(elem) === index;
});
console.log(uniqueArray); // Reduce()
// Soma todos os lancamentos

var rockets = [{
  country: "Russia",
  launches: 32
}, {
  country: "US",
  launches: 23
}, {
  country: "China",
  launches: 16
}, {
  country: "Europa",
  launches: 7
}, {
  country: "India",
  launches: 4
}, {
  country: "Japan",
  launches: 3
}]; // (W119)jshint(W119)

var totalLaunches = rockets.reduce(function (prevVal, elem) {
  return prevVal + elem.launches;
}, 0);
console.log(totalLaunches);