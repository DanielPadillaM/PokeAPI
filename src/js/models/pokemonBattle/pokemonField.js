export const createPokemonfield = ()=>{
    const PokemonField = document.createElement('div')
    PokemonField.classList.add('pokemonField')
    const body = document.querySelector('.battle')
    body.appendChild(PokemonField)
}
