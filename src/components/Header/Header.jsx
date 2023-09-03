import { Box, Button,} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'

const Header = () => {



const buttonList = ['Culture','Safety','Policies','Benefits','Time-Off','Contact']
const ButtonMap = buttonList.map((button,index)=>{
  return (
    <Button key={index} 
    href={`/${button.toLowerCase()}`}
    sx={{
      color:'white',
      padding:'0 5px',
      margin:'0 2.5px',
      transition:'all 1s ease-in-out',
      backgroundColor:'primary.main',
      borderRadius:"50px",
      '&:hover':{
        backgroundColor:'white',
        borderRadius:'2px',
        color:'hotpink',
        padding:'0px'
      }
    }}>
      {button}
    </Button>
    )
  })



  return (
    < >
    <AppBar  >
      <ToolBar sx={{justifyContent:'space-between'}} >
        <Button variant='Contained' 
                href='/'
                >
          Wahsega
        </Button>
        <Box sx={{
          display:"flex",
          padding:' 0 30px',
          margin:'0px',
          gap:'1px',
          flexDirection:'row',
        }}>
          {ButtonMap}
        </Box>
      </ToolBar>
    </AppBar>
    </>
  )
}

export default Header