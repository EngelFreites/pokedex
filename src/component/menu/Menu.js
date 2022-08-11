import { Link } from "react-router-dom"
import './menu.css'
const Menu = () =>{
  return(
    <div className="showMenu">
      <ul>
        <li><Link to='/'>Inico</Link></li>
        <li><Link to='/Pokedex'>Pokedex</Link></li>
        <li><Link to='/Registre'>Registro</Link></li>
      </ul>

    </div>
  )
}


export default Menu