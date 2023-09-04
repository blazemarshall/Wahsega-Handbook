import {  Container, Toolbar,  } from "@mui/material"
import Diversity from "./Components/Diversity"
import Ethics from "./Components/Ethics"

const Culture = () => {
  return (
    <Container sx={{
      height:'full'
    }} >
      <Toolbar>

      {/* <Button href='#whoWeAre'>Who We Are</Button> */}

      </Toolbar>
      {/* <Typography variant="h1">Culture</Typography> */}
    <Diversity />
    <Ethics />
    </Container>
  )
}

export default Culture