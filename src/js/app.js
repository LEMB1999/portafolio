const typed = new Typed('.typed',{
    strings:[
        'Soy Desarollador web ',
        'Apasionado por el aprendizaje '
    ],    
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: null, // 'html' o 'null' para texto sin formato
});


document.addEventListener('DOMContentLoaded',()=>{
    navegacionFija();
    scrollNav();
    mostarInfo();
    mostrarNavegacionMovil();
})

function mostrarNavegacionMovil(){
    const menu = document.querySelector(".menu")
    const boton = document.querySelector(".boton-toggle")

    boton.addEventListener("click",()=>{
        menu.classList.toggle("mostrar")

        if(boton.classList.contains("fa-bars")){
            boton.classList.remove("fa-bars")
            boton.classList.add("fa-times")
        }else{
            boton.classList.remove("fa-times")
            boton.classList.add("fa-bars")
        }

    })

}


function mostarInfo(){
    const elementos = document.querySelectorAll(".contactos div");
    
    for(let i = 0; i < 2 ; i++ ){
        
        elementos[i].addEventListener("mouseout",()=>{
            elementos[i].firstElementChild.style.visibility = "hidden";
            elementos[i].firstElementChild.style.opacity = "0";
        })


        elementos[i].addEventListener("mouseover",()=>{
            elementos[i].firstElementChild.style.visibility = "visible";
            elementos[i].firstElementChild.style.opacity = "1";
        })




    }

}


function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion a')

    enlaces.forEach( element =>{
       element.addEventListener("click",(event)=>{
           event.preventDefault();

           const seccion = document.querySelector(event.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: "smooth"
            });
       })
    })

}

function navegacionFija(){
 
    const barra = document.querySelector('.navegacion');
    //Registrar el Intersection Observer
    const observer = new IntersectionObserver(function(entries){
           if(entries[0].isIntersecting){
                 barra.classList.remove('fijo'); 
           }else{
                barra.classList.add('fijo'); 
           }
    })

    //Elemento  a observar
    observer.observe(document.querySelector('.texto-escritura'));

}