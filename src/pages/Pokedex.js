import ContainerPoke from "../component/container/ContainerPoke";
import CardPokemon from "../component/cardPokemon/CardPokemon";
import '../component/container/container.css'
import useCallPokemones from "../hooks/useCallPokemones";


const Pokedex = () =>{
  const    [data, pokemones, setNamePokemon, nextUrl, btnBack, previustUrl] = useCallPokemones()
  
  console.log(data)
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