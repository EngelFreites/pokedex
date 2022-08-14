import './cardPokemon.css'
import './elementPokemon.css'
import '../container/container.css'

const CardPokemon = ({getPokemon,state, action, pokemon }) =>{

  const upName = pokemon.name.toUpperCase()
  console.log(pokemon.types[0].type.name)

  return(
      <div className="card-pokemon" onClick={() =>{
        getPokemon(pokemon)
        action(!state)
      }}>

      <div className={`container-element ${pokemon.types[0].type.name}`} >
        <div className='header-card'>
          <p>{upName}</p>
        </div>
        <img className='img-poke' src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      </div>
      <div className='container-descrip'>
        <div className='descrip'>
          <div><h5>HP</h5><p>{pokemon.stats[0].base_stat}</p></div>
          <div><h5>ATK</h5><p>{pokemon.stats[1].base_stat}</p></div>
          <div><h5>DEF</h5><p>{pokemon.stats[2].base_stat}</p></div>
        </div>
      </div>

    </div>
    
    
  )
}

export default CardPokemon
