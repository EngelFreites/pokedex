import './cardPokemon.css'
import './elementPokemon.css'
import './container.css'
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
          <h5><span className='font-large'>HP</span>{baseHp}</h5>
          <h5><span className='font-large'>ATK</span>{baseAttack}</h5>
          <h5><span className='font-large'>DEFF</span>{baseDeffense}</h5>
        </div>
      </div>

    </div>
    
    
  )
}

export default CardPokemon