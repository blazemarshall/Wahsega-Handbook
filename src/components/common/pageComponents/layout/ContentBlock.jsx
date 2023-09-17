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
            backgroundColor:'info.dark',
            boxShadow:'0 0 1500px 5px #1976d2 inset,0 0 10px black'
        
    }}>
        {children}
    </Box>
  )
}

export default ContentBlock