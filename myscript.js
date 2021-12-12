const container = document.getElementById( "container" );   // definiamo container
const titolo = document.querySelector( ".titolo" ).innerHTML = "FizzBuzzDOM"; // definiamo titolo

for ( let i = 1; i <= 100; i++ ){   // variabile cicli
    console.log(i);

    i != 0;
//let box = `<div class="box">` + i + `</div>`;   //variabile Box
//container.innerHTML += box; //far comparire box in container    

    if  (( i%3 == 0 ) && (i%5 == 0 )) { //divisibile per 3
        let box = `<div class="box red">` + i + `</div>`;   //variabile Box multiplo di 3 e 5
    } else if ( i%5 == 0 ) {
        let box = `<div class="box sun">` + i + `</div>`;   //variabile Box multiplo di 5
    } else if ( i%3 == 0 ) {
        let box = `<div class="box sea">` + i + `</div>`;   //variabile Box multipo di 3
    } else {
        let box = `<div class="box">` + i + `</div>`;   //variabile Box
        container.innerHTML += box; //far comparire box in container    
    }


}
