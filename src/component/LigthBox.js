import './container.css'
import './ligth-box.css'


const LigthBox = ({nameP}) =>{
  return(
    <div className='layout-ligth-box'>
      <div className="container">
        <p>{nameP}</p>
      </div>
    </div>
  )
}

export default LigthBox
