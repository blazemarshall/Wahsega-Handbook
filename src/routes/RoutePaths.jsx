import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home.jsx"
import Culture from "../pages/Culture/Culture.jsx"
import Safety from "../pages/Safety/Safety.jsx"
import Policies from "../pages/Policies/Policies.jsx"
import Contact from "../pages/Contact/Contact.jsx"
import Benefits from "../pages/Benefits/Benefits"
import About from "../pages/About/About.jsx"
import WhoWeAre from "../pages/About/Components/WhoWeAre.jsx"
import WhereWeCameFrom from "../pages/About/Components/WhereWeCameFrom.jsx"
import WhatWeBelieveIn from "../pages/About/Components/WhatWeBelieveIn.jsx"
import Ethics from "../pages/About/Components/Ethics.jsx"
import FourZeroOneK from "../pages/Benefits/components/FourZeroOneK.jsx"
import SapReimbursement from "../pages/Benefits/components/SapReimbursement"
import Insurance from "../pages/Benefits/components/Insurance"
import Time_Off from "../pages/Benefits/components/Time_Off.jsx"
import Diversity from "../pages/Policies/components/Diversity.jsx"
import Harassment from "../pages/Policies/components/Harassment.jsx"
import PhotoVideo from "../pages/Policies/components/PhotoVideo.jsx"
import SafetyPolicies from "../pages/Safety/components/SafetyPolicies.jsx"
import Responsiblities from "../pages/Safety/components/Responsiblities.jsx"
import Protocols from "../pages/Safety/components/Protocols.jsx"

const RoutePaths = () => {
  return (
    <Routes>
        <Route  path ='/' element={<Home />} />
        <Route  path ='about' element={<About />} >
          <Route path='0' element={<WhoWeAre />} />
          <Route path='1' element={<WhereWeCameFrom />} />
          <Route path='2' element={<WhatWeBelieveIn />} />
          <Route path='3' element={<Ethics />} />
        </Route>
        <Route  path ='/benefits' element={<Benefits />} >
          <Route path='0' element={<Insurance />} />
          <Route path='1' element={<FourZeroOneK />} />
          <Route path='2' element={<Time_Off />} />
        </Route>

        <Route  path ='/contact' element={<Contact/>} />
        <Route  path ='/policies' element={<Policies />} >
          <Route path='0' element={<Diversity />} />
          <Route path='1' element={<Harassment />} />
          <Route path="2" element={<PhotoVideo />} />
        </Route>
        
        <Route  path ='/safety' element={<Safety />} >
          <Route path='0' element={<SafetyPolicies />} />
          <Route path='1' element={<Protocols />} />

        </Route>
        <Route  path ='/culture' element={<Culture />} />
    </Routes>
  )

}

export default RoutePaths