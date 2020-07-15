class Trivia {
    constructor(parent){
        const triviaButton = document.createElement('button');
        triviaButton.addEventListener('click',()=>{
            triviaStart.remove()
            typeQuestion('Cual de estos Pokemones es tipo Planta')
        })
        this.startButton = triviaButton
        parent.appendChild(triviaButton)
    }

}
const body = document.querySelector('.pokemonTrivia');
let primeraTrivia = new Trivia(body)
primeraTrivia.startButton
