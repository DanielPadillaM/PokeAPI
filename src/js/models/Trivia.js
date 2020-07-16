import {createQuestion} from "../view/createQuestion"
export const triviaStart = document.querySelector('.pokemonTrivia__container');
export class Trivia {
    constructor(parent){
        const pokemonTrivia__title = document.createElement('h1')
        pokemonTrivia__title.classList.add("pokemonTrivia__title")
        pokemonTrivia__title.textContent= 'Bienvenido a la trivia Pokemon'
        const pokemonTrivia__text = document.createElement('p');
        pokemonTrivia__text.classList.add('pokemonTrivia__text')
        pokemonTrivia__text.textContent = "Puedes responder correctamente las siguientes preguntas?"
        const triviaButton = document.createElement('button');
        triviaButton.classList.add('pokemonTrivia__button');
        triviaButton.textContent= 'Iniciar Trivia Pokemon'
        triviaButton.addEventListener('click',()=>{
            triviaStart.remove();
            createQuestion('Cual de estos Pokemones es tipo Planta');
        })
        this.startButton = triviaButton
        parent.appendChild(pokemonTrivia__title)
        parent.appendChild(pokemonTrivia__text)
        parent.appendChild(triviaButton)
    }
}

