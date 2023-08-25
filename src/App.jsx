// import { useState } from 'react'
import './App.css'
import RoutePaths from './routes/RoutePaths'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>
    <Header />
       <Router>
        <RoutePaths />
       </Router>
    <Footer />       
    </>
  )
}

export default App
