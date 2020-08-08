export class CreateButton{
    constructor(parent,buttonText,className){
        const genButton = document.createElement("button")
        genButton.textContent= buttonText;
        genButton.classList.add(className)
        parent.appendChild(genButton)
        
    }
}


