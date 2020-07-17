import {QUESTIONS} from '../models/questions';
import {CONGRATULATIONS} from '../models/congratulations';
import {Pregunta} from '../models/Pregunta';

export const triviaContainer = document.querySelector('.pokemonTrivia');
triviaContainer.addEventListener('click',(event)=>{

    let questionTitle = document.querySelector('.pregunta1__title')
    if(event.target.classList.contains('re1') && questionTitle.textContent == QUESTIONS.one){
        new Pregunta(CONGRATULATIONS.one,QUESTIONS.two);
    }
    else if (event.target.classList.contains('re2') && questionTitle.textContent == QUESTIONS.two){
        new Pregunta(CONGRATULATIONS.two,QUESTIONS.three)
    }
    else if(event.target.classList.contains('re3') && questionTitle.textContent == QUESTIONS.three){
        new Pregunta (CONGRATULATIONS.three,QUESTIONS.one)
    }
})