import { Box, Container } from '@mui/material'
import React from 'react'

const ArticleBlock = ({children}) => {
  return (
        <Container
            sx={{
                display:'flex',
                flexDirection:'column',
                padding:'2rem',
                // textIndent:'2rem',
            }}
        >{children}</Container>
    )
}

export default ArticleBlock