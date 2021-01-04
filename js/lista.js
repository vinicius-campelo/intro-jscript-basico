var lista  = ["maça","pera","laranja","uva"];
console.log(lista);
console.log(lista[1]);
lista.push("maconha");
console.log(lista);
lista.pop();
console.log(lista);
lista.reverse();
console.log(lista);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

var n = lista.lastIndexOf("laranja");
console.log(n);

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);

var cont = 0;
while(cont <= lista.length){
    console.log(lista[cont]);
    cont++;
}

for(var i=0; i <= lista.length; i++){
    console.log(lista[i]);
}


var data = new Date();
console.log(data);
console.log(data.getDay() ,"/", data.getMonth()+1 ,"/", data.getFullYear());
