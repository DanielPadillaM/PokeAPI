import {pokemonTrivia} from '../../mainTrivia'
import {triviaBody} from './triviaBody'
import {CreateButton} from '../Button/CreateButton'

export class TriviaStart {
    constructor(parent,title,text,buttonText){
        const pokemonTriviaTitle = document.createElement('h1')
        pokemonTriviaTitle.classList.add("pokemonTrivia__title")
        pokemonTriviaTitle.textContent= title
        const pokemonTriviaText = document.createElement('p');
        pokemonTriviaText.classList.add('pokemonTrivia__text')
        pokemonTriviaText.textContent = text
        parent.appendChild(pokemonTriviaTitle)
        parent.appendChild(pokemonTriviaText)
        new CreateButton(parent,buttonText,'pokemonTrivia__button')
        const triviaButton = document.querySelector('.pokemonTrivia__button')
        
        triviaButton.addEventListener('click',()=>{
            pokemonTrivia.remove();
            const WRAPPER = document.querySelector('.wrapper')
            WRAPPER.appendChild(triviaBody)
        })
    }
}