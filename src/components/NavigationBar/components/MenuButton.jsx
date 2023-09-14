import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'

const MenuButton = ({menuBtnClicked,setMenuBtnClicked}) => {
  return (
    <Button key='menuBtn' sx={{
          borderRadius:'0',
          padding:'20px'
        }}
           onClick={()=>setMenuBtnClicked(!menuBtnClicked)} 
        variant='contained'  ><MenuIcon />
        </Button>
    
  )
}

export default MenuButton