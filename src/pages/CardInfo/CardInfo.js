import {Link} from 'react-router-dom'
import './container.css'
import './cardinfo.css'

const CardInfo = () =>{
  return(
    <div className="container container-info">
      <div className='info'>
        <h3>POKEDEX ENG</h3>
        <p> El pokédex en el mundo ficticio de Pokémon, es un dispositivo electrónico que interviene en los videojuegos y la serie de anime. En los juegos, su función es registrar los datos de un pokémon. En el manga y el anime, el Pokédex es una enciclopedia electrónica, la cual proporciona al entrenador información sobre un pokémon que es desconocido con tan solo exponer el pokédex en frente del pokémon.</p>
        <div className='btn-start'>
          <Link to='/pokedex'> Start -> </Link>
        </div>
        </div>
      <div className='img-gengar'>
        <img src='../gengar3.jpg' 
        alt='imagen pokemon'
        ></img>
      </div>
    </div>
  )
}


export default CardInfo