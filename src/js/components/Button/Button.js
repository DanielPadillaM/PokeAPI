export class Button {
    constructor(parent,links,buttonText){
        const link = document.createElement('a')
        link.setAttribute('href',links)
        const BUTTON = document.createElement('button')
        BUTTON.classList.add('PrimaryButton')
        BUTTON.textContent = buttonText
        link.appendChild(BUTTON)
        parent.appendChild(link)
    }
}