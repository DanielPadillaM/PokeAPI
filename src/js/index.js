import '../sass/main.scss';
import {CreateHeader} from './components/navBar/navBar';

const body = document.querySelector('body')
const mainHeader = new CreateHeader(body,'header','./trivia.html','Trivia');
// let pokemonOne = document.querySelector('.randomPokemon__one');
// let pokemonTwo = document.querySelector('.randomPokemon__two');
// let pokemonThree = document.querySelector('.randomPokemon__three');
// let container= document.querySelector('.randomPokemon');
// const Planta = 'https://pokeapi.co/api/v2/type/12';
// const Fire = 'https://pokeapi.co/api/v2/type/10';
// const water = 'https://pokeapi.co/api/v2/type/11';
// const random = (min,max)=> Math.round(Math.random()*(max-min)+min);

// //crear pokemon 
// class Pokemon{
//     constructor(name,image){
//         this.name = name
//         this.image = image
//     }
// }

// //consigue la url del pokemon aleatorio  pokemonTypeUrl(Planta)
// const getRandomPokemon =(p)=>{
//     return axios.get(p)
//         .then((res)=> {
//         let ranges = res.data.pokemon.length
//         let indexs = random(0,ranges)
//         return res.data.pokemon[indexs].pokemon.url
//     })
// }


// //consigue la info del pokemon     

// const getPokemonInfo = (e)=>{
//     const promise = new Promise(
//         (resolve)=>{
//             getRandomPokemon (e)
//             .then((e)=>{
//             axios.get(e)
//             .then((e)=>{
//             let info = e.data 
//             resolve(info)
//             })
//         })
//     })
// return promise
// } 

// // crea el objeto del pokemon
// const makePokemon = (e)=>{
//     const promis = new Promise(
//         (resolve)=>{
//             getPokemonInfo(e)
//         .then((e)=>{
//             let name = e.name
//             let image = e.sprites.front_default
//             let pokemonObjt = new Pokemon(name,image)
//             resolve(pokemonObjt)
//         })
//     })
//     return promis
// }

// //inserta los datos al html
// const insertPokemon = (e)=>{
//     makePokemon(e)
//     .then((e)=>{
//         let cajaP = document.createElement('div')
//     let imgtag = document.createElement('img')
//     imgtag.setAttribute('src',e.image)
//     cajaP.appendChild(imgtag)
//     let texto = document.createElement('p')
//     texto.textContent= `${e.name}` 
//     cajaP.classList.add('pokemon_1')
//     cajaP.appendChild(texto)
//     container.appendChild(cajaP)
//     })
// }

// //click event
//     container.addEventListener('click',(e)=>{
//         if(e.target === pokemonOne){
//             insertPokemon(Planta)
//             pokemonOne.remove()
//         }
//         else if(e.target === pokemonTwo){
//             pokemonTwo.remove()
//             insertPokemon(Fire)
//         }
//         else if(e.target === pokemonThree){
//             pokemonThree.remove()
//             insertPokemon(water)
//         }
        
//     })


//     //toma la generacion 
//     const getGen = (i)=>{
//         return axios.get(`https://pokeapi.co/api/v2/generation/${i}`)
//         .then((res)=>{

//             return res.data.pokemon_species
            
//         })
//     }








