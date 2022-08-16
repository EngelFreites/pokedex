import {GrClose} from 'react-icons/gr'
import './ligth-box.css'
import '../cardPokemon/elementPokemon.css'
import Grafic from '../grafic/Grafic'


const LigthBox = ({info, state, action, flow}) =>{

  return(
    <div className='layout-ligth-box'>
      <div className='container full-info special-shadow'>

        <div className='img-pokemon'>
          <h2>{info.name.toUpperCase()}</h2>
          <img src={info.sprites.other.dream_world.front_default} alt={info.name}/>
       
        </div>

        <div className= {`small-info-pokemon`}>
        <div>
            <h4>Tamaño:</h4>
            <p>{info.height} m</p>
          </div>          
          <div>
            <h4>Peso:</h4>
            <p>{info.weight} Kg</p>
          </div>
          <div>
            <h4>Experiencia:</h4>
            <p>{info.base_experience} LV</p>
          </div>
        </div>

        <div className='big-info-pokemon'>
          <Grafic 
              hp={info.stats[0].base_stat} 
              def={info.stats[2].base_stat} 
              speed={info.stats[5].base_stat} 
              atk={info.stats[1].base_stat} 
            />
        </div>
        <div className='type'>
          <h4>Tipo:</h4>
          <div className='container-type'>
            {
              info.types.map((type, index) =>(
                <p key={index} className={type.type.name}>{type.type.name}</p>
              ))
            }
          </div>
        </div>

      </div>
      <GrClose className='close'onClick={()=>{action(!state)}}/>
    </div>
  )
}

export default LigthBox
