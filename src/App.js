import { Routes, Route, Link} from 'react-router-dom'
import Header from './component/header/Header'
import Layout from "./component/layout/Layout"
import CardInfo from "./pages/CardInfo"
import './component//menu/Menu.js'
import Pokedex from './pages/Pokedex'
import Registre from './pages/Registre'
import Footer from './component/footer/Footer'
import GridLayout from './component/grid-layout/GridLayout'



const App = () =>{
  return(
    <GridLayout>
      <Header/>
      <Layout>
        <Routes>
          <Route path='/' element={<CardInfo/>}/>
          <Route path='/Pokedex' element={<Pokedex/>}/>
          <Route path='/Registre' element={<Registre/>}/>
        </Routes>
      </Layout>
      <Footer/>
    </GridLayout>
  )
}


export {App}