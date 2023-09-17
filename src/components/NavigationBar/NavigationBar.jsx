import { useTheme } from '@emotion/react'
import { Box, Button, Drawer, List, ListItem, useMediaQuery,} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { useState } from 'react'
import MenuButton from './components/MenuButton'
import MenuDrawer from './components/MenuDrawer.jsx'

const NavigationBar = () => {

const theme = useTheme();
const [menuBtnClicked ,setMenuBtnClicked]= useState(false)
const isMobile = useMediaQuery(theme.breakpoints.down('md'))


const buttonList = ['About','Culture','Safety','Policies','Benefits','Contact']
const ButtonMap = buttonList.map((button,index)=>{
  return (
    <Button key={index} 
    href={button.toLowerCase() === 'about'?`/${button.toLowerCase()}/0`:`/${button.toLowerCase()}`}
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




  return (
    < >
    <AppBar  >
      {isMobile? <div>
        <MenuButton setMenuBtnClicked={setMenuBtnClicked} menuBtnClicked={menuBtnClicked}/>
      <MenuDrawer ButtonMap={ButtonMap} menuBtnClicked={menuBtnClicked} setMenuBtnClicked={setMenuBtnClicked}/>
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