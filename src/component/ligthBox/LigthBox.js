import {GrClose} from 'react-icons/gr'
import './ligth-box.css'
import '../cardPokemon/elementPokemon.css'


const LigthBox = ({info, state, action}) =>{

  return(
    <div className='layout-ligth-box'>
      <div className='container full-info'>
        <div className='img-pokemon'>
          <img src={info.sprites.front_default} alt={info.name}/>
        </div>
        <div className= {`small-info-pokemon ${info.types[0].type.name}`}>
        </div>
        <div className='big-info-pokemon'></div>
      </div>
      <GrClose className='close'onClick={()=>{action(!state)}}/>
    </div>
  )
}

export default LigthBox
