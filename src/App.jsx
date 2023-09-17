// import { useState } from 'react'
import RoutePaths from './routes/RoutePaths'
import {BrowserRouter as Router} from 'react-router-dom'
import { Box ,Container,createTheme,ThemeProvider} from '@mui/material'
import {blue} from '@mui/material/colors'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { useState } from 'react'
function App() {
  // const [routeName,setRouteName] = useState('')

  const theme= createTheme({
    palette:{
      primary:blue
    },
    transitions:{
    },
  })


  return (
    <Container sx={{}}>

    <ThemeProvider theme={theme}>
      <NavigationBar />
        <Box  
          sx={{
            margin:"70px 0 0 0",
          }}
        >
          
          <Router>
            <RoutePaths />
          </Router>
        </Box>
       </ThemeProvider>
       </Container>
  )
}

export default App
