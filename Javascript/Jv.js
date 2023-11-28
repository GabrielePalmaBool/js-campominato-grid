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

var num = 0;

const MaxSquare = 100;


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",

    function () {
    
        for(let i = 0 ; i < MaxSquare; i++){

            num++;

            //chiamo funzione per la creazione dei blocchi
            const mySquare = crateSquare("div","Box");

            //aggiungo un evento ai miei blocchi
            mySquare.addEventListener ("click", 

            function () {

                    //aggiungo la classe desiderata
                    mySquare.classList.add("onclick");
                }

            );
        
            //inserisco ogni blocco all'inerno del mio container
            Container.append(mySquare);

        }
        
    }
);

//funzione per il popolamento automatico del mio container
function crateSquare(val1,val2) {


    //Creo l'elemento all'interno del mio file html
    const square = document.createElement (val1);

    //Creo l'elemento all'interno del mio file html
    const number = document.createElement ("h1");

    //inserisco scritta all'interno del mio contenuto
    number.append(num);

    square.append(number);
    
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
       
        num = 0;
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