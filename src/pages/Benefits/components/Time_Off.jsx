import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import { Box } from '@mui/material'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../components/common/pageComponents/typography/BulletPoint'

const Time_Off = () => {
  return (
    <SubPage>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'1rem',
        flex:'6 6'
      }}>

        <Box>
            <BlockTitle>Holiday Pay</BlockTitle>
            <ParagraphBlock>Wahsega recognizes ten paid holidays each year:</ParagraphBlock>
            <Box sx={{
              padding:'15px'
            }}>
              <BulletPoint>New Year's Day</BulletPoint>
              <BulletPoint>Good Friday</BulletPoint>
              <BulletPoint>Memorial Day</BulletPoint>
              <BulletPoint>Independence Day</BulletPoint>
              <BulletPoint>Labor Day</BulletPoint>
              <BulletPoint>Thanksgiving Day</BulletPoint>
              <BulletPoint>Day After Thanksgiving</BulletPoint>
              <BulletPoint>Christmas Eve</BulletPoint>
              <BulletPoint>Christmas Day</BulletPoint>
              <BulletPoint>New Year's Eve</BulletPoint>

            </Box>
            <ParagraphBlock>Should a holiday fall on a weekend, the holiday will be
observed on the work day closest to the holiday.</ParagraphBlock>
        </Box>
        <Box>
          <BlockTitle>Vacation</BlockTitle>
          <ParagraphBlock>All full-time employees are eligible for vacation leave
benefits. Full-time employees are those working 30-plus
hours per week. Vacation accrual begins on the first day
of full - time employment. Full-time employees accrue up
to fifteen business days each year. Vacation can be used
only after it is earned and employees cannot accrue more
than 1 years worth of vacation time.</ParagraphBlock>        
        </Box>
      </Box>
    </SubPage>
  )
}

export default Time_Off