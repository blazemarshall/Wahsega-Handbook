import { Typography } from '@mui/material'
import React from 'react'

const BlockTitle = ({text,children}) => {
  return (
    <Typography 
        sx={{
          textDecoration:'underline'

        }}
    >{children}</Typography>
  )
}

export default BlockTitle