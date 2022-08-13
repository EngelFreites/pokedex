import { useState, useEffect } from "react"
import getList from "../services/getList"
import getPokemons from "../services/getPokemons"

const useCallPokemones= () =>{
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [pokemones, setPokemones] = useState([])
  const [btnNext, setBtnNext] = useState('')
  const [btnBack, setBtnBack] = useState(null)
  const [data, setData] = useState({})
  const [infoPokemon, setInfoPokemon] = useState({})

  useEffect(() =>{
    getPokemons(url)
    .then(result =>{
      setBtnBack(result.previous)
      setBtnNext(result.next)
      return getList(result.results)
    } )
    .then(result => setPokemones(result))
   
  },[url])


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

  

  return [data, pokemones, setInfoPokemon, nextUrl, btnBack, previustUrl,infoPokemon]
}

export default useCallPokemones


