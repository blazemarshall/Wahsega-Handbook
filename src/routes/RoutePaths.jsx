import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home.jsx"
import Culture from "../pages/Culture/Culture.jsx"
import Safety from "../pages/Safety"
import Policies from "../pages/Policies"
import Contact from "../pages/Contact"
import Benefits from "../pages/Benefits"
import About from "../pages/About/About.jsx"
import WhoWeAre from "../pages/About/Components/WhoWeAre.jsx"
import WhereWeCameFrom from "../pages/About/Components/WhereWeCameFrom.jsx"

const RoutePaths = () => {
  return (
    <Routes>
        <Route  path ='/' element={<Home />} />
        <Route  path ='about' element={<About />} >
          <Route path='whoWeAre' element={<WhoWeAre />} />
          <Route path='whereWeCameFrom' element={<WhereWeCameFrom />} />
        </Route>
        <Route  path ='/benefits' element={<Benefits />} />
        <Route  path ='/contact' element={<Contact/>} />
        <Route  path ='/policies' element={<Policies />} />
        <Route  path ='/safety' element={<Safety />} />
        <Route  path ='/culture' element={<Culture />} />
    </Routes>
  )
}

export default RoutePaths