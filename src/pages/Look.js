import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../component/loading/Loading"
import getPokemon from "../services/getPokemon"
import './look.css'

const Look = () =>{
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [pokemonExist, setPokemonExist] = useState(false)
  const {namePokemon} = useParams()

  useEffect(()=>{
    const data = async () =>{
      setLoading(true)
      const {data, found} = await getPokemon(namePokemon)
      console.log('data ', data)
      console.log('found ', found)
      setPokemon(data)
      setLoading(false)
      setPokemonExist(found)
    }
    data()

  },[namePokemon])

  if (loading) return <Loading/>

  if(!pokemonExist) return <p>Pokemon no encontrado</p>

  return(
    <div>
      <div className="card">
      <div className="circle">
        <div className="img-looking">
         <img src={pokemon.sprites.front_default} alt='imagen pokemon'/>
        </div>
      </div>
        <div className="screen">
          <h1>{pokemon.name}</h1>
          <div className="caracter">
            <p>hability</p>
            <p>hability</p>
            <p>hability</p>
            <p>hability</p>
          </div>
          <p className="class">type</p>
        </div>
      </div>
    </div>

  )
}


export default Look