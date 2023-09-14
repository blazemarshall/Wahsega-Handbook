import { Button, Container, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNavBtn from "../../components/common/buttons/SubPageNavBtn"
import SubPage from "../../components/common/pageComponents/layout/SubPage"

const About = () => {
  return (
    <Page 
    // sx={{
        // padding:'1px',
        // backgroundColor:'primary.main',
        // height:'auto',
        // boxShadow:'0 5px 15px 0px black'
    // }}
    >
        <Toolbar sx={{
            backgroundColor:'dodgerblue',
            
        }}>
            <SubPageNavBtn endPoint={'/about/1'} text='WhoWeAre' />
            <SubPageNavBtn endPoint={'/about/2'} text='Where We Came From' />
            <SubPageNavBtn endPoint={'/about/3'} text='What We Believe In' />
            <SubPageNavBtn endPoint={'/about/4'} text='Ethics' />

        </Toolbar>
            <Outlet />

    </Page>
  )
}

export default About