import { Box } from '@mui/material'
import React from 'react'

const ContentBlock = ({customCSSProperties,children}) => {
  return (
    <Box sx={{
            customCSSProperties,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            // padding:'50px',
            backgroundColor:'#3399ff',
            boxShadow:'0 0 1500px 5px black inset,0 0 10px black'
        
    }}>
        {children}
    </Box>
  )
}

export default ContentBlock