import {pickGene,generations} from './constBattle'
import {Select} from '../../components/createSelect'
import {PokemonOption} from './pokemonOption'
import {CreateButton} from '../../components/Button/CreateButton'
import {pokedexIndex} from './constBattle'
import {GenOption} from '../../components/createOption'
import {pokemonImageContainer} from '../../view/pokemonImageContainer';

let team = []

export class CreatePickArea{
    constructor(parent){
// se crea el contenedor de seleccion pokemon
        const createPickArea = document.createElement('div')
        createPickArea.classList.add('pokemon__trivia')
        const createPickAreaTittle = document.createElement('h1')
        createPickAreaTittle.classList.add('battle__tittle')
        createPickAreaTittle.textContent = pickGene
        createPickArea.appendChild(createPickAreaTittle)
//se agregan los selects
        new Select(createPickArea,'Elije una generacion','pickGen');
        new Select(createPickArea,'Selecciona un pokemon','pokemons');
        const generationSelect = createPickArea.querySelector('.pickGen');
        const pokemonSelect = createPickArea.querySelector('.pokemons');
        const MENSAJE = document.createElement('p')
        for(let generation of generations){
            new GenOption(generationSelect,generation,generation)
        }
        generationSelect.addEventListener('change',()=>{
            pokemonSelect.innerHTML = '';
            if(generationSelect.value == 'Gen1'){
                new PokemonOption(pokemonSelect,1,pokedexIndex.genOne)
            }
            else if(generationSelect.value == 'Gen2'){
                new PokemonOption(pokemonSelect,pokedexIndex.genOne,pokedexIndex.genTwo)
            }
            else if(generationSelect.value == 'Gen3'){
                new PokemonOption(pokemonSelect,pokedexIndex.genTwo,pokedexIndex.genThree)
            }
        })

        new CreateButton(createPickArea,'agregar al equipo','battle__button')
        const addButton = createPickArea.querySelector('.battle__button')
        addButton.addEventListener('click',()=>{
                if(team.length <= 5){
                team.push(pokemonSelect.value)
                console.log(team);
                }else{
                    MENSAJE.textContent= 'Ya seleccionaste tus 6 pokemons'
                    createPickArea.appendChild(MENSAJE)
                }
            })

        createPickArea.appendChild(pokemonImageContainer('pokemon','','re3'))
        parent.appendChild(createPickArea)
    }
}



