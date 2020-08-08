import {createQuestion} from "../../view/Trivia/createQuestion"
export class Pregunta {
    constructor(answer,questions){
        const ANSWER = document.querySelector('.answer')
        ANSWER.textContent= answer
        ANSWER.addEventListener('click',()=>{
            const QUESTION = document.querySelector('.question')
            QUESTION.remove()
            createQuestion(questions)
        })
    }
}
