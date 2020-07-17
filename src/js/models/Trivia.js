import {createQuestion} from "../view/createQuestion"
import {QUESTIONS} from './questions'
import {WELCOME} from './triviaConst'
import {WelcomeText} from './triviaConst'
import {StartText} from './triviaConst'
export const triviaStart = document.querySelector('.pokemonTrivia__container');
export class Trivia {
    constructor(parent){
        const pokemonTriviaTitle = document.createElement('h1')
        pokemonTriviaTitle.classList.add("pokemonTrivia__title")
        pokemonTriviaTitle.textContent= WELCOME
        const pokemonTriviaText = document.createElement('p');
        pokemonTriviaText.classList.add('pokemonTrivia__text')
        pokemonTriviaText.textContent = WelcomeText
        const triviaButton = document.createElement('button');
        triviaButton.classList.add('pokemonTrivia__button');
        triviaButton.textContent= StartText
        triviaButton.addEventListener('click',()=>{
            triviaStart.remove();
            createQuestion(QUESTIONS.one);
        })
        this.startButton = triviaButton
        parent.appendChild(pokemonTriviaTitle)
        parent.appendChild(pokemonTriviaText)
        parent.appendChild(triviaButton)
    }
}

