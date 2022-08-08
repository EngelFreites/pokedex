import {BsFacebook, BsInstagram, BsGithub} from 'react-icons/bs'
import './footer.css'

const goInstagram = () =>{
  window.open('https://www.instagram.com/engelbertfreites/')
}

const Footer = () =>{

  return(
    <footer className='footer'>
      <BsFacebook className='simbolo'/>
      <BsInstagram className='simbolo' onClick={goInstagram}/>
      <BsGithub className='simbolo'/>
    </footer>
  )
}

export default Footer