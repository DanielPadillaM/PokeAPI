import {welcomeTitle,presentationButton,welcomeText} from './constBattle'
import {WRAPPER} from '../../mainBattle'
import {CreatePickArea} from './createPickArea'
import {getPokemon} from './getPokemons';
export class Presentacion {
    constructor(parent){
        const fragment = document.createDocumentFragment()
        const presentacionTittle= document.createElement('h1')
        presentacionTittle.classList.add('battle__tittle')
        presentacionTittle.textContent = welcomeTitle
        fragment.appendChild(presentacionTittle)
        const TEXT = document.createElement('p')
        TEXT.classList.add('welcome__text')
        TEXT.textContent = welcomeText
        fragment.appendChild(TEXT)
        const presentacionButton = document.createElement('button')
        presentacionButton.classList.add('battle__button')
        presentacionButton.textContent = presentationButton
        presentacionButton.addEventListener('click',()=>{
            const pokemonTrivia = document.querySelector('.pokemon__trivia');
            pokemonTrivia.remove();
            new CreatePickArea(WRAPPER)

        const pokemonSelect = document.querySelector('.pokemons');
        const IMAGE = document.querySelector('.re3')
// crea la vista del pokemon tomando su id y toma sus datos
        pokemonSelect.addEventListener('change',()=>{
        getPokemon(pokemonSelect.value)
        .then((pokemon)=>{
            let sprites = pokemon.sprites.front_default
            IMAGE.setAttribute('src',sprites)
        })
},);

        })

        fragment.appendChild(presentacionButton)
        parent.appendChild(fragment)
    }
}



