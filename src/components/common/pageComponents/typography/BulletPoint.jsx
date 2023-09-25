import { Typography } from '@mui/material'
import React from 'react'

const BulletPoint = ({children}) => {
  return (
    <Typography sx={{
      padding:' 5px 0 5px 0px',
      color:'white',
      fontSize:'10px'
    }}>
        {' •  '}{children}
    </Typography>
  )
}

export default BulletPoint