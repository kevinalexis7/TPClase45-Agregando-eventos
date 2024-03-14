const qs = (selector) => document.querySelector(selector)


window.onload = function(){
    //JavaScript del Index
    let container = qs('.container');
    let subtitulo = qs('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = qs('body');
    let enlace = qs('a');
    
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';


    /* Consignas nuevas */
    const logoDH = document.querySelector('.logoDH');
    const $ = (id) => document.getElementById(id)

    /* logoDH.onclick = function(){
        document.getElementById("menu").classList.toggle('mostrar')
    } */

    logoDH.addEventListener('click',()=>{
        $("menu").classList.toggle('mostrar')
    });

    $('menu').addEventListener('mouseleave', () => {
        $('menu').classList.remove('mostrar')
    })

}