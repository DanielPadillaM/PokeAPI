import '../sass/main.scss';
import {Pokes} from './models/Pokemons';


let pokemonOne = document.querySelector('.randomPokemon__one');
let pokemonTwo = document.querySelector('.randomPokemon__two');
let pokemonThree = document.querySelector('.randomPokemon__three');
let container= document.querySelector('.randomPokemon');
const Planta = 'https://pokeapi.co/api/v2/type/12';
const Fire = 'https://pokeapi.co/api/v2/type/10';
const water = 'https://pokeapi.co/api/v2/type/11';
const random = (min,max)=> Math.round(Math.random()*(max-min)+min);

//crear pokemon 
class Pokemon{
    constructor(name,image){
        this.name = name
        this.image = image
    }
}

//consigue la url del pokemon aleatorio  pokemonTypeUrl(Planta)
const getRandomPokemon =(p)=>{
    return axios.get(p)
        .then((res)=> {
        let ranges = res.data.pokemon.length
        let indexs = random(0,ranges)
        return res.data.pokemon[indexs].pokemon.url
    })
}


//consigue la info del pokemon     

const getPokemonInfo = (e)=>{
    const promise = new Promise(
        (resolve)=>{
            getRandomPokemon (e)
            .then((e)=>{
            axios.get(e)
            .then((e)=>{
            let info = e.data 
            resolve(info)
            })
        })
    })
return promise
} 

// crea el objeto del pokemon
const makePokemon = (e)=>{
    const promis = new Promise(
        (resolve)=>{
            getPokemonInfo(e)
        .then((e)=>{
            let name = e.name
            let image = e.sprites.front_default
            let pokemonObjt = new Pokemon(name,image)
            resolve(pokemonObjt)
        })
    })
    return promis
}

//inserta los datos al html
const insertPokemon = (e)=>{
    makePokemon(e)
    .then((e)=>{
        let cajaP = document.createElement('div')
    let imgtag = document.createElement('img')
    imgtag.setAttribute('src',e.image)
    cajaP.appendChild(imgtag)
    let texto = document.createElement('p')
    texto.textContent= `${e.name}` 
    cajaP.classList.add('pokemon_1')
    cajaP.appendChild(texto)
    container.appendChild(cajaP)
    })
}

//click event
    container.addEventListener('click',(e)=>{
        if(e.target === pokemonOne){
            insertPokemon(Planta)
            pokemonOne.remove()
        }
        else if(e.target === pokemonTwo){
            pokemonTwo.remove()
            insertPokemon(Fire)
        }
        else if(e.target === pokemonThree){
            pokemonThree.remove()
            insertPokemon(water)
        }
        
    })


    //toma la generacion 
    const getGen = (i)=>{
        return axios.get(`https://pokeapi.co/api/v2/generation/${i}`)
        .then((res)=>{

            return res.data.pokemon_species
            
        })
    }

    const creategroup = ()=>{
        axios.get('https://pokeapi.co/api/v2/generation')
        .then((res)=>{
            console.log(res)
            let optionGroup = document.createElement('optgroup')
            let genga = document.getElementById('genga')
            const frag = document.createDocumentFragment()
            const nam = res.data.results
            console.log(res)
            for(res of nam){
            let htt = res.url
            switch (htt) {
                case "https://pokeapi.co/api/v2/generation/1/":
                        optionGroup.setAttribute('label',`${res.name}`)
                        optionGroup.classList.add('g1')
                        frag.appendChild(optionGroup)
                        getGen(1)
                        .then((e)=>{
                            let label = document.querySelector('.g1')
                            let array = e
                            let arrays
                                for(arrays of array){
                                let opp= document.createElement('option')
                                let pokemonName= arrays.name 
                                opp.textContent=pokemonName
                                label.appendChild(opp)
                            }
                        })

                    break;
                case "https://pokeapi.co/api/v2/generation/2/":
                    let optionGroup2 = document.createElement('optgroup')
                    optionGroup2.setAttribute('label',`${res.name}`)
                    optionGroup2.classList.add('g2')
                        frag.appendChild(optionGroup2)
                        getGen(2)
                        .then((e)=>{
                            let label2 = document.querySelector('.g2')
                            let array = e
                            let arrays
                                for(arrays of array){
                                let opp2= document.createElement('option')
                                let pokemonName= arrays.name 
                                opp2.textContent=pokemonName
                                label2.appendChild(opp2)
                            }
                        })
                    break;

                case "https://pokeapi.co/api/v2/generation/3/":
                    let optionGroup3 = document.createElement('optgroup')
                    optionGroup3.setAttribute('label',`${res.name}`)
                    optionGroup3.classList.add('g3')
                        frag.appendChild(optionGroup3)
                        getGen(3)
                        .then((e)=>{
                            let label3 = document.querySelector('.g3')
                            let array = e
                            let arrays
                                for(arrays of array){
                                let opp3= document.createElement('option')
                                let pokemonName= arrays.name 
                                opp3.textContent=pokemonName
                                label3.appendChild(opp3)
                            }
                        })
                    break;

                default:
                    break;
            }
            }

            genga.appendChild(frag)
           
        })
    }
    
