import { Box, Container, Stack, Typography } from "@mui/material"
import BulletPoint from "../../../components/common/pageComponents/typography/BulletPoint"
import PageTitle from "../../../components/common/pageComponents/typography/PageTitle"
import SubPage from "../../../components/common/pageComponents/layout/SubPage"

const WhatWeBelieveIn = () => {
  return (
    <SubPage>
        <Box sx={{
            // padding:'60px',
            justifyContent:'center',
            display:'flex',
        }}>
            <PageTitle >What We Believe In</PageTitle>
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
    <BulletPoint color={'white'} variant="h8"> Standardizing a process so it is repeatable and organized</BulletPoint>
    <BulletPoint color={'white'} variant="h8"> Focusing on measurability and evaluating progress using data</BulletPoint>
    <BulletPoint color={'white'} variant="h8"> Comparing results against your requirements (did you deliver on your promise?)</BulletPoint>
    <BulletPoint color={'white'} variant="h8"> Innovating new and better ways to achieve similar results </BulletPoint>
    <BulletPoint color={'white'} variant="h8"> Responding to changing circumstance and evolving your methods over time</BulletPoint>
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
    </SubPage>
  )
}

export default WhatWeBelieveIn