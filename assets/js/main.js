/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// Seleziono gli elementi della DOM
const containerEl = document.querySelector('.container');
const btnEl = document.querySelector('button');

// Creo il div che conterrà il numero e lo inserisco all'interno del container
const element = document.createElement('div');
containerEl.append(element);

//Aggiungo un eventListener al bottone
btnEl.addEventListener('click', function(){
    
    //Genero i numeri casuali
    randomNum(100);


})


//----------Funzioni----------//

function randomNum (max,min=1){
   //Credo array vuoto dove inserirò i numeri
   const numbers= [];

   //Ciclo per ottenere i numeri
   while (numbers.length< 5){
        const number = Math.floor(Math.random() * (max - min + 1)) + min;

        //Verifico che non escano più numeri uguali
        if (!numbers.includes(number)){
            numbers.push(number)
        }
    }
    console.log(numbers);
    return numbers
}