export const pokemonImageContainer= (className,img,imageClass)=>{
    const CONTAINER = document.createElement('div')
    CONTAINER.classList.add(className)
    const IMAGE = document.createElement('img')
    IMAGE.setAttribute('src',img)
    IMAGE.classList.add(imageClass)
    CONTAINER.appendChild(IMAGE)
    return CONTAINER
}