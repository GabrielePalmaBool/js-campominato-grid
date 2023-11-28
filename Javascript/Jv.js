/* 

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

*/


//Svolgimento

// acquisisco l'elemento che ha per classe box
const Container = document.querySelector(".containerCenter");

// acquisisco l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// acquisisco l'elemento (bottone) che ha per id play,
const DeleteButton = document.getElementById("del");

const MaxSquare = 100;


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",

    function () {

    
        for(let i = 0 ; i < MaxSquare; i++){

            const mySquare = crateSquare("div","Box");
        
            //inserisco stringa all'interno del mio contenitore tutti i blocchi necessari
            Container.append(mySquare);
        
        }
        
    }
);

//funzione per il popolamento automatico del mio container
function crateSquare(val1,val2) {

    //Creo l'elemento all'interno del mio file html
    const square = document.createElement (val1);

    //aggiungo la classe desiderata
    square.classList.add(val2);

    //restituisco tale elemento
    return square;

}



// Quando viene cliccato il pulsante elimina 
DeleteButton.addEventListener("click",

    function () {

        //acquisisco i valore nel tag p(qualora ci fosse)
        const number = document.querySelector('.containerCenter .Box');
       

        //Verifico che c'è
        if(number != null){

            //fino a quando nel container ci saranno box
            while (Container.firstChild) {
                //elimina ogni figlio box
                Container.removeChild(Container.firstChild);
            }
         
        }
        
    }
);