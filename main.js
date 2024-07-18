

window.onload = function(){

    let body = document.querySelector("body")
    
    let appDiv = document.querySelector("#app")

    body.style.backgroundColor = "blue";

    body.style.display = 'flex'
    body.style.flexDirection = 'column'
    body.style.justifyContent = 'center'
    body.style.height = '100vh'
    body.style.alignItems = 'center'

    document.querySelector("body").style.backgroundColor = 'orange';

    let btn = document.createElement("button");

    btn.id = 'background-el'

    btn.classList = "btn btn-success"

    btn.innerText = 'Change Background'

    //appDiv.appendChild(btn)

    let imClickInput = function(evento){
        console.log('Epa so el onclick de el input 🧡 ' + evento.target.value)
    }


    for(let i = 0; i <= 10; i++){
        let input = document.createElement("input");
        input.id = 'input-'+i;
        input.value  = 'Input #'+i;

        input.onclick = imClickInput

        appDiv.appendChild(input) 
    }




    console.log(body.onclick)


    console.log(body.onclick)
    

    btn.addEventListener('click', (clickEvent) => {

        body.style.backgroundColor = 'pink';

        console.log('Click en el button 🖤', clickEvent)

        clickEvent.target.parentElement.parentElement.style.backgroundColor = 'slateblue'

    })

    // clickEvent undefined

}