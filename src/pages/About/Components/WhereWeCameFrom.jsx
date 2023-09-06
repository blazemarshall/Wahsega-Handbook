import { Box, Container, Typography, } from "@mui/material"



const WhereWeCameFrom = () => {
  return (
    <Container id='#whereWeCameFrom'
    sx={{
        margin:'0 -23px  ',
        padding:' 150px 75px',
        color:'white',
        display:'flex',
        width:'91vw',
        height:'80vh',
        flexDirection:'column',
        justifyContent:'center',
        boxShadow:'0 0px 50px 5px #1976d2 inset',
        backgroundColor:'info.dark',
        borderRadius:'5px',

    }}>
        <Typography variant="h4" color='white'>
        Where we came from</Typography>
        <Box sx={{
            padding:'20px',
            textIndent:'50px'
        }}>

        <Typography variant="p" color={'white'}
        sx={{

        }}>
        In 2003, Unicoi Systems was started with the goal to create low level networking and VOIP protocols and hardware designs. The company would
license those to all of the largest companies in the world. Since inception, this work has shifted over billions of products worldwide including
companies such as Siemens, Samsung, Verizon, and many more household names. Unicoi’s VOIP software is used in over 60% of 911 dispatch
centers in the United States, in air traffic controls centers, and in the space station for the Iridium satellite constellation. Overtime, it was apparent
that Unicoi could use the profit from licensing fees to create their own end product for large companies and establish a division that would
generate revenue based on their own work. This is how Wahsega was born. 

        </Typography>
            </Box>
            <Box sx={{
                padding:'20px',
            textIndent:'50px'

            }}>                
        <Typography variant="p" color={'white'}
        sx={{
            textIndent:'50px'

        }}>
        Wahsega was established in 2015 with the intent to find markets that could be easily disrupted. The company started in the access control space
but it did not scale quickly and became burdensome. With market research, and discussions with schools and integrators, Wahsega pivoted to the
mass notification space. This space was significantly larger than access control and had a fragmented market with old and slow players. Through
our technology and expertise we could blow past them and dramatically reduce cost for a full featured IP safety platform. Wahsega has seen a
2-3x growth rate year over year with long term goals to become a billion dollar company that is the defacto building security platform across all
industries and market segments.
        </Typography>
            </Box>
            <Box sx={{padding:'20px',
                textIndent:'50px'
                
        
        }}>

        <Typography variant="p" color={'white'}>
        Overall, Wahsega has a culture of natural innovation. The diverse and growing team has decades of industry experience from engineering, design,
marketing and sales. Our team strives to engineer new ways to solve old problems that nobody else seems to be able to figure out. We believe
that we should never copy - surpass from the very beginning. We are made up of passionate people from all walks of life with the single unified
purpose of making sure each and every customer is beyond happy. Through the principle of Kaizen, we are always looking for ways to improve
every internal and external process which results in better outcomes for our customers and our staff.
        </Typography>
            </Box>
    </Container>
  )
}

export default WhereWeCameFrom