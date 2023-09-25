import { Box } from '@mui/material'
import React from 'react'

const ContentBlock = ({customCSSProperties,children}) => {
  return (
    <Box sx={{
            customCSSProperties,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'50px',
            margin:'0 10px 0 0',
            // backgroundColor:'#f1f1f1f',
            boxShadow:'0 -3px 5px black inset'
            // 0 0 10px black'
        
    }}>
        {children}
    </Box>
  )
}

export default ContentBlock