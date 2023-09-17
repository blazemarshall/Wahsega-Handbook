import { Container } from '@mui/material'
import React from 'react'

const SubPage = ({customCSSProperties,children}) => {
  return (
    <Container 
    sx={{
      ...customCSSProperties,
      display:'flex',
      flexDirection:'column',
      // margin:'0 22px ',
      padding:'0px',
      color:'white',
      justifyContent:'center',
      boxShadow:'0 0px 50px 5px #1976d2 inset,0 10px 20px black',
      backgroundColor:'info.dark',
      // borderRadius:'5px'
  }}>
    {children}</Container>
  )
}

export default SubPage