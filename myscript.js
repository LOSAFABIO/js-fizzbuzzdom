const container = document.getElementById( "container" );   // definiamo container

for ( let i = 1; i <= 100; i++ ){   // variabile cicli
    console.log(i);

    let box = `<div class="box">` + i + `</div>`;   //variabile Box

    container.innerHTML += box; //far comparire box in container
}
