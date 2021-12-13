const container = document.getElementById( "container" );   // definiamo container
const titolo = document.querySelector( ".titolo" ).innerHTML = "FizzBuzzDOM"; // definiamo titolo

for ( let i = 1; i <= 100; i++ ){   // variabile cicli
    console.log(i);

    if  (( i%3 == 0 ) && (i%5 == 0 )) { //divisibile per 3 e 5
    
        container.innerHTML += `<div class="box red"> FizzBuzz </div>`; //far comparire box Rosso in container    

    } else if ( i%5 == 0 ) { //divisibile per 5
        
        container.innerHTML += `<div class="box sun"> Buzz </div>`; //far comparire box Giallo in container    

    } else if ( i%3 == 0 ) { //divisibile per 3 
        
        container.innerHTML += `<div class="box sea"> Fizz </div>`; //far comparire box Celeste in container    

    } else { //altrimenti numero

        container.innerHTML += `<div class="box"> + i + </div>`; //far comparire box Azzurro in container    
        
    }

}
