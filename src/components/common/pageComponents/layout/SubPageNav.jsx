import { Button, Toolbar } from '@mui/material'
import React from 'react'

const SubPageNav = ({pagesToLinksArray}) => {
    console.log(pagesToLinksArray,'apge')
        const PageLinkMap = pagesToLinksArray.map((page,index)=>{
           return <Button key={index} href={page.toLowerCase()}>{page}</Button>
        })

    return (
    <Toolbar sx={{
        
    }}>
        {PageLinkMap}
    </Toolbar>
  )
}

export default SubPageNav