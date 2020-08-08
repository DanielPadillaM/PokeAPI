import {CONGRATULATIONS,QUESTIONS} from '../../models/Trivia/triviaConst';
import {Pregunta} from './Pregunta';
import {Card} from '../card/card'

export const triviaBody = new Card('pokemon__trivia');

triviaBody.addEventListener('click',(event)=>{
    const questionTitle = document.querySelector('.question__title');
    
    if(event.target.classList.contains('re1') && questionTitle.textContent == QUESTIONS.one){
        new Pregunta(CONGRATULATIONS.one,QUESTIONS.two);
    }


    if (event.target.classList.contains('re2') && questionTitle.textContent == QUESTIONS.two){
        new Pregunta(CONGRATULATIONS.two,QUESTIONS.three)
    }

    if(event.target.classList.contains('re3') && questionTitle.textContent == QUESTIONS.three){
        new Pregunta (CONGRATULATIONS.three,QUESTIONS.one)
    }

})
