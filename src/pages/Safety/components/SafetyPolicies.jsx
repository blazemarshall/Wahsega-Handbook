import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'
import ContentBlock from '../../../components/common/pageComponents/layout/ContentBlock'
import { Box, Stack, Typography } from '@mui/material'
import BulletPoint from '../../../components/common/pageComponents/typography/BulletPoint'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import Responsiblities from './Responsiblities'

const SafetyPolicies = () => {
  return (
    <SubPage>
      <PageTitle>Safety Policies</PageTitle>
      <ArticleBlock>
        <BlockTitle>Personal Safety</BlockTitle>
        <ParagraphBlock>
            It is the responsibility of each employee to conduct all tasks in a safe and
          efficient manner complying with all local, state and federal safety and health
          regulations and program standards, and with any special safety concerns for
          use in a particular area or with a client.
        </ParagraphBlock>
        <ParagraphBlock>
            Although most safety regulations are consistent throughout each
          department and program, each employee has the responsibility to identify
          and familiarize her/himself with the emergency plan for his/her working
          area. Each facility shall have posted an emergency plan detailing procedures
          in handling emergencies such as fire, weather-related events and medical
          crises.
        </ParagraphBlock>
      </ArticleBlock>
      <ArticleBlock>
        <BlockTitle>Warehouse Safety</BlockTitle>
        <ParagraphBlock>
            The following statement is to comply with the Occupational Safety and Health Act. It is the
          employee’s right to work in a safe and healthy environment. This compliance form lists the
          goals for our company’s safety policy and responsibilities of management and workers,
          provides the safety protocols, and the safety response to accidents. All employees are
          expected and encouraged to participate in safety and health program activities including the
          following: reporting hazards, unsafe work practices and accidents immediately to their
          supervisors; and wearing required personal protective equipment.
        </ParagraphBlock>
        <ContentBlock>
          <Stack direction={'column'} >

          <Typography>This policy:</Typography>
          <Box>
            <BulletPoint>Shows the commitment of Wahsega Lab’s management and workers to health and safety</BulletPoint>
            <BulletPoint>Aims to remove or reduce the risks to the health, safety and welfare of all workers,
              visitors, and anyone else who may be affected by our business operations.</BulletPoint>
            <BulletPoint>Aims to ensure all work activities are done safely.</BulletPoint>
          </Box>
          </Stack>
        </ContentBlock>
      </ArticleBlock>
      <Responsiblities />
    </SubPage>
  )
}

export default SafetyPolicies