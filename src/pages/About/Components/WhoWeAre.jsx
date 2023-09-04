import { Box, Container, Typography } from '@mui/material'

const WhoWeAre = () => {
  return (
    <Container id="#whoWeAre"
    sx={{
        display:'flex',
        flexDirection:'column',
        margin:'0 -21.5px ',
        padding:'50px 50px',
        width:'91vw',
        height:'80vh',
        color:'white',
        justifyContent:'center',
        boxShadow:'0 0px 50px 5px #1976d2 inset',
        backgroundColor:'info.dark',
        borderRadius:'5px'
    }}>
            <Typography variant='h4' color={'white'}
            sx={{

            }}
            >Who We Are</Typography>
        <Box sx={{
            display:'flex',
            padding:'15px'

        }}>
            <Box sx={{
                
            }}>
                <Typography variant='h6' color={'white'}
                sx={{
                    
                }}
                >Mission Statement</Typography>
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
            <Box>
                <Typography variant='h6' color='white'>Vision Statement</Typography>
                <Typography variant='p' color='white'
                >Intelligent environments everywhere by
                2027. We provide a safe and secure environment 
                that allows you to comfortably focus on your 
                job or education.</Typography>
            </Box>
        </Box>
        <Box sx={{
            display:'flex',
            padding:'50px',
            backgroundColor:'#000033'
        }}>
            <Typography color='white' sx={{
                padding:'100px 20px'
            }}
            >“Never Copy. Always Surpass.” – Joey Gullo, VP of Sales</Typography>
            <Box 
            sx={{
                height:'300px',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                width:'300px',
                backgroundImage:"url('https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhwZWN0YXRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')"}}
            ></Box>
            <Box />
        </Box>
    </Container>
  )
}

export default WhoWeAre