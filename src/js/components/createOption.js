export class GenOption {
    constructor(parent,value,text){
        const genOption = document.createElement('option')
        genOption.setAttribute('value',value)
        genOption.textContent = text
        parent.appendChild(genOption)
    }
}