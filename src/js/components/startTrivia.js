import {createQuestion} from '../view/createQuestion';
import {Pokes} from '../models/Pokes';
import {triviaStart} from '../models/Trivia';
import {Trivia} from '../models/Trivia';
import {Pregunta} from '../models/Pregunta';
import {URL} from '../models/URL';
import {randonNumber} from '../models/randomPType';
import {randomPokemonType} from '../models/randomPType';
import {pokemonImageContainer} from '../view/pokemonImageContainer';
import {triviaContainer} from './triviaQuestions';

//Evento de inicio de la trivia
export let startTrivia = new Trivia(triviaStart)