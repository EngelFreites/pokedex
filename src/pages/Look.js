import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getPokemon from "../services/getPokemon"
import './look.css'

const Look = () =>{
  const [pokemon, setPokemon] = useState({})
  const {namePokemon} = useParams()

  useEffect(()=>{
    getPokemon(namePokemon)
    .then(result => setPokemon(result))

  },[namePokemon])


  return(
    <div>
      <div className="card">
      <div className="circle">
        <div className="img-looking">
          <img src={pokemon.sprites.other.dream_world.front_default} alt='name'/>
        </div>
      </div>
        <div className="screen">
          <h1>name</h1>
          <div className="caracter">
            <p>hability</p>
          </div>
          <p>type</p>
        </div>
      </div>
    </div>

  )
}


export default Look