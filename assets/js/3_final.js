document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") 
        {cambiarColor('pink')} 
    else if (event.key === "s" || event.key === "S") 
        {cambiarColor('orange')} 
    else if (event.key === "d" || event.key === "D") 
        {cambiarColor('blue')}
    else if (event.key === "q" || event.key === "Q") 
        {agregarElemento('purple');} 
    else if (event.key === "w" || event.key === "W")
        {agregarElemento('grey');} 
    else if (event.key === "e" || event.key === "E") 
        {agregarElemento('brown'); }});

function cambiarColor(color) {
    let div = document.querySelector('#key')
    div.style.backgroundColor = color
}

function agregarElemento(color) {
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.border = '2px dashed black'
    nuevoElemento.style.backgroundColor = color
    document.body.appendChild(nuevoElemento)
}
