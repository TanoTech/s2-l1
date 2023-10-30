/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 

1. Dato String è un dato immesso tra le virgolette che specifica un elemento di tipo testuale 
2. Dato numerico è un dato immesso senza virgolette che specifica un carattere numerico 3. Dato Booleano è un dato che risponde a vero o falso 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Gaetano" /* SCRIVI QUI LA TUA RISPOSTA */
console.log(name)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12 /* SCRIVI QUI LA TUA RISPOSTA */
let numero2 = 20
console.log(numero1 + numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 /* SCRIVI QUI LA TUA RISPOSTA */
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Napoli"  /* SCRIVI QUI LA TUA RISPOSTA */
console.log(name)
/* se assegno una const a name mi da un errore di sintassi dicendo che la variabile name è stata gia dichiarata at D1.js:51:7, mentre avendo dato una seconda variabile sul log spunta il mio cognome senza nessun errore */




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4) /* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john" /* SCRIVI QUI LA TUA RISPOSTA */
let name2 = "John"
console.log(typeof name1 === name2)
console.log(name1.toLowerCase === name2.toLowerCase)


