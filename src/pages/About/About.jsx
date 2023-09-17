import { Button, Container, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNavBtn from "../../components/common/buttons/SubPageNavBtn"
import SubPage from "../../components/common/pageComponents/layout/SubPage"
import SubPageNav from "../../components/common/pageComponents/layout/SubPageNav"

const About = () => {
  const subPageArray = ['Who We Are', 'Origin', 'Core Beliefs']


  return (
    <Page >
      {/* <div>About</div> */}

      <SubPageNav
         pagesToLinksArray={subPageArray}
         routeName={'about'}
       />
      <Outlet />
 

    </Page>
  )
}

export default About