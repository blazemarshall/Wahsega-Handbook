import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../components/common/pageComponents/typography/BulletPoint'

const Responsiblities = () => {
  return (
            <ArticleBlock>
            <BlockTitle>Responsibilities</BlockTitle>
            <ParagraphBlock>Management is responsible for providing and maintaining:
                <BulletPoint>A safe working environment.</BulletPoint>
                <BulletPoint>Safe systems of work.</BulletPoint>
                <BulletPoint>Facilities for the welfare of all workers.</BulletPoint>
                <BulletPoint>Any information, instruction, training and supervision needed to make sure that all workers
                    are safe from injury and risks to their health.
                </BulletPoint>
                
                Workers are responsible for:
                <BulletPoint>Ensuring their own personal health and safety, and that of others in the workplace.</BulletPoint>
                <BulletPoint>Complying with any reasonable directions (such as safe work procedures, wearing personal
                    protective equipment) given by management for health and safety.</BulletPoint>
                <BulletPoint>Following safety protocols for as detailed out in the next section. </BulletPoint>

                We expect visitors and contractors to:
                <BulletPoint>Stay out of workstations when power tools are in use.</BulletPoint>
                <BulletPoint>Wear protective gear if necessary.</BulletPoint>


            </ParagraphBlock>
            </ArticleBlock>
    )
}

export default Responsiblities