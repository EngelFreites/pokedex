import './cardPokemon.css'
import './elementPokemon.css'
import '../container/container.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CardPokemon = ({imgPokemon, namePokemon, typePokemon, baseHp, baseAttack, baseDeffense, getName }) =>{

  const [fullName, setFullName] = useState('')

  const upName = namePokemon.toUpperCase()
  return(
   
      <div className="card-pokemon" onClick={() =>{
        getName(namePokemon)
      }}>
      <div className={`container-element ${typePokemon}`} >
        <div className='header-card'>
          <p>{upName}</p>
        </div>
        <img className='img-poke' src={imgPokemon} alt={namePokemon}></img>
      </div>
      <div className='container-descrip'>
        <div className='descrip'>
          <div><h5>HP</h5><p>{baseHp}</p></div>
          <div><h5>ATK</h5><p>{baseAttack}</p></div>
          <div><h5>DEF</h5><p>{baseDeffense}</p></div>
        </div>
      </div>

    </div>
    
    
  )
}

export default CardPokemon