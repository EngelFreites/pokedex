import { useEffect, useState, useCallback } from "react";
import ContainerPoke from "./ContainerPoke";
import CardPokemon from "./CardPokemon";
import './container.css'
import './btn.css'
import LigthBox from "./LigthBox";

const Pokedex = () =>{
  const [pokemones, setPokemones] = useState([])
  const [btnNext, setBtnNext] = useState('')
  const [btnBack, setBtnBack] = useState(null)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon') 
  const [namePokemon, setNamePokemon] = useState('')

  const nextUrl = () =>{
    setPokemones([])
    setUrl(btnNext)
    window.scroll(0,0)
  }

  const previustUrl = () =>{
    if(btnBack === 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'){
      setPokemones([])
      setUrl(btnBack)
      window.scroll(0,0)
      setBtnBack(null)
    }else{
      setPokemones([])
      setUrl(btnBack)
      window.scroll(0,0)
    }
  }

  const firstResult =   useCallback(async()=>{
    const res =await fetch(url)
    const dat = await res.json()
    getPokemon(dat.results)
    setBtnNext(dat.next)
    if(dat.previous != null){
      setBtnBack(dat.previous)
    }
  },[url])
  
  const getPokemon = (array) => {
    array.map( async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const dat = await res.json()
      setPokemones( state =>
        [...state, dat].sort((a,b)=> a.id>b.id?1:-1)
      )
      
    });
   
  }

  useEffect(() =>{
    firstResult()
  },[firstResult])
  
  return(
    <ContainerPoke>
      {
        pokemones.map(pokemon =>(
    
          <CardPokemon 
            key={pokemon.id}
            namePokemon={pokemon.name} 
            imgPokemon={pokemon.sprites.front_default} 
            typePokemon={pokemon.types[0].type.name}
            baseHp={pokemon.stats[0].base_stat}
            baseAttack={pokemon.stats[1].base_stat} 
            baseDeffense={pokemon.stats[2].base_stat} 
            getName={setNamePokemon}        
          >
            
          </CardPokemon>
        
        ))
      }
      <button className="btn-ntx btn" onClick={nextUrl}>Next</button>
      
      {
        btnBack === null 
        ? null
        : <button className="btn-bck btn" onClick={previustUrl}>Back</button>
      }   
    </ContainerPoke>
  )
}

export default Pokedex