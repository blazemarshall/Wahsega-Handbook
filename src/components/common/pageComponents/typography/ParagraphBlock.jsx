import { Typography } from '@mui/material'
import React from 'react'

const ParagraphBlock = ({children}) => {
  return (
    <Typography
        sx={{
        textIndent:'2rem'
        }}
        variant='p'
    >{children}</Typography>
  )
}

export default ParagraphBlock