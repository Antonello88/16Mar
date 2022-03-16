

// Primo esercizio 16 Marzo

const ul = document.querySelector("#dinamica");


const quotes = [

    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
]


// tramite button verrà visualizzata una citazione casuale per volta 

document.querySelector('button').addEventListener('click',()=> {
    const random = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes.map((element) => `<li>${element}</li>`);

    ul.innerHTML = quotes[random]; 
   
   
});
