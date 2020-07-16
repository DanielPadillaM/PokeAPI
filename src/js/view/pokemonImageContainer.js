export const pokemonImageContainer= (className,img,imageClass)=>{
    let div = document.createElement('div')
    div.classList.add(className)
    let image = document.createElement('img')
    image.setAttribute('src',img)
    image.classList.add(imageClass)
    div.appendChild(image)
    return div
}