import React from 'react'
import Contact from '../../../../pages/Contact/Contact'
import { Container } from '@mui/material'

const Page = ({customCssProperties,children}) => {
  return (
    <Container sx={{
        ...customCssProperties,
        boxShadow:'0 5px 100px 0px black',

        // padding:'0 10px'
        // display:'flex',
        // flexDirection:'column',
        // margin:'0 -22px ',
        // padding:'50px 50px',
        // width:'91vw',
        // height:'80vh',
        // color:'white',
        // justifyContent:'center',
        // boxShadow:'0 0px 50px 5px #1976d2 inset',
        // backgroundColor:'info.dark',
        // borderRadius:'5px',
        // backgroundColor:'orange',
    }}
    >{children}</Container> 
  )
}

export default Page