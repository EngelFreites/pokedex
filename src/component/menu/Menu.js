import { Link } from "react-router-dom"
import './menu.css'
const Menu = ({state, action}) =>{

  const closePokeball = () =>{
    action(!state)
  }

  return(
    <div className="showMenu">
      <ul>
        <li><Link onClick={closePokeball} to='/'>Inico</Link></li>
        <li><Link onClick={closePokeball} to='/Pokedex'>Pokedex</Link></li>
        <li><Link onClick={closePokeball} to='/Registre'>Registro</Link></li>
      </ul>

    </div>
  )
}


export default Menu