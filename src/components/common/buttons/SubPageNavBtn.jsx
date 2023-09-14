import { Button } from '@mui/material'
import React from 'react'

const SubPageNavBtn = ({endPoint,text}) => {
  return (
    <Button 
        variant='a'
        href={endPoint}
        sx={{
          color:'white',
          fontSize:'12px'
        }}
      >
        {text}
        </Button>
  )
}

export default SubPageNavBtn