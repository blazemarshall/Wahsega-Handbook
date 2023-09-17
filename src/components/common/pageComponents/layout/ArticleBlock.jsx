import { Box, Container } from '@mui/material'
import React from 'react'

const ArticleBlock = ({customCSSProperties,children}) => {
  return (
        <Container
            sx={{
                ...customCSSProperties,
                display:'flex',
                flexDirection:'column',
                padding:'2rem',
                // textIndent:'2rem',
            }}
        >{children}</Container>
    )
}

export default ArticleBlock