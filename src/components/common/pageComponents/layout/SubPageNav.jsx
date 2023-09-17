import { Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SubPageNavBtn from '../../buttons/SubPageNavBtn'

const SubPageNav = ({
    customCSSProperties,
    pagesToLinksArray,
    routeName
}) => {

    const SubPageNavButtonMap = 
        pagesToLinksArray.map((page,index)=>{
            return <SubPageNavBtn
                        key={index} 
                        endPoint={`/${routeName}/${index}`} 
                        text={page} />
        })

    return (
    <Toolbar sx={{
       ...customCSSProperties,
       display:'flex',
       flexDirection:'row',
       gap:'1rem'
    }}>
        <Typography sx={{
            display:'flex',
            justifyContent:'center',
            color:'white',
            padding:'15px',
            backgroundColor:'info.main',
        }}
        >{routeName.charAt(0).toUpperCase()+routeName.slice(1)}</Typography>
        {SubPageNavButtonMap}
    </Toolbar>
  )
}

export default SubPageNav