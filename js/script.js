// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// Bonus: grafica a piacere!

var km = parseInt(prompt('how many km are you supposed to do?'));
var age = parseInt(prompt('how old are you?'));
var normalFare, discountedFare;
// var twoDecimal = discountedFare.toFixed(2);

normalFare = km * 0.21;

if (age < 18){
  twoDecimal = normalFare - ((normalFare * 20) / 100);
} else if (age > 65) {
  twoDecimal = normalFare - ((normalFare * 40) / 100);
} else {
  normalFare;
}


console.log(normalFare);
console.log(twoDecimal);
