import { Box, Button, Drawer } from '@mui/material'
import React from 'react'
import MenuButton from './MenuButton'

const MenuDrawer = ({setMenuBtnClicked,menuBtnClicked,ButtonMap}) => {
  return (
        <Drawer key='drawer' 
                anchor='top' 
                open={menuBtnClicked}
                onClose={()=>setMenuBtnClicked(false) }
                sx={{
                  // width:'500px',
                  // padding:'15px',
                  // margin:'5px'
                  }}>
              
              <MenuButton menuBtnClicked={menuBtnClicked} setMenuBtnClicked={setMenuBtnClicked}/>

                  <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    margin:'5px'
                    }}>
                    {ButtonMap}
                    </Box>
        </Drawer>)
      }



export default MenuDrawer