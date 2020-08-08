import {pokemonImageContainer} from '../pokemonImageContainer';
import {URL} from '../../models/URL';
import {randomPokemonType} from '../../models/randomPType'
import {triviaBody} from '../../components/trivia/triviaBody';

export const createQuestion = (title)=>{
    const question = document.createElement('div')
    question.classList.add('question')
    const questionTitle = document.createElement('h2')
    const answer = document.createElement('p')
    answer.classList.add('answer')
    questionTitle.classList.add('question__title')
    questionTitle.textContent= title
    question.appendChild(questionTitle)
    question.appendChild(answer)

    randomPokemonType(URL.fireType)
    .then((pokemon)=>{
    let sprites = pokemon.sprites.front_default
    question.appendChild(pokemonImageContainer('pokemon1',sprites,'re2'))
    })

    randomPokemonType(URL.grassType)
    .then((pokemon)=>{
        let sprites = pokemon.sprites.front_default
        question.appendChild(pokemonImageContainer('pokemon2',sprites,'re1'))
        })
        randomPokemonType(URL.waterType)
    .then((pokemon)=>{
        let sprites = pokemon.sprites.front_default
        question.appendChild(pokemonImageContainer('pokemon3',sprites,'re3'))
        })
        triviaBody.appendChild(question)
}


