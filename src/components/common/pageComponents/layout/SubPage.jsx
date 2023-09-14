import { Container } from '@mui/material'
import React from 'react'

const SubPage = ({children}) => {
  return (
    <Container 
    sx={{
      display:'flex',
      flexDirection:'column',
      // margin:'0 22px ',
      // padding:'50px 50px',
      // width:'100%',
      // height:'80vh',
      color:'white',
      justifyContent:'center',
      boxShadow:'0 0px 50px 5px #1976d2 inset',
      backgroundColor:'info.dark',
      // borderRadius:'5px'
  }}>
    {children}</Container>
  )
}

export default SubPage