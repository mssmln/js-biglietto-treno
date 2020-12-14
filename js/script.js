// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// Bonus: grafica a piacere!


// METHOD 1
var km = parseInt(prompt('how many km are you supposed to do?'));
var age = parseInt(prompt('how old are you?'));
var fare = km * 0.21; // BETWEEN 18 AND 65 YEARS OLD


if (age < 18){ // LESS THAN 18 YEARS OLD
  fare = fare - ((fare * 20) / 100);
} else if (age > 65) { // MORE THAN 65 YEARS OLD
  fare = fare - ((fare * 40) / 100);
}

var fare = fare.toFixed(2);

document.getElementById('fare').innerText = 'your train fare totaled € ' + fare;
// /METHOD 1



// METHOD 2
// var km = parseInt(prompt('how many km are you supposed to do?'));
// var age = parseInt(prompt('how old are you?'));
// var fare;
//
// if ((age >= 18) && (age <= 65)){
//   fare = km * 0.21;
// } else if (age < 18) {
//   fare = fare - ((fare * 20) / 100);
// } else {
//   fare = fare - ((fare * 40) / 100);
// }
//
// var fare = fare.toFixed(2);
//
// document.getElementById('fare').innerHTML = fare;
// /METHOD 2
