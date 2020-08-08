import {CreateHeader} from './components/navBar/navBar';
import {Card} from './components/card/card';
import {TriviaStart} from './components/trivia/triviaStart';
import {createQuestion} from './view/Trivia/createQuestion';
import {QUESTIONS,BODY,WELCOME,WelcomeText,StartText} from './models/Trivia/triviaConst';


new CreateHeader(BODY,'header__trivia','./index.html','Index');
const HEADER = BODY.firstChild;
HEADER.insertAdjacentElement('afterEnd',new Card('wrapper'));
const WRAPPER = document.querySelector('.wrapper')
WRAPPER.appendChild(new Card('pokemon__trivia'))
export const pokemonTrivia = document.querySelector('.pokemon__trivia');
new TriviaStart(pokemonTrivia,WELCOME,WelcomeText,StartText)
createQuestion(QUESTIONS.one);




