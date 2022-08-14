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
      <ContainerPoke show={show} >
        {
          pokemones.map(pokemon =>(
            <CardPokemon 
              key={pokemon.id}
              state={show} 
              action={setShow}
              getPokemon={setInfoPokemon}
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