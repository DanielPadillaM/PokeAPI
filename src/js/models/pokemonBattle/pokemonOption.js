import {getPokemon} from './getPokemons';

export class PokemonOption {
    constructor(parent,start,end){
        const FRAGMENT = document.createDocumentFragment()
        for(let i =start; i <= end ; i++){
            getPokemon(i)
            .then((pokemon)=>{
                let option = document.createElement('option')
                option.setAttribute('value',pokemon.id)
                option.textContent = pokemon.name
                FRAGMENT.appendChild(option)
                parent.appendChild(FRAGMENT)
            })
        }
        
    }
}


