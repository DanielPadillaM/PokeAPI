import {createQuestion} from "../view/createQuestion"
export class Pregunta {
    constructor(respuesta,questions){
        let result = document.querySelector('.respuesta')
        result.textContent= respuesta
        result.addEventListener('click',()=>{
            let question = document.querySelector('.pregunta1')
            question.remove()
            createQuestion(questions)
        })
        return result
    }
}
