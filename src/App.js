import { Routes, Route, Link} from 'react-router-dom'
import Header from './component/header/Header'
import Layout from "./component/layout/Layout"
import CardInfo from "./pages/CardInfo"
import './component//menu/Menu.js'
import Pokedex from './pages/Pokedex'
import Registre from './pages/Registre'
import Footer from './component/footer/Footer'
import GridLayout from './component/grid-layout/GridLayout'
import { useState } from 'react'
import Look from './pages/Look'



const App = () =>{
  const [flow, setFlow] = useState(false)
  return(
    <GridLayout>
      <Header/>
      <Layout state={flow}>
        <Routes>
          <Route path='/' element={<CardInfo/>}/>
          <Route path='/pokedex' element={<Pokedex action={setFlow}/>}/>
          <Route path='/registre' element={<Registre/>}/>
          <Route path='/look/:namePokemon' element={<Look/>}/>
        </Routes>
      </Layout>
      <Footer/>
    </GridLayout>
  )
}


export {App}