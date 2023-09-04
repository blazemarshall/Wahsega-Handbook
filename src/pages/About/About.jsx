import { Button, Container, Toolbar } from "@mui/material"
import { Outlet } from "react-router"

const About = () => {
  return (
    <Container sx={{
        padding:'1px',
        backgroundColor:'primary.main',
        height:'auto',
        boxShadow:'0 5px 15px 0px black'
    }}>
        <Toolbar>
            <Button variant="a" href='/about/whoWeAre' sx={{
                color:'white'
            }}
            >Who We Are</Button>
            <Button variant='a' href='/about/whereWeCameFrom' sx={{
                color:"white"
            }}
            >Where We Came From</Button>

        </Toolbar>
        <Outlet />
    </Container>
  )
}

export default About