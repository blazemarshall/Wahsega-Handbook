import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Container } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container sx={{
      height:'100vh'
  }}>

    <App  />
    </Container>
  </React.StrictMode>,
)
