import { Typography } from '@mui/material'
import React from 'react'

const BulletPoint = ({children}) => {
  return (
    <Typography sx={{
      padding:'0 0 0 15px',
      color:'white',
      fontSize:'10px'
    }}>
        {' •  '}{children}
    </Typography>
  )
}

export default BulletPoint