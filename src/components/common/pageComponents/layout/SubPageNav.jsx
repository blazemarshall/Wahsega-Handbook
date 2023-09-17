import { Button, Toolbar } from '@mui/material'
import React from 'react'
import SubPageNavBtn from '../../buttons/SubPageNavBtn'

const SubPageNav = ({pagesToLinksArray}) => {




        const SubPageNavButtonMap = pagesToLinksArray.map((page,index)=>{
            return <SubPageNavBtn key={index} endPoint={`/benefits/${index}`} text={page} />
        })

    return (
    <Toolbar sx={{
        
    }}>
        {/* {PageLinkMap} */}
        {SubPageNavButtonMap}
    </Toolbar>
  )
}

export default SubPageNav