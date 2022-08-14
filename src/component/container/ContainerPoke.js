import './container.css'
import './overflow.css'

const ContainerPoke = ({children, show}) =>{
  return(
    <div>
      {
        show 
        ? <div className=" container container-card overflow"> {children}</div>
        : <div className=" container container-card">{children}</div>
      }
    </div>
    
   
  )
}

export default ContainerPoke

