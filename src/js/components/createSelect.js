export class Select {
    constructor(parent,text,className){
        const LABEL = document.createElement('label')
        LABEL.textContent = text
        const chooseGen = document.createElement('select')
        chooseGen.classList.add(className)
        LABEL.appendChild(chooseGen)
        parent.appendChild(LABEL)
    }
}



