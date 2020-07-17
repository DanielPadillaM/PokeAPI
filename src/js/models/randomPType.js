import{Pokes} from "./Pokes"

export const randonNumber= (min, max)=> Math.round(Math.random() * (max - min) + min);

export const randomPokemonType = (pokemonTypeUrl)=>{
    return axios.get(pokemonTypeUrl)
    .then((pokemon)=>{
        const pokeIndex = pokemon.data.pokemon.length-1;
        const randomPokemon = randonNumber(0,pokeIndex)
        const randomUrl = pokemon.data.pokemon[randomPokemon].pokemon.url
        return axios.get(randomUrl)
        .then((pokemon)=>{
            const name = pokemon.data.name;
            const id = pokemon.data.id;
            const sprites = pokemon.data.sprites;
            const types = pokemon.data.types[0].type.name;
            return pokemon = new Pokes(name,id,sprites,types);
            
        })
    })
}