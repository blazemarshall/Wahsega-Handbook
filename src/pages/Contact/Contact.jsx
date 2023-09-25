import { Box, Typography } from "@mui/material"
import Page from "../../components/common/pageComponents/layout/Page"
import PageTitle from "../../components/common/pageComponents/typography/PageTitle"
import ArticleBlock from "../../components/common/pageComponents/layout/ArticleBlock"
import SubPage from "../../components/common/pageComponents/layout/SubPage"
import DataSpan from "../../components/common/pageComponents/typography/DataSpan"
import { DataSaverOff } from "@mui/icons-material"

const Contact = () => {


  return (
    <Page
      customCssProperties={{
        padding: '50px 0',
        color:'white',
      }}
    >
      <SubPage customCSSProperties={{
        // padding:'150px 0'
      }}>

      {/* <ArticleBlock> */}

        <PageTitle>Company Contact Information</PageTitle>
      <Box sx={{
        display:'flex',
        flexDirection:'row'
      }}>

      <Box sx={{
        padding:'0 10px'
      }}>
        <Box sx={{
          padding:'10px 0'
        }}>

        <Box sx={{
          display:'flex',
          flexDirection:'row',
        }}>
          <Typography>Phone:</Typography>
          <Typography>888-509-2379 </Typography>
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
        }}>
          <Typography>Email:</Typography>
          <Typography>info@wahsega.com </Typography>
        </Box>
          </Box>
        <Box sx={{
          padding:'10px 0'
        }}
        >
          <Typography>Offices</Typography>
          <Box sx={{
            padding:'10px 0'
          }}>
            <DataSpan>Midtown Innovation Center</DataSpan>
            <DataSpan>75 5th Street NW, Suite 2170</DataSpan>
            <DataSpan>Atlanta, GA 30308</DataSpan>
          </Box>
          <Box sx={{
            padding:'10px 0'
          }}>
            <DataSpan>Corporate Headquarters</DataSpan>
            <DataSpan>6755 Shiloh Rd E Suite 101</DataSpan>
            <DataSpan>Alpharetta, GA 30005</DataSpan>
          </Box>
        </Box>
      </Box>
      {/* ------------------------------------------ */}
      <Box sx={{
        paddingTop:'50px'
      }}>
          <Typography>CEO, Greg Coonly</Typography>
          <Box>
            <Box sx={{
              display:'flex',
              flexDirection:'row',
              padding:'10px 0 0'
            }}>
              <Typography>Phone:</Typography>
              <DataSpan>888-509-2379</DataSpan>
            </Box>
            <Box sx={{
              // padding:'10px 0',
              display:'flex',
              flexDirection:'row'
            }}>
              <Typography>Email:</Typography>
              <DataSpan>greg@wahsega.com</DataSpan>
            </Box>
            <Box sx={{
              padding:'10px 0',
              display:'flex',
              flexDirection:'row'
            }}>
              <Typography>Website:</Typography>
              <Typography sx={{textDecoration:'underline'}}>https://wahsega.com/</Typography>
            </Box>
          </Box>
      </Box>
              </Box>
              {/* </ArticleBlock> */}
              </SubPage>
    </Page>
  )
}

export default Contact