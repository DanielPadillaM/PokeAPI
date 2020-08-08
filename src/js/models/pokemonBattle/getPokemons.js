import {Pokes} from '../Pokes';
export const getPokemon = (id)=>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((pokemons)=>{
        const NAME = pokemons.data.name;
        const SPRITES = pokemons.data.sprites
        const ID = pokemons.data.id
        const TYPES = pokemons.data.types
        const MOVES = pokemons.data.moves
        const STATS = pokemons.data.stats
        const POKEMON = new Pokes(NAME,ID,SPRITES,TYPES,MOVES,STATS)
        return POKEMON
    })
}

