const numKm = parseInt( prompt("Inserisci il numero di chilometri"));
const etaPasseggero = parseInt( prompt("Inserire l'età"));
const prezzoKm = 0.26;
const scontoMinorenni=0.15;
const scontoOver65=0.35;


if(isNaN(numKm)){   //controllo che sia un numero
    console.log(`non è stato inserito un valore numerico per il numero di chilometri`);
}
else if(numKm<0){   //controllo che il numero di chilometri non sia negativo    
    console.log(`il numero di Km non può essere negativo`);
}
else{               //passo ai controlli di età 
    if( isNaN( etaPasseggero)){     //controllo che sia un numero
        console.log(`non è stato inserito un valore numerico per l'età`);
    }
    else if(etaPasseggero<0){       //controllo che non sia negativo
        console.log(`l'età non può essere negativa`);
    } else {
        prezzoBiglietto=(numKm*prezzoKm).toFixed(2); //calcolo il prezzo a prescindere
        if(etaPasseggero<18){           //calcolo il prezzo scontato ai minori
            prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoMinorenni).toFixed(2);    //toFixed(num) metodo che arrotonda a num numeri decimali una variabile
            console.log(`totale tratta con sconto minorenni: ${prezzoBigliettoScontato} euro`);
        }
        else if(etaPasseggero>65){      //calcolo il prezzo scontato per gli over 65
            prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoOver65).toFixed(2);
            console.log(`totale tratta con sconto over 65: ${prezzoBigliettoScontato} euro`);
        }
        else{                           //calcolo il prezzo del biglietto intero
            console.log(`totale biglietto intero: ${prezzoBiglietto} euro`);
        }
            
        
        
    }
}