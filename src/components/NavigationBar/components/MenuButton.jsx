import { Button, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'

const MenuButton = ({menuBtnClicked,setMenuBtnClicked}) => {
  return (
    <Stack 
      sx={{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        // flex:' 6 6',
        // gap:'5rem',
        backgroundColor:'primary.main'
      }}>

      <Button 
        key='menuBtn'
        sx={{
          display:'flex',
          flex:'1',
          borderRadius:'0',
          padding:'25px',
          // borderBottom:'none',
          boxShadow:'0 0 1px 0 inset'
        }}
        onClick={()=>setMenuBtnClicked(!menuBtnClicked)} 
    variant='contained'  ><MenuIcon />
        </Button>
        <Button 
                  variant='Contained' 
                  href='/'
                  sx={{
                    display:'flex',
                    flex:'3',
                    '&:hover':{
                      backgroundColor:'primary.dark',
                      textDecoration:'underline'

                    },
                    backgroundColor:'primary.main',
                    // opacity:'.5',
                    color:'white',

                    transition:'all 1s ease-in-out',
                    padding:'25px 0 25px 0'
                  }}
                      >
                Wahsega HandBook
              </Button>

    </Stack>
    
  )
}

export default MenuButton