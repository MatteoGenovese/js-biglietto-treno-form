let prezzoBigliettoScontato=0;
let prezzoBiglietto=0;
const prezzoKm = 0.26;
const scontoMinorenni=0.15;
const scontoOver65=0.35;

var submitButton= document.getElementById(`submit-button`);
submitButton.addEventListener(`click`,
    function(){

        document.getElementById('your-name').innerHTML=`Name:`;
        document.getElementById('show-price').innerHTML=`Price:`;
        document.getElementById('km-counted').innerHTML=`km-counted:`;
        document.getElementById('ticket-type-2').innerHTML=`ticket-type:`;

        document.getElementById('show-message').innerHTML=``;
        let numKm = document.querySelector(`#km-num-input`).value;
        let ticketType = parseInt( document.querySelector(`#ticket-type`).value);
        let userName = document.querySelector(`#insert-name`).value;
        let userTicket = document.getElementById(`your-ticket`);
        let messageForUser = document.getElementById(`show-message`);


        // console.log(typeof ticketType);

        if(numKm==0){   //controllo che sia un numero
            messageForUser.classList.remove(`visually-hidden`);
            document.getElementById('show-message').innerHTML=`non è stato inserito un valore numerico per il numero di chilometri`;

            
        }
        else if(numKm<0){   //controllo che il numero di chilometri non sia negativo    
            messageForUser.classList.remove(`visually-hidden`);
            document.getElementById('show-message').innerHTML=`il numero di Km non può essere negativo`;
        
            
        }
        else{               
            switch(ticketType) {
                case 0:
                    // code block
                    messageForUser.classList.remove(`visually-hidden`);
                    document.getElementById('show-message').innerHTML=`Selezionare la tipologia di biglietto`;
                    
                    break;
                case 1:
                  // code block
                    prezzoBiglietto=prezzoKm*numKm;
                    prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoMinorenni).toFixed(2);    //toFixed(num) metodo che arrotonda a num numeri decimali una variabile
                    userTicket.classList.remove(`visually-hidden`);


                    document.getElementById('your-name').innerHTML+=` ${userName}`;
                    document.getElementById('show-price').innerHTML+=` ${prezzoBigliettoScontato}`;
                    document.getElementById('km-counted').innerHTML+=` ${numKm}`;
                    document.getElementById('ticket-type-2').innerHTML+=` Minorenne`;
                    break;

                case 2:
                    prezzoBiglietto=(numKm*prezzoKm).toFixed(2); //calcolo il prezzo a prescindere

                    userTicket.classList.remove(`visually-hidden`);


                    document.getElementById('your-name').innerHTML+=` ${userName}`;
                    document.getElementById('show-price').innerHTML+=` ${prezzoBiglietto}`;
                    document.getElementById('km-counted').innerHTML+=` ${numKm}`;
                    document.getElementById('ticket-type-2').innerHTML+=` Intero`;
                    
                    break;
                case 3:
                  // code block
                    prezzoBiglietto=prezzoKm*numKm;
                    prezzoBigliettoScontato = (prezzoBiglietto - prezzoBiglietto*scontoOver65).toFixed(2);

                    userTicket.classList.remove(`visually-hidden`);

                    document.getElementById('your-name').innerHTML+=` ${userName}`;
                    document.getElementById('show-price').innerHTML+=` ${prezzoBigliettoScontato}`;
                    document.getElementById('km-counted').innerHTML+=` ${numKm}`;
                    document.getElementById('ticket-type-2').innerHTML+=` Over 65`;
                    break;
            }
        }
    }
)