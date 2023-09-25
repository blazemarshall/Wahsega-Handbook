import { Typography } from '@mui/material'
import React from 'react'

const DataSpan = ({customCssProperties,children}) => {
  return (
    <Typography
        sx={{
            ...customCssProperties
        }}
    >
        {children}
    </Typography>
  )
}

export default DataSpan