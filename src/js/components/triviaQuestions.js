import {createQuestion} from '../view/createQuestion';
import {Pregunta} from '../models/Pregunta';

export const triviaContainer = document.querySelector('.pokemonTrivia');
triviaContainer.addEventListener('click',(event)=>{

    let questionTitle = document.querySelector('.pregunta1__title')
    if(event.target.classList.contains('re1') && questionTitle.textContent == 'Cual de estos Pokemones es tipo Planta'){
        let preguntaUno = new Pregunta("Muy bien respuesta correcta!, fue muy facil sigamos con la siguiente",'Cual de estos Pokemones es tipo Fuego');
    }
    else if (event.target.classList.contains('re2') && questionTitle.textContent == 'Cual de estos Pokemones es tipo Fuego'){
        let preguntaDos = new Pregunta("Genial podemos seguir con la proxima!","Cual de estos Pokemones es tipo Agua")
    }
    else if(event.target.classList.contains('re3') && questionTitle.textContent == "Cual de estos Pokemones es tipo Agua"){
        let preguntaTres = new Pregunta ("manejas bien los tipos veamos que sigue!","Cual de estos Pokemones es tipo Planta")
    }
})