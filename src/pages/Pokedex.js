import { useState } from "react";
import ContainerPoke from "../component/container/ContainerPoke";
import CardPokemon from "../component/cardPokemon/CardPokemon";
import '../component/container/container.css'
import useCallPokemones from "../hooks/useCallPokemones";
import LigthBox from "../component/ligthBox/LigthBox";


const Pokedex = () =>{
  const [data, pokemones, setInfoPokemon, nextUrl, btnBack, previustUrl, infoPokemon] = useCallPokemones()
  const [show, setShow] = useState(false)
  return(
  <div>
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
            getName={setInfoPokemon}
            state={show} 
            action={setShow}
            pokemon={pokemon}
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
    {
      show 
      ? <LigthBox state={show} action={setShow} info={infoPokemon}/>
      : null
    }
  
  </div> 
  )
}

export default Pokedex