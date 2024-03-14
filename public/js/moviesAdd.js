window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    titulo.addEventListener('mouseover', function(){
        titulo.style.color = "red"
    })


    titulo.addEventListener('mouseout', function(){
        titulo.style.color = "black"
    })

    document.getElementById('titulo').addEventListener('keyup', (e) => {
        
    })
let estadoSecreto = 0;


    document.getElementById('titulo').addEventListener('keyup', (e) => {

        const input = e.key.toUpperCase() 
        estadoSecreto === 0 && input === "s" ? estadoSecreto = 1 : 
        estadoSecreto === 1 && input === "e" ? estadoSecreto = 2 : 
        estadoSecreto === 2 && input === "c" ? estadoSecreto = 3 : 
        estadoSecreto === 3 && input === "r" ? estadoSecreto = 4 : 
        estadoSecreto === 4 && input === "e" ? estadoSecreto = 5 : 
        estadoSecreto === 5 && input === "t" ? estadoSecreto = 6 : 
        estadoSecreto === 6 && input === "o" ? alert("SECRETO MÁGICO") : estadoSecreto = 0;

        
        console.log(estadoSecreto)
    })

}