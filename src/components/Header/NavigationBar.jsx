import { useTheme } from '@emotion/react'
import { Box, Button, Drawer, List, ListItem, useMediaQuery,} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {

const theme = useTheme();
const [menuBtnClicked ,setMenuBtnClicked]= useState(false)
const isMobile = useMediaQuery(theme.breakpoints.down('md'))


const buttonList = ['About','Culture','Safety','Policies','Benefits','Time-Off','Contact']
const ButtonMap = buttonList.map((button,index)=>{
  return (
    <Button key={index} 
    href={button.toLowerCase() === 'about'?`/${button.toLowerCase()}/1`:`/${button.toLowerCase()}`}
    sx={{
      color:'white',
      padding:'20px 5px',
      margin:'0 2.5px',
      transition:'all 1s ease-in-out',
      backgroundColor:'primary.main',
      borderRadius:"0px",
      '&:hover':{
        backgroundColor:'white',
        // borderRadius:'2px',
        color:'hotpink',
        // padding:'0px'
      }
    }}>
      {button}
    </Button>
    )
  })

const MenuButton = () =>{
    return (<Button key='menuBtn'
       onClick={()=>setMenuBtnClicked(!menuBtnClicked)} 
    variant='contained'  ><MenuIcon />
    </Button>
    )
}
const MenuDrawer =()=>{
  return (
  <Drawer key='drawer' 
          anchor='top' 
          open={menuBtnClicked}
          onClose={()=>setMenuBtnClicked(false) }
          sx={{width:'500px',padding:'5px',margin:'5px'}}>
                <MenuButton/>
                <Button variant='Contained' 
                href='/'
                >
          Wahsega
        </Button>
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              margin:'5px'
              }}>
              {ButtonMap}
              </Box>
  </Drawer>)
}

  return (
    < >
    <AppBar  >
      {isMobile? <div>
        <MenuButton  />
      <MenuDrawer />
      </div>
            :
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
      </ToolBar>}
    </AppBar>
    </>
  )
}

export default NavigationBar