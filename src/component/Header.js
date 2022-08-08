import { useState } from "react";
import { Link } from "react-router-dom";
import './headers.css'
import { Menu } from "../App";
import Search from "./Search";



const Header = () =>{
  const [namePokemon, setNamePokemon] = useState('')
  const [open, setOpen] = useState(false)

  const openPokeball = () =>{
    setOpen(!open)
  }

  const searchName = (value) =>{
    setNamePokemon(value)
  }
  console.log(namePokemon)

  return(
    <header>
      <Link to='/'>
      <img 
        src="../Logo.png" 
        alt="Logo Pokemon" 
        className="logo"
      />
      </Link> 
      <Search 
        setName={searchName}
      />
      {
        open 
        ? <img 
        src="../pokeball-open.jpg" 
        alt="pokeball" 
        className="pokeball"
        onClick={openPokeball}
        />
        : <img 
        src="../pokeball-close.jpg" 
        alt="pokeball" 
        className="pokeball"
        onClick={openPokeball}
        />
      }
      {
        open 
        ? <Menu/>
        : null
      }
    </header>
  )
}

export default Header