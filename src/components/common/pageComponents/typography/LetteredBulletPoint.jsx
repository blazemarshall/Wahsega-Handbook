import { Typography } from '@mui/material'
import React from 'react'

const LetteredBulletPoint = ({letter,children}) => {
  return (
    <Typography sx={{
      fontSize:'10px',
      paddingLeft:'15px'
    }}
    >{letter}{'. '}{children}</Typography>
    )
}

export default LetteredBulletPoint