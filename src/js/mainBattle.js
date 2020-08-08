import {CreateHeader} from './components/navBar/navBar';
import {Card} from './components/card/card';
import {Presentacion} from './models/pokemonBattle/presentacion'


const BODY = document.querySelector('body')
new CreateHeader(BODY,'header__trivia','./index.html','Index');
const HEADER = BODY.firstChild;
HEADER.insertAdjacentElement('afterEnd',new Card('wrapper'));
export const WRAPPER = document.querySelector('.wrapper');
WRAPPER.appendChild(new Card('pokemon__trivia'))
export const pokemonTrivia = document.querySelector('.pokemon__trivia');
new Presentacion(pokemonTrivia)
