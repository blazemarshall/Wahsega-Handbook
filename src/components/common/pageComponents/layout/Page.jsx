import React from 'react'
import Contact from '../../../../pages/Contact/Contact'
import { Container } from '@mui/material'

const Page = ({customCssProperties,children}) => {
  return (
    <Container sx={{
        ...customCssProperties,
        boxShadow:'0 5px 100px 0px black',

   
    }}
    >{children}</Container> 
  )
}

export default Page