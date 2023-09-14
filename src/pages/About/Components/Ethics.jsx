import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BulletPoint from '../../../components/common/pageComponents/typography/BulletPoint'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import SubPage from '../../../components/common/pageComponents/layout/SubPage.jsx'

const Ethics = () => {
  return (
    <SubPage>
      <PageTitle>Ethics</PageTitle>
      <Box>
        <Box>
          <BulletPoint>• Competitors - We never bad-mouth a competitor</BulletPoint>
          <BulletPoint>• Listen - We always listen first</BulletPoint>
          <BulletPoint>• Tell the Truth - We do not make false claims, exaggerate, or oversell a product</BulletPoint>
        </Box>
        <Box>
          <BulletPoint>• Respect - Always respect everyone’s time</BulletPoint>
          <BulletPoint>• Privacy - Don’t be creepy</BulletPoint>
          <BulletPoint>• Transparency - Customers can easily self-discover our products and technology</BulletPoint>

        </Box>

      </Box>
      
    </SubPage>
  )
}

export default Ethics