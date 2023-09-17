import { Button, Container, Toolbar } from "@mui/material"
import { Outlet } from "react-router"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNavBtn from "../../components/common/buttons/SubPageNavBtn"
import SubPage from "../../components/common/pageComponents/layout/SubPage"

const About = () => {
  return (
    <Page >
        <Toolbar sx={{
            backgroundColor:'dodgerblue',
            
        }}>
            <SubPageNavBtn endPoint={'/about/0'} text='Who We Are' />
            <SubPageNavBtn endPoint={'/about/1'} text='Where We Came From' />
            <SubPageNavBtn endPoint={'/about/2'} text='What We Believe In' />
            <SubPageNavBtn endPoint={'/about/3'} text='Ethics' />

        </Toolbar>
            <Outlet />

    </Page>
  )
}

export default About