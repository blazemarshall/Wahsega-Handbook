import { Box, Container, Typography } from '@mui/material'
import { myEffect } from './animationKeyframes/homeKeyframes'
import { useState } from 'react'

const Welcome = () => {
  return (
    <Container 
    sx={{
      display:'flex',
      flexDirection:'column',
      // gap:'1rem',
      padding:'1px',
      backgroundColor:'primary.main',
      height:'auto',
      boxShadow:'0 5px 15px 0px black',
      animation:`${myEffect} 2s ease ` 
    }}>

    <Typography variant='h4'
    
    sx={{
      margin:'0 -23px  ',
      padding:' 75px',
      color:'white',
      display:'flex',
      justifyContent:'center',
      boxShadow:'0 0px 50px 5px #1976d2 inset',
      backgroundColor:'info.dark',
      borderRadius:'5px'
    }}
    >Welcome to Wahsega</Typography>

    <Box sx={{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      overflow:'hidden',
      width:'100%',
      padding:'0 23px',
      margin:'0 -23px'

    }}
    >
  
      <Typography sx={{
        margin:'1px -23px 1px',
        boxShadow:'0 0 50px 5px #1976d2 inset',
        // height:'10vh',
        color:'white',
        padding:'50px',
        backgroundColor:'info.dark',
        textIndent:'25px'
      }}
      > Whether you have just joined our team or have been at Wahsega for a while, we are
confident that you will find our company a dynamic and rewarding place in which to
work, and we look forward to a productive and successful association. We consider the
employees of Wahsega to be one of its most valuable resources. This handbook has
been written to serve as the guide for the employer/employee relationship.
 </Typography>
 <Box sx={{
        margin:'0 -23px ',
        width:{ 
          // xs:-,
          sm:'116%',
          md:'112%',
          lg:'111%',
          // xl:,
        },
        padding:'50px 0 ',
        backgroundRepeat:'no-repeat',
        backgroundSize:'94.15% 100%',
        height:
        {xs:'150px',
          sm:'200px',
          md:'400px',
          // md:'200%',
      },
        backgroundImage:'url("https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80")'
      }}
      />
 <Typography sx={{
    fontSize:'.75rem',
    padding:'50px 50px 110px',
    textIndent:'25px',
    margin:'1px -23px',
    backgroundColor:'info.dark',
    color:'white',
 }}
 >** This handbook contains only general information and guidelines. It is not intended to   
be comprehensive or to address all the possible applications of, or exceptions to, the
general policies and procedures described. For that reason, if you have any questions
concerning eligibility for a particular benefit or the applicability of a policy or practice to
you, you should address your specific questions to the Human Resource department. **
</Typography>

    </Box>

    </Container>
  )
}

export default Welcome