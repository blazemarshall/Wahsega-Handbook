import { Box, Container, Stack, Typography } from "@mui/material"

const WhatWeBelieveIn = () => {
  return (
    <Container sx={{
        display:'flex',
        flexDirection:'column',
        boxShadow:'0 0px 50px 5px #1976d2 inset',
        backgroundColor:'info.dark',
        margin:'0 -2.9%',
        width:'91.5vw'
    }}>
        <Box sx={{
            padding:'60px',
            justifyContent:'center',
            display:'flex',
        }}>
            <Typography variant='h4' color={"white"}>What We Believe In</Typography>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'row'
        }}>
            <Box>
                <Typography color={'white'}>Kaizen Philosophy</Typography>
                <Typography color={'white'} variant="p">Kaizen is a Japanese term meaning “change for the better” or “continuous improvement”. This
approach is based on the belief that continuous, incremental improvements adds up to
substantial changes over time. 
</Typography>
<Box sx={{
    
}}>
<Typography color={"white"}>The core tenets of continuous improvement of Kaizen include:</Typography>
<Stack direction={"column"}>
    <Typography color={'white'} variant="h8">● Standardizing a process so it is repeatable and organized</Typography>
    <Typography color={'white'} variant="h8">● Focusing on measurability and evaluating progress using data</Typography>
    <Typography color={'white'} variant="h8">● Comparing results against your requirements (did you deliver on your promise?)</Typography>
    <Typography color={'white'} variant="h8">● Innovating new and better ways to achieve similar results </Typography>
    <Typography color={'white'} variant="h8">● Responding to changing circumstance and evolving your methods over time</Typography>
</Stack>
</Box>
<Typography color={'white'} variant="p">At Wahsega, our goal is to empower our team members to make their processes better and the
overall company better. We encourage our employees to bring new ideas to the table and to keep
rolling out new initiatives and projects.
</Typography>
            </Box>
            <Box sx={{
                                backgroundColor:'#3399ff',
                                boxShadow:'0 0 150px 5px black inset,0 0 10px black'
            }}>
                <Typography sx={{
                    color:'white',
                    padding:'35% 5% ',
                    margin:'0px 0 0 ' 
                }}>“Kaizen is in our DNA in regards to every process.
                We will continuously improve ourselves, and our processes 
                and products” - Joey Gullo</Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default WhatWeBelieveIn