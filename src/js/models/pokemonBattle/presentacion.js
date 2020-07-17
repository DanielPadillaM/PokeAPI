const fragment = document.createDocumentFragment()
let presentacionTittle= document.createElement('h2')
presentacionTittle.classList.add('battleTittle')
presentacionTittle.textContent = 'Bienvenido a la batalla pokemon'
fragment.appendChild(presentacionTittle)
let presentacionButton = document.createElement('button')
presentacionButton.classList.add('battleButton')
presentacionButton.textContent = 'Iniciar reto'
fragment.appendChild(presentacionButton)
console.log(fragment)

