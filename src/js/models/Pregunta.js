import {createQuestion} from "../view/createQuestion"
export class Pregunta {
    constructor(answer,questions){
        const RESULT = document.querySelector('.respuesta')
        RESULT.textContent= answer
        RESULT.addEventListener('click',()=>{
            let question = document.querySelector('.pregunta1')
            question.remove()
            createQuestion(questions)
        })
        return RESULT
    }
}
