import { Box, Container, Typography } from '@mui/material'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import Page from '../../../components/common/pageComponents/layout/Page'
import ContentBlock from '../../../components/common/pageComponents/layout/ContentBlock.jsx'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle.jsx'

const WhoWeAre = () => {
  return (
    <SubPage id="#whoWeAre">

            <PageTitle >Who We Are</PageTitle>
        <Box sx={{
            display:'flex',
            padding:'15px'

        }}>
            <Box sx={{}}>
                <BlockTitle  >Mission Statement</BlockTitle>
                <Typography variant='p' color='white'>
                        Our mission is for every building in the
                    world to have an intelligent system that
                    protects the people within. With proactive
                    monitoring and building intelligence,
                    Wahsega creates safe environments that
                    allow people to learn, create and work on
                    what they do best.

                </Typography>
            </Box>
            <Box sx={{padding:'15px'}}></Box>

            <Box >
                <BlockTitle >Vision Statement</BlockTitle>
                <Typography variant='p' color='white' >
                        Intelligent environments everywhere by
                    2027. We provide a safe and secure environment 
                    that allows you to comfortably focus on your 
                    job or education.
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            padding:'0 0 10px 0'
            }}>

        <ContentBlock >

        
            <Typography color='white' sx={{
                padding:'100px 20px'
            }}
            >“Never Copy. Always Surpass.” – Joey Gullo, VP of Sales</Typography>
            <Box 
            sx={{
                padding:'20px',
                backgroundOrigin:'center',
                height:'200px',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                width:'400px',
                backgroundImage:"url('https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhwZWN0YXRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')"}}
            ></Box>
        </ContentBlock>
                </Box>
    </SubPage>
  )
}

export default WhoWeAre