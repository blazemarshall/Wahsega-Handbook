import { Typography } from '@mui/material'
import React from 'react'

const RomanNumeralBulletPoint = ({numeral,children}) => {
  return (
    <div>

        <Typography 
        sx={{
            fontSize:'10px',
            paddingLeft:'10px',
        }}
        >{numeral}{'. '}{children}</Typography>
        </div>
    )
}

export default RomanNumeralBulletPoint