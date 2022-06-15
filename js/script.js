let numKm = NaN;
let etaPasseggero =  NaN;
const prezzoKm = 0.26;
const scontoMinorenni=0.15;
const scontoOver65=0.35;

var submitButton= document.getElementById(`submit-button`);

submitButton.addEventListener(`click`,
    function(){
        let numKm = document.querySelector(`#km-num-input`).value;
        let etaPasseggero =  document.querySelector(`#age-input`).value;

        if(isNaN(numKm)){   //controllo che sia un numero
            document.getElementById('show-price').innerHTML=`non è stato inserito un valore numerico per il numero di chilometri`;
        }
        else if(numKm<0){   //controllo che il numero di chilometri non sia negativo    
            document.getElementById('show-price').innerHTML=`il numero di Km non può essere negativo`;
        }
        else{               //passo ai controlli di età 
            if( isNaN( etaPasseggero)){     //controllo che sia un numero
                document.getElementById('show-price').innerHTML=`non è stato inserito un valore numerico per l'età`;
            }
            else if(etaPasseggero<0){       //controllo che non sia negativo
                document.getElementById('show-price').innerHTML=`l'età non può essere negativa`;
            } else {
                prezzoBiglietto=(numKm*prezzoKm).toFixed(2); //calcolo il prezzo a prescindere
                if(etaPasseggero<18){           //calcolo il prezzo scontato ai minori
                    prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoMinorenni).toFixed(2);    //toFixed(num) metodo che arrotonda a num numeri decimali una variabile
                    document.getElementById('show-price').innerHTML=`totale tratta con sconto minorenni: ${prezzoBigliettoScontato} euro`;
                }
                else if(etaPasseggero>65){      //calcolo il prezzo scontato per gli over 65
                    prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoOver65).toFixed(2);
                    document.getElementById('show-price').innerHTML=`totale tratta con sconto over 65: ${prezzoBigliettoScontato} euro`;
                }
                else{                           //calcolo il prezzo del biglietto intero
                    document.getElementById('show-price').innerHTML=`totale biglietto intero: ${prezzoBiglietto} euro`;
                }
                    
                
                
            }
        }
    }
)


