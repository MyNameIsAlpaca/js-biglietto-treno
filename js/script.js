/*
1 chiedere quanti km deve fare il passeggero
2 chiedere l'età del passeggero
3 definire il prezzo del biglietto di 0.21€/km tenendo conto di:
  - sconto 20% per minorenni (- di 18 anni)
  - sconto 40% per gli over 65 anni
4 mostrare prezzo con una frase umana
*/

let passengerAge = parseInt(prompt("Quanti anni hai?"))

let distance = parseInt(prompt("Quanti km devi percorrere?"))

let ticketPrice = (distance * 0.21)

if (passengerAge < 18) {
    ticketPrice =  Math.round((((distance * 0.21) * 80) / 100) * 100) / 100;  
} 
else if (passengerAge > 65) {
    ticketPrice =  Math.round((((distance * 0.21) * 60) / 100) * 100) / 100;  
}

document.writeln( "Il costo del tuo viaggio è di " + ticketPrice + "€.")

if (passengerAge < 18) {
    document.writeln("Visto che la tua età è di " + passengerAge + " anni hai ricevuto uno sconto del 20%!")
} 
else if (passengerAge > 65) {
    document.writeln("Visto che la tua età è di " + passengerAge + " anni hai ricevuto uno sconto del 40%!")
}