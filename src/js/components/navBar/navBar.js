import { Button } from '../Button/Button';
const navLinks = ['About','Games','Careers','Forums','Contact']

export class CreateHeader {
    constructor(parent,className,link,buttonText){
        const HEADER = document.createElement('header')
        HEADER.classList.add(className)
        const CONTAINER = document.createElement('div')
        CONTAINER.classList.add('header__container') 
        const LOGO = document.createElement('img')
        LOGO.src = 'https://image.flaticon.com/icons/svg/287/287221.svg'
        LOGO.classList.add('logo')
        const NAV = document.createElement('nav')
        const navList = document.createElement('ul')
        navList.classList.add('list')
        navLinks.map((items)=>{
            const fragment = document.createDocumentFragment()
            const navItem = document.createElement('li')
            const navLink = document.createElement('a')
            navLink.textContent= items
            navItem.appendChild(navLink)
            fragment.appendChild(navItem)
            navList.appendChild(fragment)
        })
        NAV.appendChild(navList)
        new Button(NAV,link,buttonText)
        CONTAINER.appendChild(LOGO)
        CONTAINER.appendChild(NAV)
        HEADER.appendChild(CONTAINER)
        parent.prepend(HEADER)
    }
}




