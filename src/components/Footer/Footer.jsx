import { Container } from "@mui/material"

const Footer = () => {
  return (
    <Container sx={{
      bgcolor:'white',
      padding:'5px',
      // margin:'10px',
      position:'fixed',
      bottom:'0',
      width:'91.5vw',
      height:'30px',
      transition:'all .5s ease-in-out',
      '&:hover':{'height':'80px'},
      // transition:'all 5s ',

    }}>
      <div>Footer</div>
    </Container>
  )
}

export default Footer