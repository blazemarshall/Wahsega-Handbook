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
              <Button 
                  variant='Contained' 
                  href='/'
                  sx={{
                    // '&:hover':{backgroundColor:'dodgerblue'},
                    // opacity:'.5',
                    color:'dodgerblue',
                    transition:'all 1s ease-in-out',
                    padding:'25px 0 15px 0'
                  }}
                      >
                Wahsega HandBook Home
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



export default MenuDrawer