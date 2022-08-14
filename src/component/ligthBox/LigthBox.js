import {GrClose} from 'react-icons/gr'
import './ligth-box.css'
import '../cardPokemon/elementPokemon.css'


const LigthBox = ({info, state, action}) =>{

  return(
    <div className='layout-ligth-box'>
      <div className='container full-info'>

        <div className='img-pokemon'>
          <img src={info.sprites.front_default} alt={info.name}/>
          <h2>{info.name}</h2>
        </div>

        <div className= {`small-info-pokemon ${info.types[0].type.name}`}>
          <p>{info.types[0].type.name}</p>
        </div>

        <div className='big-info-pokemon'>
          <p> 
            {info.stats[0].base_stat}
          </p>
          <p>
            {info.stats[1].base_stat}
          </p>
          <p>
            {info.stats[2].base_stat}
          </p>
        </div>

      </div>
      <GrClose className='close'onClick={()=>{action(!state)}}/>
    </div>
  )
}

export default LigthBox
