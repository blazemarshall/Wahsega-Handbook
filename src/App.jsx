// import { useState } from 'react'
import RoutePaths from './routes/RoutePaths'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Box ,createTheme,ThemeProvider} from '@mui/material'
import {blue} from '@mui/material/colors'
function App() {

  const theme= createTheme({
    palette:{
      primary:blue
    },
    transitions:{
    },
  })


  return (
    <>
    <ThemeProvider theme={theme}>


    <Header />
    <Box  color='primary'      sx={{margin:"70px 0 0 0",}} >

       <Router>
        <RoutePaths />
       </Router>
    </Box>
    <Footer />       
       </ThemeProvider>
    </>
  )
}

export default App
