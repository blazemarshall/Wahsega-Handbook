import { Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({customCSSProperties,children}) => {
  return (
        <Typography  sx={{
            customCSSProperties,
            color:'white',
            display:'flex',
            justifyContent:'center',
            fontSize:'3rem',
            padding:'10px',
            // backgroundColor:'white',
            // margin:'110px 0 0 0'
        }}>
            {children}
        </Typography>
    )
}

export default PageTitle