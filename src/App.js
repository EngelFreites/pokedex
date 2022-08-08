import { Routes, Route, Link} from 'react-router-dom'
import Header from './component/Header'
import Layout from "./component/Layout"
import CardInfo from "./component/CardInfo"
import './component/menu.css'
import Pokedex from './component/Pokedex'
import Registre from './component/Registre'
import Footer from './component/Footer'

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

const App = () =>{
  return(
    <div>
      <Header/>
      <Layout>
        <Routes>
          <Route path='/' element={<CardInfo/>}/>
          <Route path='/Pokedex' element={<Pokedex/>}/>
          <Route path='/Registre' element={<Registre/>}/>
        </Routes>
      </Layout>
      <Footer/>
    </div>
  )
}


export {Menu, App}