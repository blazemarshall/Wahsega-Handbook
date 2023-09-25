import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import { Box, Stack } from '@mui/material'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../components/common/pageComponents/typography/BulletPoint'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import ContentBlock from '../../../components/common/pageComponents/layout/ContentBlock'

const Time_Off = () => {
  return (
    <SubPage>
      <PageTitle>Time Off</PageTitle>
        <ArticleBlock>
            <BlockTitle>Holiday Pay</BlockTitle>
            <ParagraphBlock>Wahsega recognizes ten paid holidays each year:</ParagraphBlock>
              <ContentBlock
                customCSSProperties={{
                  padding:'-55px'
                }}
              >
                <Stack  sx={{padding:'-55px'}}>
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
                </Stack>
              </ContentBlock>
            <ParagraphBlock>
                Should a holiday fall on a weekend, the holiday will be
              observed on the work day closest to the holiday.
            </ParagraphBlock>
          </ArticleBlock>

        <ArticleBlock>
          <BlockTitle>Vacation</BlockTitle>
          <ParagraphBlock>
              All full-time employees are eligible for vacation leave
            benefits. Full-time employees are those working 30-plus
            hours per week. Vacation accrual begins on the first day
            of full - time employment. Full-time employees accrue up
            to fifteen business days each year. Vacation can be used
            only after it is earned and employees cannot accrue more
            than 1 years worth of vacation time.</ParagraphBlock>        
        </ArticleBlock>
    </SubPage>
  )
}

export default Time_Off