creategroup()

// constructor de pokemones

//obtener numero random
const randonNumber= (min, max)=> Math.round(Math.random() * (max - min) + min);

//trivia variables
const triviaContainer = document.querySelector('.pokemonTrivia');
const URL = {
    fireType : 'https://pokeapi.co/api/v2/type/10/',
    grassType : "https://pokeapi.co/api/v2/type/12/",
    waterType : "https://pokeapi.co/api/v2/type/11/"
}

const triviaButton = document.querySelector('.pokemonTrivia__button');
const triviaStart = document.querySelector('.pokemonTrivia__container');

//Obtener pokemon random con url de tipo
const randomPokemonType = (e)=>{
    return axios.get(e)
    .then((e)=>{
        const pokeIndex = e.data.pokemon.length-1;
        const randomPokemon = randonNumber(0,pokeIndex)
        const randomUrl = e.data.pokemon[randomPokemon].pokemon.url
        return axios.get(randomUrl)
        .then((res)=>{
            let pokemon
            const name = res.data.name;
            const id = res.data.id;
            const sprites = res.data.sprites;
            const types = res.data.types[0].type.name;
            return pokemon = new Pokes(name,id,sprites,types);
        })
    })
}


//poke preguntas

const createPoke= (className,img,e)=>{
    let div = document.createElement('div')
    div.classList.add(className)
    let image = document.createElement('img')
    image.setAttribute('src',img)
    image.classList.add(e)
    div.appendChild(image)
    return div
}

// preguntas
const typeQuestion = (e)=>{
    const question = document.createElement('div')
    question.classList.add('pregunta1')
    const questionTitle = document.createElement('h2')
    const answer = document.createElement('p')
    answer.classList.add('respuesta')
    questionTitle.classList.add('pregunta1__title')
    questionTitle.textContent= e
    question.appendChild(questionTitle)
    question.appendChild(answer)

    randomPokemonType(URL.fireType)
    .then((e)=>{
    let sprites = e.sprites.front_default
    question.appendChild(createPoke('pokemon1',sprites,'re2'))
    })

    randomPokemonType(URL.grassType)
    .then((e)=>{
        let sprites = e.sprites.front_default
        question.appendChild(createPoke('pokemon2',sprites,'re1'))
        })
        randomPokemonType(URL.waterType)
    .then((e)=>{
        let sprites = e.sprites.front_default
        question.appendChild(createPoke('pokemon3',sprites,'re3'))
        })
        triviaContainer.appendChild(question)
}

// eventos click
triviaButton.addEventListener('click',()=>{
    triviaStart.remove()
    typeQuestion('Cual de estos Pokemones es tipo Planta')
})


triviaContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('re1')){
    let result = document.querySelector('.respuesta')
    result.textContent="Muy bien respuesta correcta!, fue muy facil sigamos con la siguiente"
    result.addEventListener('click',()=>{
        let a = document.querySelector('.pregunta1')
        a.remove()
        typeQuestion('Cual de estos Pokemones es tipo Fuego')
    })
    }
    else if (e.target.classList.contains('re2')){
        let result = document.querySelector('.respuesta')
        result.textContent="Genial podemos seguir con la proxima!"
        result.addEventListener('click',()=>{
            let a = document.querySelector('.pregunta1')
            a.remove()
            typeQuestion('Cual de estos Pokemones es tipo Agua')
        })
    }
    else if(e.target.classList.contains('re3')){
        let result = document.querySelector('.respuesta')
        result.textContent="manejas bien los tipos veamos que sigue!"
        result.addEventListener('click',()=>{
            let a = document.querySelector('.pregunta1')
            a.remove()
        })
    }
})

