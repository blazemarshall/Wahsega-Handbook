import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Culture from "../pages/Culture"
import Safety from "../pages/Safety"
import Policies from "../pages/Policies"
import Contact from "../pages/Contact"
import Benefits from "../pages/Benefits"

const RoutePaths = () => {
  return (
    <Routes>
        <Route  path ='/' element={<Home />} />
        <Route  path ='/benefits' element={<Benefits />} />
        <Route  path ='/contact' element={<Contact/>} />
        <Route  path ='/policies' element={<Policies />} />
        <Route  path ='/safety' element={<Safety />} />
        <Route  path ='/culture' element={<Culture />} />
    </Routes>
  )
}

export default RoutePaths